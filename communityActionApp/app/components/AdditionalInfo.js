var React = require('react-native');

var {
    TouchableHighlight,
    Text,
    TextInput,
    StyleSheet,
    View
} = React;

class AdditionalInfo extends React.Component{
    handleSubmit(event){
      var report = this.props.report;

      this.setState({
        report: report
      });
      this.setState({
        report: ''
      });
    }
    render(){
        var layout = (
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableHighlight
              underlayColor={'#B1B8B9'}
              style={styles.issueButton}
              value={'aid'}
              onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.issueType}>
                Aid
              </Text>
            </TouchableHighlight>
            <View style={styles.emailContainer}>
              <Text style={styles.emailLabel}>
              Email
              </Text>
              <TextInput style={styles.emailInput} />
            </View>
          </View>
          <View style={styles.row}>
            <TextInput style={styles.locationNameInput} />
          </View>
          <View style={styles.row}>
            <TextInput style={styles.locationAddressInput} />
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              underlayColor={'#B1B8B9'}
              style={styles.policeButton}
              value={false}
              onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.issueType}>
                No
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#B1B8B9'}
              style={styles.policeButton}
              value={true}
              onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.issueType}>
                Yes
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TextInput style={styles.additionalNotesInput} />
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              underlayColor={'#B1B8B9'}
              style={styles.reportSubmitButton}
              value={true}
              onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.reportSubmitButtonType}>
                Submit
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
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 24,
  },
  issueButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f62745',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  issueType: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  emailContainer: {
    marginLeft: 16
  },
  emailLabel: {
    marginTop: 16,
    marginBottom: 14,
    fontWeight: 'bold',
    fontSize: 14
  },
  emailInput: {

    width: 206,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  locationNameInput: {

  },
  locationAddressInput: {

  },
  policeButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#f62745',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  additionalNotesInput: {

  },
  reportSubmitButton: {
    width: 320,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#f62745',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 48,
  },
  reportSubmitButtonType: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }

});


module.exports = AdditionalInfo;