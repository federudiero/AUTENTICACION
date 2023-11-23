import { auth } from "../firebase/firebase.config";

import { useContext ,createContext } from "react";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup ,signOut} from "firebase/auth";

export const authContext= createContext()



export const useAuth= ()=>{
    const context= useContext(authContext)
    if(!context){
        console.log(console.error('no estas pasando el contexto'))
    }
    return context 
}

//createUserWithEmailAndPassword
export function AuthProvaider({children}){



    
    const register = async(email,password)=>{
    const response= await   createUserWithEmailAndPassword(auth,email,password) 
    console.log(response);

    }


    //signInWithEmailAndPassword
    const login = async(email,password)=>{
    const responseGoogle= await  signInWithEmailAndPassword(auth,email,password) 
    console.log(responseGoogle);

    }




//GoogleAuthProvider
    const loginWithGoogle = async()=>{
        const responseGoogle= new  GoogleAuthProvider() 
       return await signInWithPopup(auth,responseGoogle)
    
        }



//signOut
        const logout = async()=>{
          const response  =await signOut(auth)
          console.log(response)
       
            }



    return (<authContext.Provider value={{register,login,loginWithGoogle,logout}}>
        
        {children}
        </authContext.Provider>)
}


 