import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: {0: 0, 1:0, 2:0, 3:0, 4:0, 5:0}
    }
    this.satunnainen = this.satunnainen.bind(this)
    /* this.aanesta = this.aanesta.bind(this) */
  }

  satunnainen() {
      let rand = Math.floor(Math.random()*anecdotes.length)
      this.setState({selected: rand})
  }

  aanesta = () => {
    const anekdootinIndeksi = this.state.selected
    const kopio = {...this.state.pisteet}
    kopio[anekdootinIndeksi] += 1
    this.setState({pisteet: kopio})
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>Anekdootilla on {this.state.pisteet[this.state.selected]} ääntä</p>
        <button onClick={this.aanesta}>
            Äänestä tätä anekdoottia
        </button>
        <p/>
        <button onClick={this.satunnainen}>
            Satunnainen
        </button>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)