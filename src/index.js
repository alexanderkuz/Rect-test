import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const INTERVAL = 100;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    increment(){
        this.setState({value: this.state.value + 1});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const value = this.state.value
        return (
            <div>
                <p>Таймер:</p>
                <p>
                    <span>{Math.round(value/INTERVAL/60/60)} : </span>
                    <span>{Math.round(value/INTERVAL/60)} : </span>
                    <span>{Math.round(value/INTERVAL)} . </span>
                    <span>{value % INTERVAL}</span>
                </p>
            </div>
        );
    }
}
ReactDOM.render(<Timer/>, document.getElementById('root2'));