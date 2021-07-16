import React, { useState } from "react"
import Player from "../interfaces/Player"

interface Props {
  scores: number[]
  laps: number[]
  onSave: (player: Player) => void
}

const NewResult = (props: Props) => {
  const [playerName, setPlayerName] = useState("")
  const [scoreValue, setScoreValue] = useState(1)
  const [lapValue, setLapValue] = useState(1)

  const saveScore = (e: any) => {
    e.preventDefault()

    const player: Player = {
      name: playerName,
      date: "Some date",
      score: scoreValue + (lapValue - 1) * 15,
    }
    
    props.onSave(player)

    setPlayerName("")
    setScoreValue(1)
    setLapValue(1)
  }

  return (
    <form onSubmit={saveScore} className="space-y-4">
      <p className="text-xl font-semibold text-black pt-4">Nytt resultat</p>
      <div className="flex flex-col text-sm text-gray-500">
        Namn
        <input
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
          className="border-2 rounded-md h-10 py-3 px-4"
        ></input>
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        Jag föll ner i hål nummer
        <select
          name="score"
          id="score"
          value={scoreValue}
          onChange={(e) => setScoreValue(Number(e.target.value))}
          className="border-2 rounded-md h-10 py-1 px-4"
        >
          {props.scores.map((n) => (
            <option value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        På varv nummer
        <select
          name="laps"
          id="laps"
          value={lapValue}
          onChange={(e) => setLapValue(Number(e.target.value))}
          className="border-2 rounded-md h-10 py-1 px-4"
        >
          {props.laps.map((n) => (
            <option value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="rounded-full bg-green-600 hover:bg-green-900 shadow-md w-3/4 h-12 text-white font-bold text-xl"
        >
          Skicka resultat
        </button>
      </div>
    </form>
  )
}

export default NewResult
