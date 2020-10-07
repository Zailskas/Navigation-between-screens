import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';

class firstDrawer extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>First Drawer</Text>
        <Button
          title="Go to "
          onPress={() => this.props.navigation.navigate('countries')}
        />
      </View>
    );
  }
}
export default firstDrawer;
