import './index.css'

const LatestMatch = props => {
  const {MatchDetails} = props
  const {latestMatchDetails, teamBannerUrl} = MatchDetails
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="match-bg-container-details">
      <img
        src={teamBannerUrl}
        alt="team banner"
        className="team-banner-image"
      />
      <p className="matches">Latest Matches</p>
      <div className="match-bg-container-part">
        <div>
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div className="details">
          <p className="innigs-titles">First Innings</p>
          <p className="innig-result">{firstInnings}</p>
          <p className="innigs-titles">Second Innings</p>
          <p className="innig-result">{secondInnings}</p>
          <p className="innigs-titles">Man Of The Match</p>
          <p className="innig-result">{manOfTheMatch}</p>
          <p className="innigs-titles">Umpires</p>
          <p className="innig-result">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
