import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MdRight from 'react-icons/lib/md/keyboard-arrow-right';
import MenuItem from 'material-ui/MenuItem';
import history from '../../../history';
import {connect} from 'react-redux';
import {logout} from '../../../redux/Auth';
import {getTopStories} from '../../../redux/News';
import {countries, sources} from '../../../resources/countrySources';


class DrawerUndockedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
    this.goToLogin = this.goToLogin.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.countrySelect = this.countrySelect.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.sourceSelect = this.sourceSelect.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  goToLogin(){ history.push('/login');}

  goToHome(){history.push('/');this.handleClose();}

  countrySelect(country){
      this.props.getTopStories(country);
      this.props.updateDisplay();
      this.handleClose();
  }

  sourceSelect(source){
      this.props.updateDisplayOnSourceSelect(source);
      this.handleClose()
  }

  goToProfile(){history.push('/profile')}

  render() {
      const buttonStyle = {
          position: 'fixed',
          left: '0',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '30px',
          minWidth: '30px'
      }

      let auth = this.props.user.isAuthenticated;

      const mappedCountryIcons = countries.map(country => {
          return (
              <MenuItem primaryText={country.c} onClick={()=>this.countrySelect(country.co)} />
          )
      })

      const mappedSourceIcons = sources.map(source => {
          return (
              <MenuItem primaryText={source.s} onClick={()=>this.sourceSelect(source.co)} />
          )
      })

    return (
      <div>
        <RaisedButton
          icon={<MdRight />}
          onClick={this.handleToggle}
          buttonStyle={buttonStyle}
          style={buttonStyle}

        />
        <Drawer
          docked={false}
          width={170}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        { auth ? null : <MenuItem primaryText="Login" onClick={this.goToLogin}/> }
         <MenuItem primaryText="Home" onClick={this.goToHome}/>
             { auth ?
                 <div>
                     <MenuItem primaryText="Profile" onClick={this.goToProfile}/>

                     <MenuItem
                         primaryText="Top Stories"
                         menuItems={[
                             <div>
                             {mappedCountryIcons}
                             </div>
                         ]}
                     />
                     <MenuItem
                         primaryText="News Sources"
                         menuItems={[
                             <div>
                             {mappedSourceIcons}
                             </div>
                         ]}
                     />
                 </div>
             :
             null
             }
             { auth ? <MenuItem primaryText="Sign out" onClick={this.props.logout}/> : null }
        </Drawer>
      </div>
    );
  }
}

export default connect(state=>state,{getTopStories, logout})(DrawerUndockedExample)
