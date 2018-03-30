import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import history from '../../../../history';
import {logout} from '../../../../redux/Auth';
import {getTopStories} from '../../../../redux/News';
import Profile from '../../../Profile'

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
        this.countrySelect = this.countrySelect.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
    }

    goToLogin(){
        history.push('/login');
    }

    goToHome(){
        history.push('/');
        this.props.handleClose();
    }

    countrySelect(country){
        this.props.getTopStories(country);
        this.props.updateDisplay();
        this.props.handleClose();
    }

    goToProfile(){
        history.push('/profile')
    }

    render(){
        let auth = this.props.user.isAuthenticated;
        const style = {
              display: 'inline-block',
              margin: '16px 32px 16px 0',
        }

        return (
          <div>
            <Paper style={style}>
              <Menu>
                { auth ? null : <MenuItem primaryText="Login" onClick={this.goToLogin}/> }
                 <MenuItem primaryText="Home" onClick={this.goToHome}/>
                { auth ?
                    <div>
                        <MenuItem primaryText="Profile" onClick={this.goToProfile}/>

                         <MenuItem
                             primaryText="Top Stories"
                             menuItems={[
                                 <div>
                                 <MenuItem primaryText="Canada" onClick={()=>this.countrySelect('ca')}/>
                                 <MenuItem primaryText="Germany" onClick={()=>this.countrySelect('de')}/>
                                 <MenuItem primaryText="France" onClick={()=>this.countrySelect('fr')}/>
                                 <MenuItem primaryText="United Kingdom" onClick={()=>this.countrySelect('gb')}/>
                                 <MenuItem primaryText="Hong Kong" onClick={()=>this.countrySelect('hk')}/>
                                 <MenuItem primaryText="Japan" onClick={()=>this.countrySelect('jp')}/>
                                 <MenuItem primaryText="Mexico" onClick={()=>this.countrySelect('mx')}/>
                                 <MenuItem primaryText="Netherlands" onClick={()=>this.countrySelect('nl')}/>
                                 <MenuItem primaryText="United States" onClick={()=>this.countrySelect('us')}/>
                                 </div>
                             ]}
                         />
                        <MenuItem
                            primaryText="News Sources"
                            menuItems={[
                                <div>
                                <MenuItem primaryText="ABC News" />
                                <MenuItem primaryText="Al Jazeera" />
                                <MenuItem primaryText="BBC News" />
                                </div>
                            ]}
                        />
                    </div>
                :
                null
                }
                { auth ? <MenuItem primaryText="Sign out" onClick={this.props.logout}/> : null }
              </Menu>
            </Paper>
          </div>
        )
    };
}
export default connect(state=>state,{logout, getTopStories})(MenuExampleSimple);
