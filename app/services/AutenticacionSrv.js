import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export const ingresar = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Acceso exitoso", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al acceder ", errorCode);
        });

}
export const finalizarSesion = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Cierre exitoso")
    }).catch((error) => {
        console.log("Error al cerrar ")
    });
}
export const registrarUsuario = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Usuario creado", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear usuario",errorCode)
        });
}
export const resetearClave = (email) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth,email)
        .then(() => {
           console.log("Cambio de clave satisfactorio")
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al cambiar clave",errorCode)
        });
}