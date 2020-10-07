import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class ThirdPage extends Component {
  render() {
    return (
      <View>
        <Text>Third page</Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
export default ThirdPage;
