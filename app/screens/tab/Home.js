

import React, { PureComponent } from 'react';
import { 
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import Css from '../../config/Css';
import { screen } from '../../config/System';
import Header from '../../components/home/Header';
import MyWallet from '../../components/home/MyWallet';
import Item from '../../components/home/Item';
import StBar from '../../components/StBar';

import { createAnimatableComponent, View, Text } from 'react-native-animatable';
const AnimatableSectionList = createAnimatableComponent(FlatList);
const NATIVE_INCOMPATIBLE_ANIMATIONS = ['jello', 'lightSpeedIn', 'lightSpeedOut'];

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar: 'https://static.ipick.vn/images/avatars/conheonho_9x_Rxpj7AObCG_300x300.png',
        name: 'Lê Linh Duy',
        total: '150.000.000',
      },
      // myWallet: {
      //   incre: true,
      //   percent: '3.44',
      //   price: '0,97894789333',
      //   dollar: '43,33'
      // },
      active: 0,
      wallet: [
        {
          icon: require('../../icons/ic_egate.png'),
          name: 'Egate',
          sub: '401',
          type: 'bounceIn',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },
        {
          icon: require('../../icons/ic_bitcoin.png'),
          name: 'Bitcoin',
          sub: '401',
          type: 'bounceInLeft',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },
        {
          icon: require('../../icons/ic_ethereum.png'),
          name: 'Ethereum',
          sub: '401',
          type: 'bounceInRight',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: false,
        },
        {
          icon: require('../../icons/ic_litecoin.png'),
          name: 'Lite',
          sub: '401',
          type: 'fadeIn',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },
        {
          icon: require('../../icons/ic_bitcoin_cash.png'),
          name: 'Bitcoin Cash',
          sub: '401',
          type: 'fadeInLeft',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },

        {
          icon: require('../../icons/ic_bitcoin.png'),
          name: 'Bitcoin',
          sub: '401',
          type: 'fadeInLeftBig',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },
        {
          icon: require('../../icons/ic_litecoin.png'),
          name: 'Lite',
          sub: '401',
          type: 'slideInLeft',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },
        {
          icon: require('../../icons/ic_bitcoin_cash.png'),
          name: 'Bitcoin Cash',
          sub: '401',
          type: 'slideInRight',
          price: '0,33333333',
          percent: '3.97',
          dollar: '43,33',
          incre: true,
        },
       
      ],
    };
  }

  setActive(name, componentRef, animationType) {
    componentRef.setNativeProps({
      style: {
        zIndex: 1,
      },
    });
    componentRef.animate(animationType, this.state.duration).then(() => {
      componentRef.setNativeProps({
        style: {
          zIndex: 0,
        },
      });
    });
    if (this.textRef) {
      this.textRef[animationType](this.state.duration);
    }
    if(this.state.active === name) {
      this.setState({active: null})
    }else {
      this.setState({active: name})
    }
  }

  render() {
    const {user, myWallet, wallet} = this.state;
    return (
      <View style={[Css.container, {alignItems: 'center'}]}>
        <StatusBar
          backgroundColor={'#23434d'}
          barStyle='light-content'
        />
        {
          Platform.OS == 'ios' ?
          <StBar/>
          : null
        }
        <ScrollView>
          <View style={styles.body}>
            <Header data={user}/>
            {/* <MyWallet data={myWallet}/> */}
            <AnimatableSectionList
              animation="fadeInLeft"
              contentInsetAdjustmentBehavior="automatic"
              duration={1100}
              // delay={1400}
              data={wallet}
              keyExtractor={(item, index) => index.toString()}
              renderItem={data => <Item 
                                    animationType={'fadeIn'}
                                    setActive={(name, componentRef, animationType) => this.setActive(name, componentRef, animationType)} 
                                    active={this.state.active} 
                                    data={data.item}
                                    index={data.index}
                                    useNativeDriver={NATIVE_INCOMPATIBLE_ANIMATIONS.indexOf(data.item) === -1}
                                  />}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 0,
    padding: 20,
    width: screen.width,
  },
})

export default Home;
