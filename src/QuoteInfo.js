import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './QuoteBox ';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




class QuoteInfo extends React.Component {



    render() {

        return (
            <div>
                <div class="quote-text">
                    <p id="text" style={{color: this.props.color, transition: 'color 0.5s ease'}}></p>
                </div>
                <div class='quote-author'>
                    <p id="author" style={{color: this.props.color, transition: 'color 0.5s ease'}}></p>
                </div>
                <div class='buttons row'>
                    <div class='column'>
                        <button style={{background: this.props.color}} id="new-quote" onClick={this.props.newQuote}>New Quote</button>
                    </div>
                    <div class='column'>
                        <div class='row'>
                            <a class="twitter-share-button" href="#" id="tweet-quote" href=''><i class="fab fa-twitter-square" style={{color: this.props.color, transition: "color 0.5s ease"}}></i></a>
                            <a class="twitter-share-button" href="#" id="tumble-quote" href=''><i class="fab fa-tumblr" style={{color: this.props.color, transition: "color 0.5s ease"}}></i></a>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default QuoteInfo