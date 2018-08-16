import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeStatus = (status) => {
	return {
		type: actionTypes.CHANGE_STATUS,
		loginStatus: status
	}
}


export const login = (id, pwd) => {
	return (dispatch) => {
		axios.get('/api/login.json?id='+id+'&pwd='+pwd)
			.then((res)=>{
				dispatch(changeStatus(res.data.data))
			})
	}
}

export const logout = () => {
	return {
		type: actionTypes.LOG_OUT,
		loginStatus: false
	}
}