import app from './FirebaseConfig';
import { user } from '../store/store';
import { get } from 'svelte/store';
class Firebase{
    constructor(){
        this.auth = app.auth();
    }
    signIn = async (email,password) => {
        const resp = await this.auth.signInWithEmailAndPassword(email,password).then((data)=>{
            console.log("Xd");
            user.update( n =>{
                n.likes = 0;
                return n;
            })
            return {"status":"success"}
        }).catch((error) => {
            return {"status":"fail","message":error.code}
        });
        return resp;
    }
}


export default Firebase