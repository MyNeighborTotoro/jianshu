import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
	.rg-link {
		color: black;
		text-decoration: none;
	}
	.rg-link:hover {
		border-bottom: 1px solid black;
	}
`;

export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	margin-top: 30px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	float: right;
	width: 240px;
`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	line-height: 32px;
	font-size: 14px;
	padding-right: 10px;
	background: #f7f7f7;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListWrapper = styled.div`
	width: 625px;
`;

export const ListItem = styled.div`
	min-height: 140px;
	position: relative;
	width: 100%;
	margin: 0 0 15px;
	padding: 15px 2px 20px 0px;
	border-bottom: 1px solid #f0f0f0;
	word-wrap: break-word;
	line-height: 20px;
	box-sizing: border-box;
	font-size: 17px;
	.list-item-pic {
		position: absolute;
		top: 50%;
		margin-top: -52px;
		right: 0;
		width: 125px;
		height: 100px;
		border-radius: 4px;
		border: 1px solid #f0f0f0;
	}
`;

export const ListInfo = styled.div`
	&.have-img {
		padding-right: 140px;
	}
	width: 623px;
	height: 107px;
	box-sizing: border-box;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
	}
`;

export const ListTitle = styled.div`
	cursor: pointer;
	margin: -7px 0 4px;
	display: inherit;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.5;
	text-decoration: none;
	color: black;
`;

export const ListAbstract = styled.p`
	margin: 0 0 8px;
	height: 48px;
	font-size: 13px;
	line-height: 24px;
	color: #999;
	box-sizing: border-box;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;	
`;

export const ListMeta = styled.div`
	padding-right: 0 !important;
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	box-sizing: border-box;
	a {
		margin-right: 10px;
		color: #b4b4b4;
		cursor: pointer;
	}
	a:hover {
		color: black;
	}
	span {
		margin-right: 10px;
    	color: #b4b4b4;
	}
	i.iconfont {
		font-size: 12px;
		line-height: 20px;
		margin-right: 5px;
	}
`;

export const RecommendWrapper = styled.div`
	margin-top: 26px;
    padding-bottom: 4px;
    min-height: 228px;
    box-sizing: border-box;
`;

export const RecommendItem = styled.div`
	a {
		cursor: pointer;
	}
	img {
		width: 100%;
	    min-height: 50px;
	    margin-bottom: 6px;
	    border-radius: 4px;
	    vertical-align: middle;
	    border: 0;
	}
`;

export const RecommendDownload = styled.a`
	display: block;
	margin-bottom: 30px;
    padding: 10px 14px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    height: 82px;
    box-sizing: border-box;
    margin-top: 4px;
    img {
    	width: 60px;
    	height: 60px;
    	opacity: .85;	
    	vertical-align: middle;
    }
    .info {
    	display: inline-block;
	    vertical-align: middle;
	    margin-left: 7px;
    }
    .title {
    	font-size: 15px;
    	color: #333;	
    	cursor: pointer;
    }
    .description {
    	margin-top: 4px;
    	font-size: 13px;
    	color: #999;
    }
`;

export const WriterWrapper = styled.div`
	margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    width: 100%;
`;

export const WriterTitle = styled.div`
	text-align: left;
	span {
		font-size: 14px;
    	color: #969696;
	}
	a {
		float: right;
	    display: inline-block;
	    font-size: 14px;
	    color: #969696;
	    cursor: pointer;
	}
	.iconfont {
		font-size: 13px;
		display: inline-block;
    	line-height: 1;
    	margin-right: 5px;
	}
`;

export const WriterList = styled.div`
	margin: 0 0 20px;
    text-align: left;
    list-style: none;
    box-sizing: border-box;
    font-size: 13px;
    width: 100%;
    overflow: hidden;
`;

export const WriterItem = styled.div`
	margin-top: 15px;
	height: 50px;
	overflow:hidden;
	.pic {
		float: left;
	    width: 48px;
	    height: 48px;
	    margin-right: 10px;
	    display: block;
	    cursor: pointer;
	}
	.pic img {
		width: 100%;
	    height: 100%;
	    border: 1px solid #ddd;
	    border-radius: 50%;
	}
	.follow {
		float: right;
	    margin-top: 5px;
	    padding: 0;
	    font-size: 13px;
	    color: #42c02e;
	    cursor: pointer;
	}
	.name {
		padding-top: 5px;
	    margin-right: 60px;
	    font-size: 14px;
	    display: block;
	    cursor: pointer;
	}
	p {
	    font-size: 12px;
	    color: #969696;
	    margin-top: 10px;
	    box-sizing: border-box;
	    display: block;
	}
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	background-color: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	margin: 30px 0;
	cursor: pointer;
`;

export const BackTop = styled.div`
	width: 52px;
	height: 52px;
	position: fixed;
	right: 50px;
	bottom: 100px;
	line-height: 52px;
	text-align: center;
	border: 1px solid #ccc;
	cursor: pointer;
`;