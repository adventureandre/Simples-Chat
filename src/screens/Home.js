import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { checkLogin } from '../actions/AuthActions';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.signinButton = this.signinButton.bind(this);
        this.signupButton = this.signupButton.bind(this);
    }
    signinButton() {
        this.props.navigation.navigate('SignIn')
    }
    signupButton() {
        this.props.navigation.navigate('SignUp')
    }


    render() {
        return (
            <View style={styles.conteiner}>
                <Text style={styles.h1}>AdvApp</Text>
                <View style={styles.buttonArea}>
                    <Button onPress={this.signinButton} title="Login" />

                    <Button onPress={this.signupButton} title="Cadastrar" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    h1:{
fontSize:30,
marginBottom:50
    },
    buttonArea:{
        flexDirection:"row",
        width:'100%',
        justifyContent: "space-around"
    }
});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status
    };
};

const HomeConnect = connect(mapStateToProps, { checkLogin })(Home);

export default HomeConnect;
