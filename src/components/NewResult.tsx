import PointSelector from "./PointSelector"

interface Props {
  scores: number[]
  laps: number[]
}

const NewResult = (props: Props) => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold text-black pt-4">Nytt resultat</p>
      <div className="flex flex-col text-sm text-gray-500">
        Namn
        <input className="border-2 rounded-md h-10 py-3 px-4"></input>
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        Jag föll ner i hål nummer
        <PointSelector numbers={props.scores} />
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        På varv nummer
        <PointSelector numbers={props.laps} />
      </div>
      <div className="flex justify-center pt-4">
        <button className="rounded-full bg-green-600 hover:bg-green-900 shadow-md w-3/4 h-12 text-white font-bold text-xl">
          Skicka resultat
        </button>
      </div>
    </div>
  )
}

export default NewResult
