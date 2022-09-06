import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoading: true, recentMatches: []}

  componentDidMount() {
    this.getAllMatches()
  }

  getAllMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const allData = await response.json()

    const updateData = {
      teamBannerUrl: allData.team_banner_url,
      latestMatchDetails: {
        umpires: allData.latest_match_details.umpires,
        result: allData.latest_match_details.result,
        manOfTheMatch: allData.latest_match_details.man_of_the_match,
        id: allData.latest_match_details.id,
        date: allData.latest_match_details.date,
        venue: allData.latest_match_details.venue,
        competingTeam: allData.latest_match_details.competing_team,
        competingTeamLogo: allData.latest_match_details.competing_team_logo,
        firstInnings: allData.latest_match_details.first_innings,
        secondInnings: allData.latest_match_details.second_innings,
        matchStatus: allData.latest_match_details.match_status,
      },
    }
    const updateRecentMatches = allData.recent_matches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      matchDetails: updateData,
      isLoading: false,
      recentMatches: updateRecentMatches,
    })
  }

  render() {
    const {matchDetails, isLoading, recentMatches} = this.state
    const number = Math.ceil(Math.random() * 2)
    const bgColor =
      number % 2 === 0 ? 'rem-match-bg-container' : 'match-bg-container'
    return (
      <div className="sing-match-details-container">
        {isLoading && (
          <div testid="loader">
            <Loader type="Rings" color="#00BFFF" height={70} width={70} />
          </div>
        )}
        {!isLoading && (
          <div className={bgColor}>
            <LatestMatch MatchDetails={matchDetails} />
            <ul className="all-matches">
              {recentMatches.map(eachMatchDetails => (
                <MatchCard
                  eachMatchDetails={eachMatchDetails}
                  key={eachMatchDetails.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
