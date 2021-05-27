import React from "react"
import PointSelector from "./PointSelectorComponent"

const possibleScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const possibleLaps = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col p-8 rounded-xl shadow-lg bg-white space-y-4">
        <p className="text-xl font-medium text-black">Highscore</p>
        <p className="text-m text-gray-600 text-justify">
          1. Namn Namnsson, 2021-05-22, 7p <br />
          2. Namn Namnsson, 2021-05-22, 7p <br />
          3. Namn Namnsson, 2021-05-22, 7p <br />
          4. Namn Namnsson, 2021-05-22, 7p <br />
          5. Namn Namnsson, 2021-05-22, 7p <br />
          6. Namn Namnsson, 2021-05-22, 7p <br />
          7. Namn Namnsson, 2021-05-22, 7p <br />
          8. Namn Namnsson, 2021-05-22, 7p <br />
          9. Namn Namnsson, 2021-05-22, 7p <br />
          10. Namn Namnsson, 2021-05-22, 7p
        </p>
        <br />
        <p className="text-xl font-medium text-black">Nytt resultat</p>
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
    </div>
  )
}

export default App
