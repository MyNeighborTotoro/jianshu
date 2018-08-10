import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const inputFocused = () => ({
	type: actionTypes.INPUT_FOCUSED
});

export const inputBlur = () => ({
	type: actionTypes.INPUT_BLUR
});

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
});

export const switchPage = () => ({
	type: actionTypes.SWITCH_PAGE
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
}