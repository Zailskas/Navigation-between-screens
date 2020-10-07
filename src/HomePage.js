import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class HomePage extends Component {
  render() {
    return (
      <View>
        <Text>Home page</Text>
        <Button
          title="Go to second page"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}
export default HomePage;
