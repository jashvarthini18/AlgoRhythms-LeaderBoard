import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqHe7TFyY-pA2-OqFJRPdN4IZohSwj9H0",
    authDomain: "algorythms-24a1f.firebaseapp.com",
    projectId: "algorythms-24a1f",
    storageBucket: "algorythms-24a1f.firebasestorage.app",
    messagingSenderId: "455691534989",
    appId: "1:455691534989:web:1aaf8ea358d93e11f098c4"
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