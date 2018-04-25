import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import AppView from './appview';
import reducer from './reducer.js';
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';

var store = createStore(reducer);

store.dispatch({
	type: "SET_STATE",
	state: {
		phones: ["iPhone 7 Plus", "Samsung Galaxy A5"]
	}
});

ReactDOM.render(
	<Provider store={store}>
			<AppView />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
