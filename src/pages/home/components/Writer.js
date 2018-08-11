import React, { Component } from 'react';
import {
	WriterWrapper,
	WriterTitle,
	WriterItem,
	WriterList
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Writer extends Component {
	render() {
		const { writerList } = this.props;
		return (
			<WriterWrapper>
				<WriterTitle>
					<span>推荐作者</span>
					<a>
						<i className="iconfont">&#xe851;</i>
						换一批
					</a>
				</WriterTitle>
				<WriterList>
					{
						writerList.map((item)=>{
							return (
								<WriterItem key={item.get('author')}>
									<a className="pic">
										<img src={item.get('imgUrl')} alt="" />
									</a>
									<a className="follow">
										<i className="iconfont">&#xe600;</i>
										关注
									</a>
									<a className="name">
										{item.get('author')}
									</a>
									<p>
										写了{item.get('words')}字 · {item.get('likes')}喜欢
									</p>
								</WriterItem>
							)
						})
					}
				</WriterList>
			</WriterWrapper>
		)
	}

	componentDidMount() {
		this.props.getWriterList();
	}

}

const mapState = (state) => {
	return {
		writerList: state.getIn(['home','writerList'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getWriterList() {
			dispatch(actionCreators.getWriterList());
		}
	}
}

export default connect(mapState, mapDispatch)(Writer);