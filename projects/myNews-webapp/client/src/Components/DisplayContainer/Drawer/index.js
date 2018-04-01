import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuExampleSimple from './MenuExampleSimple';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MdRight from 'react-icons/lib/md/keyboard-arrow-right';
import MenuItem from 'material-ui/MenuItem';
import history from '../../../history';
import {connect} from 'react-redux';
import {logout} from '../../../redux/Auth';
import {getTopStories} from '../../../redux/News';

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
                              <MenuItem primaryText="Argentina" onClick={()=>this.countrySelect('ar')} />
                              <MenuItem primaryText="Belgium" onClick={()=>this.countrySelect('be')} />
                              <MenuItem primaryText="Brazil" onClick={()=>this.countrySelect('br')} />
                              <MenuItem primaryText="Canada" onClick={()=>this.countrySelect('ca')} />
                              <MenuItem primaryText="Cuba" onClick={()=>this.countrySelect('cu')} />
                              <MenuItem primaryText="France" onClick={()=>this.countrySelect('fr')} />
                              <MenuItem primaryText="Germany" onClick={()=>this.countrySelect('de')} />
                              <MenuItem primaryText="Hong Kong" onClick={()=>this.countrySelect('hk')} />
                              <MenuItem primaryText="Ireland" onClick={()=>this.countrySelect('ie')} />
                              <MenuItem primaryText="Israel" onClick={()=>this.countrySelect('il')} />
                              <MenuItem primaryText="Japan" onClick={()=>this.countrySelect('jp')} />
                              <MenuItem primaryText="Mexico" onClick={()=>this.countrySelect('mx')} />
                              <MenuItem primaryText="Netherlands" onClick={()=>this.countrySelect('nl')} />
                              <MenuItem primaryText="Norway" onClick={()=>this.countrySelect('no')} />
                              <MenuItem primaryText="United Kingdom" onClick={()=>this.countrySelect('gb')} />
                              <MenuItem primaryText="United States" onClick={()=>this.countrySelect('us')} />
                              </div>
                          ]}
                      />
                     <MenuItem
                         primaryText="News Sources"
                         menuItems={[
                             <div>
                             <MenuItem primaryText="ABC News" onClick={()=>this.sourceSelect('abc-news')} />
                             <MenuItem primaryText="Al Jazeera" onClick={()=>this.sourceSelect('al-jazeera-english')} />
                             <MenuItem primaryText="BBC News" onClick={()=>this.sourceSelect('bbc-news')} />
                             <MenuItem primaryText="BBC Sports" onClick={()=>this.sourceSelect('bbc-sport')} />
                             <MenuItem primaryText="Buzzfeed" onClick={()=>this.sourceSelect('buzzfeed')} />
                             <MenuItem primaryText="CBS News" onClick={()=>this.sourceSelect('cbs-news')} />
                             <MenuItem primaryText="CNN" onClick={()=>this.sourceSelect('cnn')} />
                             <MenuItem primaryText="Daily Mail" onClick={()=>this.sourceSelect('daily-mail')} />
                             <MenuItem primaryText="ESPN" onClick={()=>this.sourceSelect('espn')} />
                             <MenuItem primaryText="Google News" onClick={()=>this.sourceSelect('google-news')} />
                             <MenuItem primaryText="Hacker News" onClick={()=>this.sourceSelect('hacker-news')} />
                             <MenuItem primaryText="IGN" onClick={()=>this.sourceSelect('IGN')} />
                             <MenuItem primaryText="Le Monde" onClick={()=>this.sourceSelect('le-monde')} />
                             <MenuItem primaryText="MSNBC" onClick={()=>this.sourceSelect('msnbc')} />
                             <MenuItem primaryText="NBC" onClick={()=>this.sourceSelect('nbc-news')} />
                             <MenuItem primaryText="Huffington Post" onClick={()=>this.sourceSelect('the-huffington-post')} />
                             <MenuItem primaryText="National Geographic" onClick={()=>this.sourceSelect('national-geographic')} />
                             <MenuItem primaryText="New York Times" onClick={()=>this.sourceSelect('the-new-york-times')} />
                             <MenuItem primaryText="Wall Street Journal" onClick={()=>this.sourceSelect('the-wall-street-journal')} />
                             <MenuItem primaryText="Washington Post" onClick={()=>this.sourceSelect('the-washington-post')} />
                             <MenuItem primaryText="USA Today" onClick={()=>this.sourceSelect('usa-today')} />
                             <MenuItem primaryText="Wired" onClick={()=>this.sourceSelect('wired')} />
                             <MenuItem primaryText="Vice News" onClick={()=>this.sourceSelect('vice-news')} />
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
