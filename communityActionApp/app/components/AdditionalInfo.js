var React = require('react-native');
var Success = require('./Success');
var api = require('../utils/api');

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
      var apiReq = api.postReport(this.state.report);
      apiReq
        .then((response)=>response.text())
        .then((responseText)=>{
            console.log(responseText);
            this.props.navigator.push({
            title: 'Successful Submission',
            component: Success,
            passProps: {report: this.state.report}
      });
        })
        .catch((error) => {
            console.warn(error);
        });
      this.setState({
        report: ''
      });
    }
    render(){
        var layout = (
        <View style={styles.container}>
          <View style={styles.row}>
          <View style={styles.issueContainer}>
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
          </View>
          <View style={styles.row}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationNameLabel}>
                Location Name
              </Text>
              <TextInput style={styles.locationNameInput} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationAddressLabel}>
                Location Address
              </Text>
              <TextInput style={styles.locationAddressInput} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.policeContainer}>
              <Text style={styles.policeLabel}>
                Police Contacted
              </Text>
            </View>
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
            <View style={styles.additionalNotesContainer}>
              <Text style={styles.additionalNotesLabel}>
                Additional Notes
              </Text>
              <TextInput style={styles.additionalNotesInput} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.reportSubmitButtonContainer}>
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

        </View>
        );
        return layout;
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
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
  issueContainer: {
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
    width: 252,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  locationContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 24,
  },
  locationNameLabel: {
    marginTop: 16,
    marginBottom: 14,
    fontWeight: 'bold',
    fontSize: 14
  },
  locationNameInput: {
    width: 320,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  locationAddressLabel: {
    marginTop: 16,
    marginBottom: 14,
    fontWeight: 'bold',
    fontSize: 14
  },
  locationAddressInput: {
    width: 320,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  policeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 24,
    height: 100
  },
  policeLabel: {
    marginTop: 16,
    marginBottom: 14,
    fontWeight: 'bold',
    fontSize: 14
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
  additionalNotesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 24,
  },
  additionalNotesLabel: {
    marginTop: 16,
    marginBottom: 14,
    fontWeight: 'bold',
    fontSize: 14
  },
  additionalNotesInput: {
    width: 320,
    height: 250,
    borderColor: 'gray',
    borderWidth: 1
  },
  reportSubmitButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 24,
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