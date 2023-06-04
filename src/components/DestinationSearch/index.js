import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {userInput: ''}

  handleChange = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {userInput} = this.state
    const filteredList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(userInput.toLowerCase()),
    )
    console.log(filteredList)

    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.handleChange}
          value={userInput}
          placeholder="search here"
          className="user-input"
        />
        <ul className="destination-items">
          {filteredList.map(each => (
            <DestinationItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
