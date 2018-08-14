import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changDetail = (data) => ({
	type: actionTypes.GET_DETAIL,
	data
})

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id).then((res)=>{
			const data = fromJS(res.data.data);
			dispatch(changDetail(data));
		})
	}
}