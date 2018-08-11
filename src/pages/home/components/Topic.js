import React, { Component } from 'react';
import { 
	TopicWrapper,
	TopicItem
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Topic extends Component {
	render() {
		const { topicList } = this.props;
		return (
			<TopicWrapper>
				{
					topicList.map((item)=>(
						<TopicItem key={item.get('id')} >
							<img 
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}
			</TopicWrapper>
		)
	}

	componentDidMount() {
		this.props.getList();
	}
}

const mapState = (state) => {
	return {
		topicList: state.getIn(['home','topicList'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getList() {
			dispatch(actionCreators.getList());
		}
	}
}

export default connect(mapState, mapDispatch)(Topic);