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