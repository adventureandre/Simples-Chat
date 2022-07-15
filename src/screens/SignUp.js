import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { checkLogin, changeEmail, changeSenha, changeName, signUpAction } from '../actions/AuthActions';

export class SignUp extends Component {
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
                <Text style={styles.h1}>Digite seu Nome</Text>
                <TextInput value={this.props.name} style={styles.input} onChangeText={this.props.changeName} />

                <Text style={styles.h1}>Digite seu E-mail</Text>
                <TextInput value={this.props.email} style={styles.input} onChangeText={this.props.changeEmail} />

                <Text style={styles.h1}>Digite sua Senha</Text>
                <TextInput secureTextEntry value={this.props.password} style={styles.input} onChangeText={this.props.changeSenha} />

                <Button title="Cadastrar" onPress={()=>{
                    this.props.signUpAction(this.props.name, this.props.email, this.props.password);
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
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
        status: state.auth.status
    };
};

const SignUpConnect = connect(mapStateToProps, { checkLogin, changeEmail, changeSenha, changeName, signUpAction })(SignUp);

export default SignUpConnect;
