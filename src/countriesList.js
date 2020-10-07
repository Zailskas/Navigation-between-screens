import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

class countriesList extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }
  /*componentDidMount = () => {
    fetch('https://restcountries.eu/rest/v2/all', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
  componentDidMount = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      const Data = res.data;
      console.log(Data);
      this.setState({
        data: Data,
      });
    });
  };
  renderItem({item}) {
    return (
      <View style={styles.container}>
        <Text>
          {item.name} is {item.capital}
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={({name}, index) => name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default countriesList;
