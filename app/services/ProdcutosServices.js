import { async } from '@firebase/util';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';

export const guardar = (producto) => {
    const productRef = doc(global.dbCon, "Productos", producto.codigo);
    setDoc(productRef, producto);// Recibe dos atributos la referencia y luego la data "Todos los atributos que va a recibir "
}
export const consultar = async (fnSetProductos) => {
    const productosRef = collection(global.dbCon, "Productos")
    const productosSnap = await getDocs(productosRef);
    let productosArray =[];
    productosSnap.forEach((documento) => { 
        console.log("doc", documento.data());
        productosArray.push(documento.data());
    });
    fnSetProductos(productosArray);
}