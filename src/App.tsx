import Player from "./interfaces/Player"
import ScoreBoard from "./components/ScoreBoard"
import NewResult from "./components/NewResult"

function App() {
  const players: Player[] = [
    {
      name: "Beauden David",
      date: "2021-01-04",
      score: 1,
    },
    {
      name: "Eli Contreras",
      date: "2021-02-04",
      score: 2,
    },
    {
      name: "Daisie Norman",
      date: "2021-03-04",
      score: 3,
    },
    {
      name: "Honey Kaur",
      date: "2021-03-04",
      score: 4,
    },
    {
      name: "Makenzie Franks",
      date: "2021-03-04",
      score: 5,
    },
    {
      name: "Aryan Mckenna",
      date: "2021-03-04",
      score: 6,
    },
    {
      name: "Herbert Patel",
      date: "2021-03-04",
      score: 7,
    },
    {
      name: "Kingsley Benjamin",
      date: "2021-03-04",
      score: 8,
    },
    {
      name: "Pablo Sheldon",
      date: "2021-03-04",
      score: 9,
    },
    {
      name: "Jeremy Pierce",
      date: "2021-03-04",
      score: 10,
    },
  ]
  const possibleScores: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]
  const possibleLaps: number[] = [1, 2, 3, 4, 5]

  const saveToServer = (player: Player) => {
    console.log(`${player.name}`)
    console.log(`${player.date}`)
    console.log(`${player.score}`)
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
