import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = (topicList) => {
	return {
		type: actionTypes.CHANGE_LIST,
		topicList: topicList
	}
}

const changeListItems = (listItems) => {
	return {
		type: actionTypes.CHANGE_LIST_ITEMS,
		listItems
	}
}

const changeRecommendList = (recommendList) => {
	return {
		type: actionTypes.CHANGE_RECOMMEND_LIST,
		recommendList
	}
}

const changeWriterList = (writerList) => {
	return {
		type: actionTypes.CHANGE_WRITER_LIST,
		writerList
	}
}

const addMoreList = (moreList, nextPage) => {
	return {
		type: actionTypes.ADD_MORE_LIST,
		moreList,
		nextPage
	}
}

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/topicList.json').then((res)=>{
			const topicList = fromJS(res.data.data);
			dispatch(changeList(topicList));
		}).catch((error)=>{
			console.log(error);
		})
	}
}

export const getListItems = () => {
	return (dispatch) => {
		axios.get('/api/listItems.json').then((res)=>{
			const listItems = fromJS(res.data.data);
			dispatch(changeListItems(listItems));
		}).catch((error)=>{
			console.log(error);
		})
	}
}

export const getRecommendList = () => {
	return (dispatch) => {
		axios.get('/api/recommendList.json').then((res)=>{
			const recommendList = fromJS(res.data.data);
			dispatch(changeRecommendList(recommendList));
		}).catch((error)=>{
			console.log(error);
		})
	}
}

export const getWriterList = () => {
	return (dispatch) => {
		axios.get('/api/writerList.json').then((res)=>{
			const writerList = fromJS(res.data.data);
			dispatch(changeWriterList(writerList));
		}).catch((error)=>{
			console.log(error);
		})
	}
}

export const getMoreList = (articalPage) => {
	return (dispatch) => {
		axios.get('/api/listItems.json?page='+articalPage).then((res)=>{
			const moreList = fromJS(res.data.data);
			dispatch(addMoreList(moreList, articalPage + 1));
		})
	}
}

export const toggleShowScroll = (show) => {
	return {
		type: actionTypes.TOGGLE_SHOW_SCROLL,
		show
	}
}