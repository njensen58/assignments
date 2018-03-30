import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import history from '../../../../history';
import {logout} from '../../../../redux/Auth';

const style = {
  display: 'inline-block',
  width: '100%',
  minWidth: '100%'
};

class MenuExampleSimple extends React.Component{
    constructor(){
        super();
        this.goToLogin = this.goToLogin.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    goToLogin(){
        history.push('/login');
    }

    goToHome(){
        history.push('/');
        this.props.handleClose();
    }

    render(){
        let auth = this.props.user.isAuthenticated;
        return (
          <div>
            <Paper style={style}>
              <Menu>
                { auth ? null : <MenuItem primaryText="Login" onClick={this.goToLogin}/> }
                 <MenuItem primaryText="Home" onClick={this.goToHome}/>
                { auth ? <MenuItem primaryText="Sign out" onClick={this.props.logout}/> : null }
              </Menu>
            </Paper>
          </div>
        )
    };
}
export default connect(state=>state,{logout})(MenuExampleSimple);
