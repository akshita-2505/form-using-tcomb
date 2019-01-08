import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Animated} from 'react-native';

export default class Welcome extends Component<Props> {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render()
    {
        const {navigation} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>navigate('Login')}>
                <Animated.Text style={{fontSize:45}}>Welcome</Animated.Text>
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
        alignItems: 'center'
    }
});