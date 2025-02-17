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
    const leaderboardRef = collection(db, "quizResults");
    const q = query(leaderboardRef, orderBy("score", "desc"), orderBy("totalTime", "asc"));
    const querySnapshot = await getDocs(q);
    
    const leaderboard = [];
    querySnapshot.forEach((doc) => {
      leaderboard.push(doc.data());
    });
  
    return leaderboard;
  };