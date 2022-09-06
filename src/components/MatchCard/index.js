import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = eachMatchDetails

  const statusColor = matchStatus === 'Won' ? 'win' : 'loss'

  return (
    <li className="each-match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
