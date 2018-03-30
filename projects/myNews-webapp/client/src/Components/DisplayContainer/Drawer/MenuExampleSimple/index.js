import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import history from '../../../../history';
import {logout} from '../../../../redux/Auth';
import {getTopStories} from '../../../../redux/News';




class MenuExampleSimple extends React.Component{
    constructor(){
        super();
        this.goToLogin = this.goToLogin.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.countrySelect = this.countrySelect.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.sourceSelect = this.sourceSelect.bind(this);
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

    sourceSelect(source){
        this.props.updateDisplayOnSourceSelect(source);
        this.props.handleClose()
    }

    goToProfile(){
        history.push('/profile')
    }

    render(){
        let auth = this.props.user.isAuthenticated;
        const style = {
              display: 'inline-block',
              margin: '16px 32px 16px 0',
              width: '160px'
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
                                 <MenuItem primaryText="Canada" onClick={()=>this.countrySelect('ca')} />
                                 <MenuItem primaryText="Germany" onClick={()=>this.countrySelect('de')} />
                                 <MenuItem primaryText="France" onClick={()=>this.countrySelect('fr')} />
                                 <MenuItem primaryText="United Kingdom" onClick={()=>this.countrySelect('gb')} />
                                 <MenuItem primaryText="Hong Kong" onClick={()=>this.countrySelect('hk')} />
                                 <MenuItem primaryText="Japan" onClick={()=>this.countrySelect('jp')} />
                                 <MenuItem primaryText="Mexico" onClick={()=>this.countrySelect('mx')} />
                                 <MenuItem primaryText="Netherlands" onClick={()=>this.countrySelect('nl')} />
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
              </Menu>
            </Paper>
          </div>
        )
    };
}
export default connect(state=>state,{logout, getTopStories})(MenuExampleSimple);
