import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
};

class Root extends Component  {
    render () {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('app'));