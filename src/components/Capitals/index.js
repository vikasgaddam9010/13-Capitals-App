import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onClickForCountry = event => {
    this.setState({capitalId: event.target.value})
  }

  capitalNameFunction = () => {
    const {capitalId} = this.state
    const capitalName = countryAndCapitalsList.find(
      each => each.id === capitalId,
    )
    return capitalName
  }

  render() {
    const {capitalId} = this.state
    const capitalName = this.capitalNameFunction(capitalId)
    const {country} = capitalName
    return (
      <div className="bg-container">
        <div className="semi">
          <h1>Countries And Capitals</h1>
          <div className="selcted-section">
            <select onChange={this.onClickForCountry} value={capitalId}>
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
