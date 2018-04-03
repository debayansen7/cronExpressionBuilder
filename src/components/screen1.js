import React, {Component}  from 'react'
// import ReactDOM from 'react-dom';
import { timeInterval, hourInterval, dayInterval, monthInterval, dayOfWeek, yearInterval } from './assets';

class Screen extends Component {
    constructor(props){
        super(props);
        this.state={
            cronExpression: [],
            secExp : '*',
            minExp : '*',
            hrExp : '*',
            dayExp : '*',
            monthExp : '*',
            yearExp : '*',

            
        };
    };

    onSelectValue = (e) => {

    };

    getCronExpression = () => {

    };

  render() {
    console.log(timeInterval);
    console.log(hourInterval);
    console.log(dayInterval);
    console.log(monthInterval);
    console.log(dayOfWeek);
    console.log(yearInterval);
    return (
      <div className="Screen">
        <div>
            <button onClick={this.everyBtnClick} type="button">Every</button>
            <button onClick={this.onBtnClick} type="button">On</button>
        </div>
        <div>
            <select >
            {
                timeInterval.map(sec => {
                    return (<option key={sec} value={sec}>{sec}</option>)
                })
            }
            </select>
            <button onClick={this.everyBtnClick} type="button">seconds</button>
            <select >
            {
                timeInterval.map(min => {
                    return (<option key={min} value={min}>{min}</option>)
                })
            }
            </select>
            <button onClick={this.everyBtnClick} type="button">minutes</button>
            <select >
            {
                hourInterval.map(min => {
                    return (<option key={min} value={min}>{min}</option>)
                })
            }
            </select>
            <button onClick={this.onBtnClick} type="button">hours</button>
        </div>
        <div className='BtnArea'>
            <button onClick={this.getCronExpression} type="button">GET EXPRESSION</button>
        </div>
      </div>
    );
  }
}

export default Screen;
