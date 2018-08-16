import React, { PureComponent } from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as LoginACtionCreators } from '../../pages/login/store';

class Header extends PureComponent {
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, logout } = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo/>
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					{
						this.props.loginStatus ? <NavItem className="right" onClick={logout}>退出</NavItem> :
						<Link to="/login">
							<NavItem className="right">登录</NavItem>
						</Link>
					}
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch placeholder="搜索"
								className={ focused ? 'focused' : '' }
								onFocus={ () => {handleInputFocus(list)} }
								onBlur={ handleInputBlur }
							></NavSearch>
						</CSSTransition>
						<i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }
						>&#xe623;</i>
						{ this.getSearchInfo() }
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writting">
							<i className="iconfont">&#xe624;</i>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}

	getSearchInfo() {
		const { focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleSwitchPage } = this.props;
		const jsList = list.toJS();
		const pageList = [];
		for( let i = page * 10; i < (page + 1) * 10 && i < jsList.length; i++ ){
			pageList.push(
				<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
			);
		}
		if(focused || mouseIn){
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={()=>{handleSwitchPage(this.spinIcon)}}>
							<i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
							换一批 
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{ pageList }
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}

}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		mouseIn: state.getIn(['header','mouseIn']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		loginStatus: state.getIn(['login','loginStatus'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.inputFocused());
		},
		handleInputBlur() {
			dispatch(actionCreators.inputBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleSwitchPage(spinIcon) {
			let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle) {
				originAngle = parseInt(originAngle,10);
			} else {
				originAngle = 0;
			}
			spinIcon.style.transform = 'rotate(' + (originAngle+360) + 'deg)';
			dispatch(actionCreators.switchPage());
		},
		logout() {
			dispatch(LoginACtionCreators.logout());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
