import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	topicList: [],
	listItems: [],
	recommendList: [],
	writerList: []
});

export default (state = defaultState, action) => {
	switch(action.type){
		case actionTypes.CHANGE_LIST:
			return state.set('topicList',action.topicList);
		case actionTypes.CHANGE_LIST_ITEMS:
			return state.set('listItems',action.listItems);
		case actionTypes.CHANGE_RECOMMEND_LIST:
			return state.set('recommendList',action.recommendList);
		case actionTypes.CHANGE_WRITER_LIST:
			return state.set('writerList',action.writerList);
		default: 
			return state;
	}
}