import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export async function OAuthWithGoogle(){
    try{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const userCredentials = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(userCredentials);
        const user = userCredentials.user;
        console.log("User is ",user);
        return user;
    }
    catch(err){
        throw(err);
    }
    
}