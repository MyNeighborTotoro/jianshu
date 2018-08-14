import React, { PureComponent } from 'react';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0,0);
	}

	render() {
		const { showScroll } = this.props;
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4381/3cdf43257e95766122959099cd4b41b495e6adfc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ showScroll ? <BackTop onClick={this.handleScrollTop}>
					<i className='iconfont'>&#xe603;</i>
				</BackTop> : null }
			</HomeWrapper>
		)
	}

	bindEvent() {
		window.addEventListener('scroll', this.props.toggleShowScroll);
	}

	componentDidMount() {
		this.bindEvent();
	}

	componentWillUnMount() {
		window.removeEventListener('scroll', this.props.toggleShowScroll);
	}

}

const mapState = (state) => {
	return {
		showScroll: state.getIn(['home','showScroll'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		toggleShowScroll() {
			if(document.documentElement.scrollTop > 100){
				dispatch(actionCreators.toggleShowScroll(true));
			}else {
				dispatch(actionCreators.toggleShowScroll(false));
			}	
		}
	}
}

export default connect(mapState, mapDispatch)(Home);