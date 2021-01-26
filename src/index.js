import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './QuoteBox ';



class QuoteApp extends React.Component {
  render() {
    
    return(
      <QuoteBox />
    )
  }
}

ReactDOM.render( <QuoteApp /> ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
