import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="ipl-logo"
        />
        <h1 className="main-heading">IPL Dashboard</h1>

        {isLoading && (
          <div testid="loader">
            <Loader type="Rings" color="#00BFFF" height={70} width={70} />
          </div>
        )}

        {!isLoading && (
          <ul className="all-teams">
            {teamList.map(team => (
              <TeamCard eachTeam={team} key={team.name} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
