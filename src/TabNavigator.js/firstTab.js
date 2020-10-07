import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';

class firstTab extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>First Tab</Text>
        <Button
          title="Go to the drawer page"
          onPress={() => this.props.navigation.navigate('ThirdPage')}
        />
      </View>
    );
  }
}
export default firstTab;
