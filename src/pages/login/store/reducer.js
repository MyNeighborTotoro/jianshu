import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	loginStatus: false
});

export default (state = defaultState, action) => {
	switch(action.type){
		case actionTypes.CHANGE_STATUS:
			return state.set('loginStatus', action.loginStatus);
		case actionTypes.LOG_OUT:
			return state.set('loginStatus', action.loginStatus);
		default: 
			return state;
	}
}