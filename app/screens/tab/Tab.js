

import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Notify from './Notify';
import Setting from './Setting';
import History from './History';
import SplashScreen from 'react-native-splash-screen'

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'home'
    };
  }

  componentDidMount() {
    SplashScreen.hide();
}


  render() {
    console.log('tab')
    return (
      <TabNavigator 
        hidesTabTouch={true}
        tabBarStyle={{backgroundColor: '#3a5b68'}}
      >
        <TabNavigator.Item
          tabStyle={styles.ctItem}
          selected={this.state.tab === 'home'}
          renderIcon={() => <Image style={styles.icon} source={require('../../icons/ic_home.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../icons/ic_home_active.png')} />}
          onPress={() => this.setState({ tab: 'home' })}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.ctItem}
          selected={this.state.tab === 'history'}
          renderIcon={() => <Image style={styles.icon} source={require('../../icons/ic_history.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../icons/ic_history_active.png')} />}
          onPress={() => this.setState({ tab: 'history' })}>
          <History/>
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.ctItem}
          itle="Home"
          selected={this.state.tab === 'noti'}
          renderIcon={() => <Image style={styles.icon} source={require('../../icons/ic_noti.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../icons/ic_noti_active.png')} />}
          onPress={() => this.setState({ tab: 'noti' })}>
          <Notify/>
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.ctItem}
          selected={this.state.tab === 'setting'}
          renderIcon={() => <Image style={styles.icon} source={require('../../icons/ic_setting.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../icons/ic_setting_active.png')} />}
          onPress={() => this.setState({ tab: 'setting' })}>
          <Setting/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  ctItem: {
    alignItems: 'center',
     justifyContent: 'center',
  },
  icon: {
    height: 20,
    resizeMode: 'contain'
  },
})
export default Tab;
