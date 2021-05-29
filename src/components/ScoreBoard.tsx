import Player from "../interfaces/Player"
import ScoreBoardRow from "./ScoreBoardRow"

interface Props {
  players: Player[]
}

function ScoreBoard(props: Props) {
  return (
    <div>
      <p className="text-xl font-semibold text-black pb-4">Highscore</p>
      <div>
        {props.players.map((player) => (
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

export default ScoreBoard
