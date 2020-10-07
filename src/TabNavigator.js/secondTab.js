import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';

class secondTab extends Component {
  render() {
    return (
      <View>
        <Text>Second Tab</Text>
        <Button
          title="Go to the drawer page"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default secondTab;
