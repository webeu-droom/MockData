const admin = require("../node_modules/firebase-admin");
const faker = require("faker");
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://droom-7efee.firebaseio.com"
});
