import { Firestore, QueryFieldFilterConstraint, collection, getDocs, query, where } from "firebase/firestore";

const useFirestore = (db: Firestore, path: string) => {

    const getAll = async () => {
        const querySnapshot = await getDocs(collection(db, path));

        return querySnapshot.docs.map(doc => doc.data()) || []
    }

    const getById = async (...conditions: QueryFieldFilterConstraint[] ) => {
        const q = query(collection(db, path), ...conditions);

        const querySnapShot = await getDocs(q);

        return querySnapShot.docs[0].data() || null;
    }

    return{
        getAll,
        getById
    }
}

export default useFirestore;
