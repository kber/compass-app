import React, { Component, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

@connect(
    state => ({})
)
export default class extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    );
  }
}