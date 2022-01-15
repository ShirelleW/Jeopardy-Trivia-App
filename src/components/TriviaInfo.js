import React, { Component } from 'react';


class TriviaInfo extends Component {
    render(props) {
        return (
            <div>
                <h2>Let's Play</h2>
                <h3>Category: {this.props.triviaInfo.category?.title}</h3>
                <h3>Points: {this.props.triviaInfo?.value}</h3>
                <h3>Answer: {this.props.triviaInfo?.question}</h3>
                {/* <h4 style={{display: (show ? "block" : "none")}}>Question: {this.props.triviaInfo?.answer}</h4> */}
            </div>
        );
    }
}

export default TriviaInfo;