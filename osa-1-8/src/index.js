import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ teksti, click }) => {
    return (
        <button onClick={click}>
            {teksti}
        </button>
    )
}

const Statistic = ({ teksti, luku }) => {
    return (
        <div>
            {teksti} {luku}
        </div>
    )
}
const Statistics = ({ hyva, huono, neutraali, keskiarvo, positiiviset }) => {
    return (
        <div>
            <h2>Statistiikka</h2>
            <Statistic teksti="Hyvä" luku={hyva} />
            <Statistic teksti="Neutraali" luku={neutraali} />
            <Statistic teksti="Huono" luku={huono} />
            <Statistic teksti="Keskiarvo" luku={keskiarvo} />
            <Statistic teksti="Positiivisia" luku={positiiviset} />
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0,
            positiivisia: 0,
            positiivisiaProsentti: "0",
            counter: 0
        }
        this.hyvaPlus = this.hyvaPlus.bind(this)
        this.neutraaliPlus = this.neutraaliPlus.bind(this)
        this.huonoPlus = this.huonoPlus.bind(this)
    }
    hyvaPlus() {
        let kaikki = this.state.hyva + this.state.huono + this.state.neutraali + 1
        this.setState({ keskiarvo: (this.state.hyva + 1 - this.state.huono) / kaikki })
        this.setState({ hyva: this.state.hyva + 1 })
        this.setState({ positiivisia: (this.state.hyva + 1) / kaikki * 100 })
        this.setState({
            positiivisiaProsentti:
                ((this.state.hyva+1) / kaikki * 100).toString().concat("%")
        })
    }
    neutraaliPlus() {
        let kaikki = this.state.hyva + this.state.huono + this.state.neutraali + 1
        this.setState({ keskiarvo: (this.state.hyva - this.state.huono) / kaikki })
        this.setState({ neutraali: this.state.neutraali + 1 })
        this.setState({ positiivisia: this.state.hyva / kaikki * 100 })
        this.setState({
            positiivisiaProsentti:
                (this.state.hyva / kaikki * 100).toString().concat("%")
        })
    }
    huonoPlus() {
        let kaikki = this.state.hyva + this.state.huono + this.state.neutraali + 1
        this.setState({ keskiarvo: (this.state.hyva - this.state.huono - 1) / kaikki })
        this.setState({ huono: this.state.huono + 1 })
        this.setState({ positiivisia: this.state.hyva / kaikki * 100 })
        this.setState({
            positiivisiaProsentti:
                (this.state.hyva / kaikki * 100).toString().concat("%")
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <Button teksti="hyvä" click={this.hyvaPlus} />
                    <Button teksti="neutraali" click={this.neutraaliPlus} />
                    <Button teksti="huono" click={this.huonoPlus} />
                </div>
                <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali}
                    huono={this.state.huono} keskiarvo={this.state.keskiarvo}
                    positiiviset={this.state.positiivisiaProsentti} />
            </div >
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)