

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import Nav from '../components/Nav';
import Css from '../config/Css';
import { Actions } from 'react-native-router-flux';
import StBar from '../components/StBar';
import { color } from '../config/System';

class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Nav title='Scan Qrcode'>
          <TouchableOpacity onPress={() => Actions.pop()} style={Css.ctBack}>
            <Image style={Css.icBack} source={require('../icons/ic_left.png')}/>
          </TouchableOpacity>
        </Nav>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
export default QRCode;
