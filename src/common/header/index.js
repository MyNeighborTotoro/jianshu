import React from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo href="/" />
			<Nav>
				<NavItem className="left active">首页</NavItem>
				<NavItem className="left">下载App</NavItem>
				<NavItem className="right">登录</NavItem>
				<NavItem className="right">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={props.focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch placeholder="搜索"
							className={ props.focused ? 'focused' : '' }
							onFocus={ props.handleInputFocus }
							onBlur={ props.handleInputBlur }
						></NavSearch>
					</CSSTransition>
					<i className={ props.focused ? 'focused iconfont' : 'iconfont' }
					>&#xe623;</i>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className="writting">
					<i className="iconfont">&#xe624;</i>
					写文章
				</Button>
				<Button className="reg">注册</Button>
			</Addition>
		</HeaderWrapper>
	);
}

const mapStateToProps = (state) => {
	return {
		focused: state.header.get('focused')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.inputFocused());
		},
		handleInputBlur() {
			dispatch(actionCreators.inputBlur());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);