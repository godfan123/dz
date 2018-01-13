import React from 'react';
import logoImg from './logo.png';
import './logo.css';
class Log extends React.Component{
    render(){
        return (
            <div className="logo-container">
               <img src={logoImg} alt=""/>
            </div>
        )
    }
}
export default  Log

