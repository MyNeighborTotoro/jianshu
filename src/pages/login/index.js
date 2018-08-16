import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	LoginWrapper,
	LoginMain,
	LoginTitle,
	LoginContainer
} from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
	render() {
		const { login, loginStatus } = this.props;
		if( !loginStatus ) {
			return (
				<LoginWrapper>
					<LoginMain>
						<LoginTitle>
							<div>
								<span className="active">登录</span>
								<b>·</b>
								<span >注册</span>
							</div>
						</LoginTitle>
						<LoginContainer>
							<div className="inputBox">
								<input placeholder="手机号或邮箱" ref={(input)=>{this.account = input}}/>
								<input placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
								<button onClick={()=>login(this.account.value, this.password.value)}>登录</button>
							</div>
						</LoginContainer>
					</LoginMain>
				</LoginWrapper>
			)
		} else {
			return <Redirect to="/" />
		}
	}
}

const mapState = (state) => {
	return {
		loginStatus: state.getIn(['login','loginStatus'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		login(id, pwd) {
			dispatch(actionCreators.login(id, pwd));
		}
	}
}

export default connect(mapState, mapDispatch)(Login);