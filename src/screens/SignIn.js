import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { checkLogin, changeEmail, changeSenha, signInAction } from '../actions/AuthActions';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(){
        if (this.props.status == 1) {
            Keyboard.dismiss();
            this.props.navigation.navigate('Conversas');
        }
    }

    render() {
        return (
            <View style={styles.conteiner}>
                <Text style={styles.h1}>Digite seu E-mail</Text>
                <TextInput value={this.props.email} style={styles.input} onChangeText={this.props.changeEmail} />

                <Text style={styles.h1}>Digite sua Senha</Text>
                <TextInput secureTextEntry value={this.props.password} style={styles.input} onChangeText={this.props.changeSenha} />

                <Button title="Entrar" onPress={()=>{
                    this.props.signInAction( this.props.email, this.props.password);
                }}/>
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
    input: {
        height: 50,
        fontSize: 23,
        width: '80%',
        backgroundColor: "#DDDDDD",

    }
});

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid,
        email: state.auth.email,
        password: state.auth.password,
        status : state.auth.status
    };
};

const SignInConnect = connect(mapStateToProps, { checkLogin, changeEmail, changeSenha, signInAction })(SignIn);

export default SignInConnect;
