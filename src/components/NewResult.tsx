import React, { useState } from "react"

interface Props {
  scores: number[]
  laps: number[]
}

const NewResult = (props: Props) => {
  const [playerName, setPlayerName] = useState("")
  const [scoreValue, setScoreValue] = useState(1)
  const [lapValue, setLapValue] = useState(1)

  const saveScore = (e: any) => {
    e.preventDefault()
    setPlayerName("")
  }

  const array1 = [1, 4, 9, 16]

  // pass a function to map
  const map1 = array1.map((x) => x * 2)

  console.log(map1)
  // expected output: Array [2, 8, 18, 32]

  return (
    <form onSubmit={saveScore} className="space-y-4">
      {/* For debugging */}
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
        <select
          name="score"
          id="score"
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
