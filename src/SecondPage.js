import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class SecondPage extends Component {
  render() {
    return (
      <View>
        <Text>SecondPage page</Text>
        <Button
          title="Go to third page"
          onPress={() => this.props.navigation.navigate('Third')}
        />
      </View>
    );
  }
}
export default SecondPage;
