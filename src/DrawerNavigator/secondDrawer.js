import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';

class secondDrawer extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Second Drawer</Text>
        <Button
          title="Go to the drawer page"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}
export default secondDrawer;
