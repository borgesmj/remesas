import { onValue, ref, set } from 'firebase/database'
import { db } from './config/firebase'

export const escribirTasa = (peso) => {
    try {
        set(ref(db, 'tasas'), {
            peso
        })
    } catch (e) {
        console.log('hubo un error actualizando la tasa')
    }
}


export const leerTasa = () => {
    const tasasRef = ref(db, 'tasas');
    onValue(tasasRef, snapshopt => {
        console.log(snapshopt.val())
    })

}

