var React = require('react-native');

var {
    TouchableHighlight,
    Text,
    StyleSheet,
    View
} = React;

class IssueType extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            report: ''
        };
    }
    handleSubmit(event){
        console.log(this);
        console.log(event);
        //create a new report with selected issue type
        //reroute to next screen
    }
    render(){
        var layout = (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.issueContainer}
                value={'fight'}
                onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.issueContainer}>
              <Text style={styles.issueType}>
                Fight
              </Text>
            </TouchableHighlight>
        </View>
        );
        return layout;
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 150,
    paddingLeft: 24,
    paddingRight: 24
  },
  issueContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#f62745',
    padding: 16,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 5
  },
  issueType: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});


module.exports = IssueType;