import { Firebase, FirebaseRef } from './firebaseSetup';



/**
  * Login to Firebase with Email/Password
  */
  export function loginFire(formData) {
    const {
      email,
      password,
    } = formData;

    console.log(formData)

    // Go to Firebase
    return Firebase.auth()
    .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    .then(() =>
        Firebase.auth()
        .signInWithEmailAndPassword(email, password).catch(() => console.log( 'failed'))
        .then((res) => {
            if (res && res.uid) {
                // Update last logged in data
                FirebaseRef.child(`users/${res.uid}`).update({
                    lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
                });

                // Send verification Email when email hasn't been verified
                if (res.emailVerified === false) {
                    Firebase.auth().currentUser
                    .sendEmailVerification()
                    .catch(() => console.log('Verification email failed to send'));
                }

            }; 
        })
    ) 
  }




/**
  * Add item to will
  */
  export function addItem(formData) {
    console.log('firebase subitting')
    console.log(formData);

    /*const {
        email,
        firstName,
        itemDesc,
        itemName,
        lastName
    } = willData;*/

    willData = formData;

    const UID = Firebase.auth().currentUser.uid;
    //console.log(Firebase.auth().currentUser.email);
    if (!UID) return false;

    willData['senderEmail'] = Firebase.auth().currentUser.email;
    //console.log(UID)

    const ref = FirebaseRef.child(`willItems`);

    var newWillKey = ref.push().key;

    willData["id"] = newWillKey;

    var updates = {};
    updates['/willItems/' + newWillKey] = willData;
    updates['/user-willItems/' + UID + '/' + newWillKey] = willData;
    //sreturn FirebaseRef.update(updates);

    FirebaseRef.update(updates)
}