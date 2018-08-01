import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteBox from './QuoteBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
registerServiceWorker();
