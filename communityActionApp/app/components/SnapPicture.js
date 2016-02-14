var React = require('react-native');
var Impact = require('./Impact');

var {
    TouchableHighlight,
    Text,
    StyleSheet,
    View
} = React;

class SnapPicture extends React.Component{
    handleSubmit(event){
      console.log(event);
    }
    render(){
        var layout = (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <View style={styles.logo}>
              </View>
            </View>
            <View style={styles.snapContainer}>
              <TouchableHighlight
                underlayColor={'#B1B8B9'}
                style={styles.snapButton}
                value={false}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.issueType}>
                  No
                </Text>
              </TouchableHighlight>
             <TouchableHighlight
                underlayColor={'#B1B8B9'}
                style={styles.snapButton}
                value={true}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.issueType}>
                  Yes
                </Text>
              </TouchableHighlight>
            </View>
        </View>
        );
        return layout;
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  },
  snapContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24
  },
  snapButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#f62745',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  issueType: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold'
  },
  logo: {
    width: 150,
    height: 150,
    backgroundColor: '#f62745',
  },
  logoContainer: {
    alignItems: 'center',
    paddingBottom: 40
  }
});


module.exports = SnapPicture;