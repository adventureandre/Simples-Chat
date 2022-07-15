import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


export class ConversaInterna extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <View style={styles.conteiner}>
                <Text>Pagina Conversa interna </Text>
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

const ConversaInternaListConnect = connect(mapStateToProps, {  })(ConversaInterna);

export default ConversaInternaListConnect;
