import { CommonActions } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import {signOut} from '../actions/AuthActions';

export class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {};


        this.sair = this.sair.bind(this);

    }

    sair() {
       this.props.signOut();

      this.props.navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
            { name: 'Home' },
        ],
      }));
    }

    render() {
        return (
            <View style={styles.conteiner}>
                <Text>Pagina Config...</Text>
                <Button title='Sair' onPress={this.sair} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 10
    }
});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        uid: state.auth.uid
    };
};

const ConfigConnect = connect(mapStateToProps, { signOut })(Config);

export default ConfigConnect;
