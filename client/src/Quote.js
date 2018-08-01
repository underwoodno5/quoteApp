import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';



const Quote = props => (
    <div className = "singleComment">
        <div className="textContent">
            <div className="singleCommentContent">
            <h3>{props.author}</h3>
            <ReactMarkdown source={props.children} />
            </div>
        </div>
    </div>
);

/* Proptypes allows us to ensure that the correct type of data is passing into
our props, react has proptypes built in, just call the object and validate. */

Quote.propTypes ={
    author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default Quote;