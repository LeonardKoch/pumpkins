import React, { Component } from 'react';
import logo from './logo.svg';
import pumpkinDark from './images/pumpkin_dark.jpg';
import pumpkin0 from './images/pumpkin_lit_0.jpg';
import pumpkin1 from './images/pumpkin_lit_1.jpg';
import pumpkin2 from './images/pumpkin_lit_2.jpg';
import pumpkin3 from './images/pumpkin_lit_3.jpg';
import pumpkin4 from './images/pumpkin_lit_4.jpg';
import pumpkin5 from './images/pumpkin_lit_5.jpg';
import './App.css';

const pumpkins = [
    pumpkin0,
    pumpkin1,
    pumpkin2,
    pumpkin3,
    pumpkin4,
    pumpkin5,
];

class App extends Component {
    constructor() {
        super();

        this.state = {
            pumpkins: []
        };
    }

    addPumpkin() {
        this.setState({pumpkins: [...this.state.pumpkins, Math.round(Math.random()*5)]})
    }

    render() {
        return (
            <div className="App" style={{backgroundColor: '#412301', height: '100vh'}}>
                <div>
                    {this.state.pumpkins.map((pumpkinImageNumber) => <Pumpkin pumpkinImageNumber={pumpkinImageNumber} />)}
                </div>
                <div>
                    <button onClick={() => this.addPumpkin()} style={{lineHeight: '30px', color: 'white', backgroundColor: 'orange'}}>
                        Add a Pumpkin!
                    </button>
                </div>
            </div>
        );
    }
}


class Pumpkin extends React.Component {
    constructor() {
        super();

        this.state = {
            lit: false
        };
    }

    light() {
        this.setState({
            lit: true
        });
    }

    dim() {
        this.setState({
            lit: false
        });
    }

    render() {
        return <img src={this.state.lit ? pumpkins[this.props.pumpkinImageNumber] : pumpkinDark}
                    onClick={() => {
                        if(this.state.lit)
                        {
                            this.dim()
                        }
                        else
                        {
                            this.light()
                        }
                    }}
                    style={pumpkinStyle}
                />
    }
}

const pumpkinStyle = {
    width: '200px'
};

export default App;