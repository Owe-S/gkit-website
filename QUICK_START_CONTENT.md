# 🎯 QUICK START: POPULATE FIRESTORE IN 3 STEPS

## Choose Your Method

### ⭐ METHOD 1: ADMIN PANEL (Recommended for Testing)

```
Step 1: Open admin panel
   → https://golfklubb-it-website.web.app/admin

Step 2: Add documents (click "+ New Item")
   → See ADMIN_CONTENT_GUIDE.md for all field values
   → 1 home document
   → 4 solution documents  
   → 6 app documents

Step 3: Verify
   → Refresh page
   → All documents should load
   → ✅ Done!

⏱️  Time: 10-15 minutes
```

---

### ⚡ METHOD 2: FIREBASE CONSOLE (Direct Access)

```
Step 1: Open Firebase Console
   → https://console.firebase.google.com/project/golfklubb-it-website/firestore

Step 2: Click collection → Add document
   → Set document ID
   → Add fields one by one
   → See ADMIN_CONTENT_GUIDE.md for values

Step 3: Save and repeat
   → Create all 11 documents
   → ✅ Done!

⏱️  Time: 15 minutes
```

---

### 🤖 METHOD 3: AUTOMATED SCRIPT (Full Automation)

```
Step 1: Get API Key
   → https://console.firebase.google.com/project/golfklubb-it-website/settings/general
   → Copy "Web API Key"

Step 2: Set environment variable
   Windows (PowerShell):
   $env:FIREBASE_API_KEY = "YOUR-API-KEY-HERE"
   
   Windows (Command Prompt):
   set FIREBASE_API_KEY=YOUR-API-KEY-HERE

Step 3: Run script
   node scripts/populate-firestore-rest.mjs

Step 4: Done! ✅
   → All 11 documents created in ~10 seconds
   → Check admin panel to verify

⏱️  Time: 5 minutes (setup) + 1 minute (execution)
```

---

## ✅ Verification

After completing any method:

1. Go to: https://golfklubb-it-website.web.app/admin
2. Refresh the page
3. Verify you see:
   - home: 1 document
   - solutions: 4 documents
   - apps: 6 documents
4. ✅ Success!

---

## 📚 Full Guides

- **Manual Methods:** [ADMIN_CONTENT_GUIDE.md](./ADMIN_CONTENT_GUIDE.md)
- **Comprehensive Guide:** [PHASE_5B_CONTENT_POPULATION.md](./PHASE_5B_CONTENT_POPULATION.md)
- **Execution Status:** [PHASE_5B_EXECUTION_READY.md](./PHASE_5B_EXECUTION_READY.md)

---

## 🆘 Need Help?

- **Can't log in?** → Clear cache, try incognito mode
- **Documents don't appear?** → Refresh page (F5)
- **Permission denied?** → Check Firestore security rules deployed
- **Script error?** → Verify FIREBASE_API_KEY is correct

See full troubleshooting in [PHASE_5B_CONTENT_POPULATION.md](./PHASE_5B_CONTENT_POPULATION.md#🔧-troubleshooting)

---

**Ready? Pick a method and execute now! 🚀**
