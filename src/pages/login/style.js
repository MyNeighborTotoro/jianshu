import styled from 'styled-components';

export const LoginWrapper = styled.div`
	width: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    box-sizing: border-box;
`;

export const LoginMain = styled.div`
	width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
`;

export const LoginTitle = styled.h4`
	margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    box-sizing: border-box;
    display: block;
    span {
    	padding: 10px;
    }
    .active {
    	font-weight: 700;
	    color: #ea6f5a;
	    border-bottom: 2px solid #ea6f5a;
	    padding: 10px;
    }
`;

export const LoginContainer = styled.div`
	.inputBox {
		width: 300px;
		margin-bottom: 30px;
		margin: 0 auto;
	}
	input {
		display: block;
		width: 300px;
		height: 50px;
		padding-left: 
		border-radius: 4px 4px 0 0;
		padding: 4px 15px 4px 32px;
		outline: none;
		box-sizing: border-box;
	}
	button {
		background: #3194d0;
		margin-top: 20px;
	    width: 100%;
	    padding: 9px 18px;
	    font-size: 18px;
	    border: none;
	    border-radius: 25px;
	    color: #fff;
	    cursor: pointer;
	    outline: none;
	    display: block;
	    clear: both;
	}
`;