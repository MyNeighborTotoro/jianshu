import React, { PureComponent } from 'react';
import {
	RecommendWrapper,
	RecommendItem,
	RecommendDownload
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Recommend extends PureComponent {
	render() {
		const { recommendList } = this.props;
		return (
			<RecommendWrapper>
				{
					recommendList.map((item)=>{
						return (
							<RecommendItem key={item.get('id')}>
								<a href="">
									<img alt="" src={item.get('imgUrl')} />
								</a>
							</RecommendItem>
						)
					})
				}
				<RecommendDownload>
					<img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
					<div className="info">
						<div className="title">下载简书手机App</div>
						<div className="description">随时随地发现和创作内容</div>
					</div>
				</RecommendDownload>
			</RecommendWrapper>
		)
	}
	componentDidMount() {
		this.props.getRecommendList();
	}
}

const mapState = (state) => {
	return {
		recommendList: state.getIn(['home','recommendList'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getRecommendList() {
			dispatch(actionCreators.getRecommendList());
		}
	}
}

export default connect(mapState, mapDispatch)(Recommend);