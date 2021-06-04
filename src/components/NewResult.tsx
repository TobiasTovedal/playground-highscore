import ScoreSelector from "./ScoreSelector"
import React, { useState } from "react"

interface Props {
  scores: number[]
  laps: number[]
}

const NewResult = (props: Props) => {
  const [playerName, setPlayerName] = useState("")
  const [scoreValue, setScoreValue] = useState(0)
  const [lapValue, setLapValue] = useState(0)

  const saveScore = (e: any) => {
    e.preventDefault()
    setPlayerName("")
  }

  return (
    <form onSubmit={saveScore} className="space-y-4">
      {playerName}
      {scoreValue}
      {lapValue}
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
        <ScoreSelector
          numbers={props.scores}
          onChange={(value) => setScoreValue(value)}
        />
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        På varv nummer
        <ScoreSelector numbers={props.laps} />
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
