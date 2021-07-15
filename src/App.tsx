import Player from "./interfaces/Player"
import ScoreBoard from "./components/ScoreBoard"
import NewResult from "./components/NewResult"

import firebase from "firebase/app"
import "firebase/firestore"
import { firebaseConfig } from "./firebaseConfig"

import { useCollectionData } from "react-firebase-hooks/firestore"

function App() {
  let players: Player[] = []
  const possibleLaps: number[] = [1, 2, 3, 4, 5]
  const possibleScores: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const query = db.collection("players").orderBy("score", "desc").limit(10)
  const [playerDbObjects] = useCollectionData(query)

  playerDbObjects?.forEach((playerobject) => {
    const date: Date = playerobject.createdAt?.toDate()

    const player: Player = {
      name: playerobject.name,
      date: `${date?.getFullYear()}-${date?.getMonth()}-${date?.getDate()}`,
      score: playerobject.score
    }

    players.push(player)
  })

  const saveToServer = async (player: Player) => {
    await db.collection("players").add({
      name: player.name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      score: player.score,
    })
  }
  
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col p-8 rounded-xl shadow-lg bg-white space-y-4">
        <ScoreBoard players={players} />
        <NewResult
          scores={possibleScores}
          laps={possibleLaps}
          onSave={saveToServer}
        />
      </div>
    </div>
  )
}

export default App
