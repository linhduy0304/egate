

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import Css from '../../config/Css';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { screen } from '../../config/System';
import Button from '../../components/Button';
import { Actions } from 'react-native-router-flux';
import Triangle from '../../components/Triangle';
import TriangleBot from '../../components/TriangleBot';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }

  render() {
    const {email, pass} = this.state;
    return (
      <View style={[Css.container, {alignItems: 'center',}]}>
        <StatusBar
          backgroundColor='#23434d'
        />
        <Triangle/>
        <TriangleBot/>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}  >
          <View style={styles.body}>
            <Logo/>
            <Input 
              marginTop={40}
              value={email}
              label='Email'
              onChangeText={text => this.setState({email: text})}
            />
            <Input 
              value={pass}
              secureTextEntry={true}
              label='Password'
              paddingRight={80}
              onChangeText={text => this.setState({pass: text})}
            >
              <Text onPress={() => Actions.resetPass()} style={{position:'absolute',zIndex: 100, bottom: 15,color: '#fff', right: 0}}>Forgot?</Text>
            </Input>
            <Button
              onPress={() => Actions.tab()}
              label='LOGIN'
            />
            <Text onPress={() => Actions.register()}  style={styles.register}>New to site? Create Acount</Text>
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
  body: {
    width: screen.width,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? screen.height/6 : 60,
  },
})

export default Login;
