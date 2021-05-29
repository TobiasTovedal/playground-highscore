import Player from "../interfaces/Player"

const ScoreBoardRow = (props: Player) => {
  return (
    <div className="flex m-1">
      <div className="w-48">{props.name}</div>
      <div className="w-24">{props.date}</div>
      <div className="w-2 ml-4 mr-4 font-bold">{props.points}p</div>
    </div>
  )
}

export default ScoreBoardRow
