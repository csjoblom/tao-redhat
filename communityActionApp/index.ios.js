/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Button,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var communityActionApp = React.createClass({
  getInitialState() {
    return {
      reportCreated: Date.now()
    };
  },
  render() {
    var layout = (
      <View style={styles.container}>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>
          <Text style={styles.issueType}>
            Issue Type #1
          </Text>

      </View>
    );
    return layout;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 150,
    paddingLeft: 45,
    paddingRight: 45
  },
  issueType: {
    width: 80,
    height: 80,
    backgroundColor: '#f62745',
    color: '#ffffff',
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  issueTypeClicked: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    textAlign: 'center',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('communityActionApp', () => communityActionApp);
