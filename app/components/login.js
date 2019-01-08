import React, {Component} from 'react';
import t from 'tcomb-form-native';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
    email: t.String,              // a required string
    password: t.String,  // an optional string
          // a boolean
});

var options = {};

export default class Login extends Component<Props> {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        title: "Login",
        header:null
    };
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    getInitialState() {
        return {value: null};
    }

    onChange(value) {
        this.setState({ value });
    }

    clearForm() {
        // clear content from all textbox
        this.setState({value: null});
    }

    onPress=()=>{
    var value = this.refs.form.getValue();

    if(value) {
        console.log(value);
        this.clearForm();
    }
    }

    render()
    {
        const {navigate} = this.props.navigation;
        return (
        <View style={styles.container}>
            <Form
                ref="form"
                type={Person}
                value={this.state.value}
                onChange={this.onChange.bind(this)}
            />
            <TouchableOpacity style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigate('Registration')} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Not Account</Text>
            </TouchableOpacity>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#d9b3ff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});