var React = require('react-native');


var {
    TouchableHighlight,
    Text,
    StyleSheet,
    View
} = React;

class SnapPicture extends React.Component{
    handleSubmit(event){
     console.log('game over');
    }
    render(){
        var layout = (
        <View style={styles.container}>
          <View style={styles.successContainer}>
            <View style={styles.successHeader}>
              <Text style={styles.successType}>
                Report Submitted Successfully
              </Text>
            </View>
            <TouchableHighlight
              underlayColor={'#B1B8B9'}
              style={styles.successButton}
              value={true}
              onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.issueType}>
                File Another Report
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
  successContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24
  },
  successHeader: {
    paddingBottom: 50,
    alignItems: 'center'
  },
  successType: {
    fontSize: 48,
  },
  successButton: {
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
    fontSize: 24,
    fontWeight: 'bold'
  },
});


module.exports = SnapPicture;