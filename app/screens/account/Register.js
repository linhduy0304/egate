

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import Css from '../../config/Css';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { screen } from '../../config/System';
import ButtonGradient from '../../components/ButtonGradient';
import Triangle from '../../components/Triangle';
import TriangleBot from '../../components/TriangleBot';
import { Actions } from 'react-native-router-flux';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      confirmPass: '',
      intro: 'Create Account Egate'
    };
  }

  render() {
    const {email, pass, confirmPass, intro} = this.state;
    return (
      <View style={[Css.container, {alignItems: 'center'}]}>
        <Triangle/>
        <TriangleBot/>
        <ScrollView  keyboardShouldPersistTaps={'always'}>
          <View style={styles.body}>
            <Logo/>
            <Text style={styles.intro}>{intro}</Text>
            <Input 
              marginTop={15}
              value={email}
              label='Email'
              onChangeText={text => this.setState({email: text})}
            />
            <Input 
              value={pass}
              label='Password'
              secureTextEntry={true}
              onChangeText={text => this.setState({pass: text})}
            />
            <Input 
              value={confirmPass}
              label='Confirm Password'
              secureTextEntry={true}
              onChangeText={text => this.setState({confirmPass: text})}
            />
            <ButtonGradient
              onPress={() => Actions.registerSuccess({load: 'register'})}
              label='REGISTER'
            />
            <Text onPress={() => Actions.login({type: 'reset'})}  style={styles.register}>Already a member? Sign In</Text>
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
    paddingTop: Platform.OS === 'ios' ? screen.height/6 : 60,
    padding: 20
  },
})

export default Register;
