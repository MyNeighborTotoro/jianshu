import React, { PureComponent } from 'react';
import {
	DetailWrapper,
	Header,
	Author,
	AuthorInfo,
	AuthorMeta,
	Content
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends PureComponent {
	render() {
		const { title, userImg, userName, time, words, reading, comment, likes, rewards } = this.props;
		return (
			<DetailWrapper>
				<Header>
					{title}
				</Header>
				<Author>
					<a className="pic">
						<img src={userImg} alt=""/> 
					</a>
					<AuthorInfo>
						<span className="name">
							<a>{userName}</a>
						</span>
						<a className="follow">
							<i className="iconfont">&#xe600;</i>
							关注
						</a>
						<AuthorMeta>
							<span>{time}</span>
							<span>字数 {words}</span>
							<span>阅读 {reading}</span>
							<span>评论 {comment}</span>
							<span>喜欢 {likes}</span>
							<span>赞赏 {rewards}</span>
						</AuthorMeta>
					</AuthorInfo>
				</Author>
				<Content dangerouslySetInnerHTML={{__html: this.props.content}} />
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}

}

const mapState = (state) => {
	return {
		title: state.getIn(['detail','title']),
		userImg: state.getIn(['detail','userImg']),
		userName: state.getIn(['detail','userName']),
		time: state.getIn(['detail','time']),
		words: state.getIn(['detail','words']),
		reading: state.getIn(['detail','reading']),
		comment: state.getIn(['detail','comment']),
		likes: state.getIn(['detail','likes']),
		rewards: state.getIn(['detail','rewards']),
		content: state.getIn(['detail','content'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getDetail(id) {
			dispatch(actionCreators.getDetail(id));
		}
	}
}

export default connect(mapState, mapDispatch)(Detail);