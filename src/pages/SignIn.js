import React from 'react';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';

const SignIn = () => {
  const onGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      alert('Signed In!');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button onClick={onGoogleSignIn}> Sign In with Google </button>
    </div>
  );
};

export default SignIn;
