

import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import Css from '../config/Css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount = () => {
    this.props.checkServer()
    // Actions.tab({type: 'reset'})
  };
  
  componentDidMount() {
      SplashScreen.hide();
  }
  

  render() {
    return (
      <View style={Css.container}>
        <StatusBar
          backgroundColor= '#23434d'
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height: 50, width: 50}} source={require('../icons/loading.gif')}/>
          <Text style={{color: '#fff'}}>Connecting to server</Text>
        </View>
      </View>
    );
  }
}

import {connect} from 'react-redux';
import {checkServer} from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkServer: () => dispatch(checkServer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
