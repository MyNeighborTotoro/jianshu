import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	topicList: [],
	listItems: [],
	articalPage: 1,
	recommendList: [],
	writerList: [],
	showScroll: false
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
		case actionTypes.ADD_MORE_LIST:
			return state.merge({
				listItems: state.get('listItems').concat(action.moreList),
				articalPage: action.nextPage
			});
		case actionTypes.TOGGLE_SHOW_SCROLL:
			return state.set('showScroll', action.show);
		default: 
			return state;
	}
}