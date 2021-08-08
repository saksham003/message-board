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
    <div className="login">
      <div className="login__card">
        <h1>Welcome to the Message Board!</h1>
        <p>Find the topics you like and chat with like minded people.</p>
        <button onClick={onGoogleSignIn} className="login__button">
          <i class="fab fa-google"></i>Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
