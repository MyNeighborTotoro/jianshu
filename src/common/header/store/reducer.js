import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 0,
	totalPage: 1
});

export default ( state = defaultState, action ) => {
	switch(action.type){
		case actionTypes.INPUT_FOCUSED:
			return state.set('focused',true);
		case actionTypes.INPUT_BLUR:
			return state.set('focused',false);
		case actionTypes.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case actionTypes.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case actionTypes.SWITCH_PAGE:
			return state.set('page',(state.get('page')+1)%state.get('totalPage'));
		case actionTypes.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		default:
			return state;
	}
}