import React from "react"
import PointSelector from "./PointSelectorComponent"

const players: { name: string; date: string; points: number }[] = [
  {
    name: "Beauden David",
    date: "2021-01-04",
    points: 1,
  },
  {
    name: "Eli Contreras",
    date: "2021-02-04",
    points: 2,
  },
  {
    name: "Daisie Norman",
    date: "2021-03-04",
    points: 3,
  },
  {
    name: "Honey Kaur",
    date: "2021-03-04",
    points: 4,
  },
  {
    name: "Makenzie Franks",
    date: "2021-03-04",
    points: 5,
  },
  {
    name: "Aryan Mckenna",
    date: "2021-03-04",
    points: 6,
  },
  {
    name: "Herbert Patel",
    date: "2021-03-04",
    points: 7,
  },
  {
    name: "Kingsley Benjamin",
    date: "2021-03-04",
    points: 8,
  },
  {
    name: "Pablo Sheldon",
    date: "2021-03-04",
    points: 9,
  },
  {
    name: "Jeremy Pierce",
    date: "2021-03-04",
    points: 10,
  },
]
const possibleScores: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]
const possibleLaps: number[] = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col p-8 rounded-xl shadow-lg bg-white space-y-4">
        <ScoreBoard />
        <NewResult />
      </div>
    </div>
  )
}

const NewResult = () => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold text-black pt-4">Nytt resultat</p>
      <div className="flex flex-col text-sm text-gray-500">
        Namn
        <input className="border-2 rounded-md h-10 py-3 px-4"></input>
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        Jag föll ner i hål nummer
        <PointSelector numbers={possibleScores} />
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        På varv nummer
        <PointSelector numbers={possibleLaps} />
      </div>
      <div className="flex justify-center pt-4">
        <button className="rounded-full bg-green-600 hover:bg-green-900 shadow-md w-3/4 h-12 text-white font-bold text-xl">
          Skicka resultat
        </button>
      </div>
    </div>
  )
}

function ScoreBoard() {
  return (
    <div>
      <p className="text-xl font-semibold text-black pb-4">Highscore</p>
      <div>
        {players.map((player) => (
          <ScoreBoardRow
            name={player.name}
            date={player.date}
            points={player.points}
          />
        ))}
      </div>
    </div>
  )
}

interface Props {
  name: string
  date: string
  points: number
}

const ScoreBoardRow = (props: Props) => {
  return (
    <div className="flex m-1">
      <div className="w-48">{props.name}</div>
      <div className="w-24">{props.date}</div>
      <div className="w-2 ml-4 mr-4 font-bold">{props.points}p</div>
    </div>
  )
}

export default App
