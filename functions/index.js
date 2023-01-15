const functions = require("firebase-functions");
const seller = require("firebase-admin");
seller.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    return seller.auth().getUserByEmail(data.email).then(user => {
        return seller.auth().setCustomUserClaims()(user.uid, {
            seller: true
        });
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made an admin.`
        }
    }).catch(err => {
        return err;
    });
});
