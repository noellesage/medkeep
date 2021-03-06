import React, { Component } from 'react';
import { Alert, Text,Button, TextInput, View, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation"; 
export default class Login extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
    }
    
    onLogin() {
      const { username, password } = this.state;
  
      Alert.alert('Credentials', `${username} + ${password}`);
    }

  
    render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 40, padding : 10}}>Welcome to MedKeep</Text>
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
          
          <Button
            title={'Login'}
            style={styles.input}
            // onPress={this.onLogin.bind(this)}
          />
          <Button
            title={'Create a new account'}
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
  

