import React, { PureComponent } from 'react';
import { 
	ListItem,
	ListInfo,
	ListTitle,
	ListWrapper,
	ListAbstract,
	ListMeta,
	LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { listItems, getMoreList, articalPage } = this.props;
		return (
			<ListWrapper>
				{
					listItems.map((item, index)=>{
						return (
							<ListItem key={index}>
								{	
									(item.get('img')) && <img 
										className='list-item-pic' 
										src={item.get('img')} 
										alt=''
									/>
								}	
								<ListInfo className={ (item.get('img')) ? 'have-img' : '' }>
									<Link to="/detail/2" className="rg-link">
										<ListTitle >{item.get('title')}</ListTitle>
									</Link>
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
				<LoadMore onClick={() => {getMoreList(articalPage)} }>加载更多</LoadMore>
			</ListWrapper>
		)
	}

	componentDidMount() {
		this.props.getListItems();
	}

}

const mapState = (state) => {
	return {
		listItems: state.getIn(['home','listItems']),
		articalPage: state.getIn(['home','articalPage'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getListItems() {
			dispatch(actionCreators.getListItems());
		},
		getMoreList(articalPage) {
			dispatch(actionCreators.getMoreList(articalPage));
		}
	}
}

export default connect(mapState, mapDispatch)(List);