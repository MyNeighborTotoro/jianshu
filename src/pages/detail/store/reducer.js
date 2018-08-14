import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	
});

export default (state = defaultState, action) => {
	switch(action.type){
		case actionTypes.GET_DETAIL:
			return state.merge({
				title: action.data.get('title'),
				userImg: action.data.get('userImg'),
				userName: action.data.get('userName'),
				time: action.data.get('time'),
				words: action.data.get('words'),
				reading: action.data.get('reading'),
				comment: action.data.get('comment'),
				likes: action.data.get('likes'),
				rewards: action.data.get('rewards'),
				content: action.data.get('content')
			})
		default: 
			return state;
	}
}