import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0,
            positiivisiaProsentti: 0
        }
    }
    hyvaPlus() {
        let kaikki = this.state.hyva + this.state.huono + this.state.neutraali + 1
        this.setState({keskiarvo: (this.state.hyva + 1 - this.state.huono)/kaikki})
        this.setState({ hyva: this.state.hyva + 1 })
        this.setState({positiivisiaProsentti: (this.state.hyva + 1)/kaikki*100})
    }
    neutraaliPlus() {
        let kaikki = this.state.hyva + this.state.huono + this.state.neutraali + 1
        this.setState({keskiarvo: (this.state.hyva - this.state.huono)/kaikki})
        this.setState({ neutraali: this.state.neutraali + 1 })
        this.setState({positiivisiaProsentti: this.state.hyva/kaikki*100})
    }
    huonoPlus() {
        let kaikki = this.state.hyva + this.state.huono + this.state.neutraali + 1
        this.setState({keskiarvo: (this.state.hyva - this.state.huono - 1)/kaikki})
        this.setState({ huono: this.state.huono + 1 })
        this.setState({positiivisiaProsentti: this.state.hyva/kaikki*100})
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
                <div>keskiarvo {this.state.keskiarvo}</div>
                <div>positiivisia {this.state.positiivisiaProsentti}%</div>
            </div >
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)