import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const submitContactForm = functions.https.onCall(async (data, _context) /* eslint-disable-line @typescript-eslint/no-unused-vars */ => {
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


