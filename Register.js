import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation"; 

export default class Register extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
    }
    Register()
    {
      // backend code
    }
    render() {
      return (
        <View style={styles.container}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Type Password Again'}
            secureTextEntry={true}
            style={styles.input}
          />
          <Button
            title={'Register!'}
            style={styles.input}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });
  

