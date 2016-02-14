var React = require('react-native');
var SnapPicture = require('./SnapPicture');

var {
    TouchableHighlight,
    Text,
    StyleSheet,
    View
} = React;

class Impact extends React.Component{
    handleSubmit(event){
      var report = this.props.report;
      report.impact = 1;

      this.setState({
        report: report
      });
      this.props.navigator.push({
        title: 'Snap a Picture',
        component: SnapPicture,
        passProps: {report: this.state.report}
      });
      this.setState({
        report: ''
      });
    }
    render(){

        var layout = (
        <View style={styles.container}>

            <View style={styles.impactContainer}>
              <TouchableHighlight
                underlayColor={'#B1B8B9'}
                style={styles.impactButton}
                value={'fight'}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.issueType}>
                  Fight
                </Text>
              </TouchableHighlight>
               <TouchableHighlight
                underlayColor={'#B1B8B9'}
                style={styles.impactButton}
                value={'fight'}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.issueType}>
                  Fight
                </Text>
              </TouchableHighlight>
               <TouchableHighlight
                underlayColor={'#B1B8B9'}
                style={styles.impactButton}
                value={'fight'}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.issueType}>
                  Fight
                </Text>
              </TouchableHighlight>
               <TouchableHighlight
                underlayColor={'#B1B8B9'}
                style={styles.impactButton}
                value={'fight'}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.issueType}>
                  Fight
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
    paddingTop: 240,
  },
  impactContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24
  },
  impactButton: {
    width: 124,
    height: 124,
    justifyContent: 'center',
    backgroundColor: '#f62745',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  issueType: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});


module.exports = Impact;