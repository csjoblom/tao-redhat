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
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 24,
  },
  issueButton: {
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
  emailInput: {

  },
  locationNameInput: {

  },
  locationAddressInput: {

  },
  policeButton: {

  },
  additionalNotesInput: {

  },
  reportSubmitButton: {
    
  }

});


module.exports = AdditionalInfo;