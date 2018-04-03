import React, {Component}  from 'react'
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';

const screens = [
    {
        name: "screen1",
        title: "Periodically",
        active: true,
        id:1
    },
    {
        name: "screen2",
        title: "Periodically within time frame",
        active: false,
        id:2
    },
    {
        name: "screen3",
        title: "At a recurring fixed time",
        active: false,
        id:3
    }
]

class App extends Component {

    onSelectingTab = (e) => {
        console.log(e.currentTarget.id);

    }

    render() {
        return (
          <div className="App">
            <div>
                <h4>Tab Control</h4>
                {
                    screens.map(screen => {
                        return (
                            <button key={screen.id} id={screen.id} onClick={(e)=> this.onSelectingTab(e)} type="button">{screen.title}</button>
                        );
                    })
                }
            </div>
            <div>
                <Screen1 />
                <Screen2 />
                <Screen3 />
            </div>
          </div>
        );
    }
}

export default App;
