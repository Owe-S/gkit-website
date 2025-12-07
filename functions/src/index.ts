import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Firestore trigger: Send email when new lead is created (GDPR: europe-west1)
// Fixed: Corrected Gmail password (removed spaces) - 2025-12-07 18:30
export const sendLeadNotification = functions.region("europe-west1").firestore
    .document("leads/{leadId}")
    .onCreate(async (snap, context) => {
        const leadData = snap.data();
        const leadId = context.params.leadId;

        // Email configuration (using Gmail SMTP)
        const gmailUser = functions.config().gmail?.user || process.env.GMAIL_USER;
        const gmailPassword = functions.config().gmail?.password || process.env.GMAIL_APP_PASSWORD;

        console.log("📧 Attempting to send email from:", gmailUser);

        if (!gmailUser || !gmailPassword) {
            console.error("Gmail credentials not configured. Set with: firebase functions:config:set gmail.user=... gmail.password=...");
            return;
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailPassword,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Golfklubbens IT Website" <${gmailUser}>`,
            to: "kontakt-oss@golfklubb-it.com",
            subject: `🔔 Ny henvendelse fra ${leadData.firstName} ${leadData.lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
                    <div style="background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #4CAF50; margin-bottom: 20px;">📬 Ny henvendelse via kontaktskjema</h2>
                        
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h3 style="margin-top: 0; color: #333;">Kontaktinformasjon</h3>
                            <p style="margin: 10px 0;"><strong>Navn:</strong> ${leadData.firstName} ${leadData.lastName}</p>
                            <p style="margin: 10px 0;"><strong>Mobilnummer:</strong> ${leadData.mobile}</p>
                            <p style="margin: 10px 0;"><strong>E-post:</strong> <a href="mailto:${leadData.email}" style="color: #4CAF50;">${leadData.email}</a></p>
                            ${leadData.golfboxId ? `<p style="margin: 10px 0;"><strong>GolfBox ID:</strong> ${leadData.golfboxId}</p>` : ""}
                        </div>

                        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50;">
                            <p style="margin: 0; font-size: 12px; color: #666;">
                                <strong>Lead ID:</strong> ${leadId}<br>
                                <strong>Tidspunkt:</strong> ${new Date().toLocaleString("no-NO")}
                            </p>
                        </div>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                            <p style="color: #888; font-size: 12px; margin: 0;">
                                Denne e-posten ble sendt automatisk fra <strong>Golfklubbens IT</strong> kontaktskjema.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Send email
        try {
            await transporter.sendMail(mailOptions);
            console.log(`✅ Email sent successfully for lead ${leadId}`);
        } catch (error) {
            console.error("❌ Error sending email:", error);
        }
    });

// Legacy function (kept for backwards compatibility) - GDPR: europe-west1
export const submitContactForm = functions.region("europe-west1").https.onCall(async (data, _context) /* eslint-disable-line @typescript-eslint/no-unused-vars */ => {
    // 1. Validate Input
    const { name, email, club, subject, message } = data;

    if (!name || !email || !message) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            "The function must be called with name, email, and message."
        );
    }

    // 2. Save to Firestore
    try {
        const lead = {
            name,
            email,
            club: club || "Not specified",
            subject: subject || "General",
            message,
            status: "new",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        };

        await admin.firestore().collection("leads").add(lead);

        return { success: true, message: "Lead saved successfully" };
    } catch (error) {
        console.error("Error saving lead:", error);
        throw new functions.https.HttpsError(
            "internal",
            "Unable to save lead details."
        );
    }
});


