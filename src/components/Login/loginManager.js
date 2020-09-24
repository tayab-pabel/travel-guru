import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const {displayName, photoURL, email} = res.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email, 
            photo: photoURL,
            success: true
        }
        return signedInUser;
    })
    .catch(err => {
        console.log(err);
        console.log(err.message);
    })
};

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        user.success = true;
        return user;
      }).catch(err => {
        console.log(err);
        console.log(err.message);
    })
};

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        const SignedOutUser = {
            isSignedIn: false,
            name: '',
            photo: '',
            email: '',
            error: '',
            success: false
        }
        return SignedOutUser;
    })
    .catch(err => {

    })
};

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( res => {
                const newUserInfo = res.user;
                newUserInfo.err = '';
                newUserInfo.success = true;
                updateUserName(name);
                return newUserInfo;
            })
            .catch( err => {
                const newUserInfo = {};
                newUserInfo.err = err.message;
                newUserInfo.success = false;
                return newUserInfo;
            });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.err = '';
                newUserInfo.success = true;
                return newUserInfo;
            })
            .catch(function(err) {
                const newUserInfo = {};
                newUserInfo.err = err.message;
                newUserInfo.success = false;
                return newUserInfo;
            });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
    displayName: name
    }).then(function() {
        console.log('User name updated successfully')
    }).catch(function(err) {
        console.log(err)
    });
}