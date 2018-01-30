import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }
    hyvaPlus() {
        this.setState({ hyva: this.state.hyva + 1 })
    }
    neutraaliPlus() {
        this.setState({ neutraali: this.state.neutraali + 1 })
    }
    huonoPlus() {
        this.setState({ huono: this.state.huono + 1 })
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <button onClick={this.hyvaPlus.bind(this)}>
                        hyva
                    </button>
                    <button onClick={this.neutraaliPlus.bind(this)}>
                        neutraali
                    </button>
                    <button onClick={this.huonoPlus.bind(this)}>
                        huono
                    </button>
                </div>
                <h2>Statistiikka</h2>
                <div>hyvä {this.state.hyva}</div>
                <div>neutraali {this.state.neutraali}</div>
                <div>huono {this.state.huono}</div>
            </div >
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)