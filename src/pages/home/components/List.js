import React, { Component } from 'react';
import { 
	ListItem,
	ListInfo,
	ListTitle,
	ListWrapper,
	ListAbstract,
	ListMeta
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class List extends Component {
	render() {
		const { listItems } = this.props;
		return (
			<ListWrapper>
				{
					listItems.map((item)=>{
						return (
							<ListItem key={item.get('id')}>
								{	
									(item.get('img')) && <img 
										className='list-item-pic' 
										src={item.get('img')} 
										alt=''
									/>
								}	
								<ListInfo className={ (item.get('img')) ? 'have-img' : '' }>
									<ListTitle>{item.get('title')}</ListTitle>
									<ListAbstract>
										{item.get('abstract')}
									</ListAbstract>
									<ListMeta>
										<a>{item.get('author')}</a>
										<a>
											<i className="iconfont">&#xe60d;</i>
											{item.get('comments')}
										</a>
										<span>
											<i className="iconfont">&#xe65d;</i>
											{item.get('like')}
										</span>
										{
											(item.get('money')!==0) && 
											<span>
												<i className="iconfont">&#xe672;</i>
												{item.get('money')}
											</span>
										}
									</ListMeta>
								</ListInfo> 
							</ListItem>
						)
					})
				}
			</ListWrapper>
		)
	}

	componentDidMount() {
		this.props.getListItems();
	}
}

const mapState = (state) => {
	return {
		listItems: state.getIn(['home','listItems'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getListItems() {
			dispatch(actionCreators.getListItems());
		}
	}
}

export default connect(mapState, mapDispatch)(List);