import React from 'react';

import QuoteInfo from './QuoteInfo'
import $ from 'jquery'

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            color: undefined,
            quote: undefined,
            author: undefined
        }

        this.handleGetQuote = this.handleGetQuote.bind(this);
    }

    handleGetQuote() { 
        this.getQuote();
        this.getColor();
    }

    getColor() {
        const colors = ["#28b547", "#28b0b5", "#2834b5", "#6028b5", "#b5287d", "#b55528", "#287db5", "#b52828"]
        var index = Math.floor(Math.random() * 8);
        document.getElementById('body').style.background = colors[index];
        
        this.setState({
            color: colors[index]
        })
    }

    getQuote() {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
            .then(data => {

            this.setState({
                quote: data.content,
                author: data.author
            });
        })

        let quote = this.state.quote
        let author = this.state.author
        
        $('.quote-text').animate({opacity: 0}, 250, function() {
            $('.quote-text').animate({opacity: 1}, 250)
            $('#text').text(quote)

        })

        $('.quote-author').animate({opacity: 0}, 250, function() {
            $('.quote-author').animate({opacity: 1}, 250)
            $('#author').text(author);
        })
    }



    componentDidMount() {
        this.getQuote();
        this.getColor(); 
    }

    render() {
        return(
            <div>
                <div id="quote-box" >

                <QuoteInfo
                newQuote={this.handleGetQuote}
                quote = {this.state.quote}
                author={this.state.author}
                color={this.state.color}
                />

                </div>
                <p className="signature">Project idea from FCC</p>
                <p className="signature">Made by Jarrod</p>
            </div>
        )
    }
}

export default QuoteBox