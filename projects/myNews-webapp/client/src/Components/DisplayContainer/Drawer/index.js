import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuExampleSimple from './MenuExampleSimple';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MdRight from 'react-icons/lib/md/keyboard-arrow-right';

export default class DrawerUndockedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

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
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <MenuExampleSimple
                handleClose={this.handleClose}
                updateDisplay={this.props.updateDisplay}
                updateDisplayOnSourceSelect={this.props.updateDisplayOnSourceSelect}
            />
        </MuiThemeProvider>
        </Drawer>
      </div>
    );
  }
}
