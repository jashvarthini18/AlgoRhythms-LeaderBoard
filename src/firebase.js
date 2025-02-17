import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcWnOGX6YydUSFTmf6n-YorFPKAl3uPwM",
    authDomain: "algorhythms-dc8fd.firebaseapp.com",
    projectId: "algorhythms-dc8fd",
    storageBucket: "algorhythms-dc8fd.firebasestorage.app",
    messagingSenderId: "926274024197",
    appId: "1:926274024197:web:e0b2468b84cb88b44a3d6c"
  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);




  
  export const getLeaderboard = async () => {
      try {
        const querySnapshot = await getDocs(collection(db,"quizResults"));
    
        let documents = [];
    
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        
        documents.sort((a, b) => {

          if (a["score"] > b["score"]) return -1;
          if (a["score"] < b["score"]) return 1;
        

          const dateA = new Date(a["time"]);
          const dateB = new Date(b["time"]);
        
          if (dateA < dateB) return -1;
          if (dateA > dateB) return 1;
        
          return 0; 
        });
        
        return documents;
        console.log("All Documents:", documents);
        return documents;
      } catch (error) {
        console.error("Error fetching documents:", error);
      }

  };