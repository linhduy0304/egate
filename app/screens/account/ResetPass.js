

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import Css from '../../config/Css';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { screen } from '../../config/System';
import Button from '../../components/Button';
import Triangle from '../../components/Triangle';
import TriangleBot from '../../components/TriangleBot';
import { Actions } from 'react-native-router-flux';

class ResetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      intro: 'Reset password'
    };
  }

  render() {
    const {email, intro} = this.state;
    return (
      <View style={[Css.container, {alignItems: 'center'}]}>
        <StatusBar
          backgroundColor='#23434d'
        />
        <Triangle/>
        <TriangleBot/>
        <ScrollView keyboardShouldPersistTaps={'always'}>
          <View style={styles.body}>
            <Logo/>
            <Text style={styles.intro}>{intro}</Text>
            <Input 
              marginTop={15}
              value={email}
              label='Email'
              onChangeText={text => this.setState({email: text})}
            />
            <Button
              onPress={() => Actions.registerSuccess({load: 'reset'})}
              label='NEXT'
            />
            <Text onPress={() => Actions.register()} style={styles.register}>Create new account? Sign up</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  register: {
    color: '#dfe1e2',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
  intro: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16
  },
  body: {
    width: screen.width,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? screen.height/6 : 60,
  },
})

export default ResetPass;
