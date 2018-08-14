import styled from 'styled-components';

export const DetailWrapper = styled.div`
	width: 620px;
	margin: 0 auto;
	padding-bottom: 100px;
`;

export const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`;

export const Author = styled.div`
	margin: 30px 0 40px;
	width: 100%;
	height: 48px;
	box-sizing: border-box;
	.pic {
		width: 48px;
	    height: 48px;
	    vertical-align: middle;
	    display: inline-block;
	    cursor: pointer;
	    text-decoration: none;
	}
	img {
		width: 100%;
	    height: 100%;
	    border: 1px solid #ddd;
	    border-radius: 50%;
	    vertical-align: middle;
	}
`;

export const AuthorInfo = styled.div`
	height: 46px;
	vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
    .name {
    	margin-right: 3px;
	    font-size: 16px;
	    vertical-align: middle;
    }
    .follow {
    	padding: 0 7px 0 5px;
    	font-size: 12px;	
    	border-color: #42c02e;
    	font-weight: 400;
	    line-height: normal;
	    border-radius: 40px;
	    color: #fff;
	    background-color: #42c02e;
	    display: inline-block;
	    text-align: center;
	    vertical-align: middle;
	    touch-action: manipulation;
	    cursor: pointer;
	    background-image: none;
	    border: 1px solid transparent;
	    white-space: nowrap;
	    user-select: none;
	    margin-left: 5px;
    }
`;

export const AuthorMeta = styled.div`
	margin-top: 5px;
    font-size: 12px;
    color: #969696;
    box-sizing: border-box;
    line-height: 30px;
    span {
    	padding-right: 5px;
    }
`;

export const Content = styled.div`
	width: 100%;
	height: auto;
	color: #2f2f2f;
    word-break: break-word!important;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    box-sizing: border-box;
    p {
    	margin: 0 0 25px;
    }
    .img-package {
    	padding-bottom: 25px;
	    width: 700px;
	    margin-left: -40px;
	    text-align: center;
    	box-sizing: border-box;
    	img {
    		width: 100%;
    	}
    	.image-caption {
    		min-width: 20%;
		    max-width: 80%;
		    min-height: 22px;
		    display: inline-block;
		    padding: 10px;
		    margin: 0 auto;
		    border-bottom: 1px solid #d9d9d9;
		    font-size: 14px;
		    color: #969696;
		    line-height: 1.7;
    	}
    }
    blockquote {
    	padding: 20px;
	    margin-bottom: 25px;
	    background-color: #f7f7f7;
	    border-left: 6px solid #b4b4b4;
	    word-break: break-word!important;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 30px;
    }
`;