import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux';

import { checkLogin } from '../actions/AuthActions';

export class Preload extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.directPages = this.directPages.bind(this);

        this.props.checkLogin();

    }

    directPages() {
        switch (this.props.status) {
            case 1:
                this.props.navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Conversas' },
                    ],
                }));
                break

            case 2:
                this.props.navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' },
                    ],
                }));
                break
        }
    }

    //Quando reabre o component
    componentDidMount() {
        this.directPages();
    }
    //Quando atualiza o component
    componentDidUpdate() {
        this.directPages();
    }



    render() {
        return (
            <View style={styles.conteiner}>
                <Text>Carregando...</Text>
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
        status: state.auth.status
    };
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);

export default PreloadConnect;
