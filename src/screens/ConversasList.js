import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import{getChatList} from '../actions/ChatActions'


export class ConversasList extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.props.getChatList(this.props.uid);

    }

    componentDidUpdate(){
        if(this.props.activeChat != ''){
            this.props.navigation.navigate('ConversaInterna');
        }
    }

    render() {
        return (
            <View style={styles.conteiner}>
              <FlatList
              data={this.props.chats}
              renderItem={({item})=>{
                  return(<Text>...</Text>);
              }}
              />
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
        uid: state.auth.uid,
        activeChat: state.chat.activeChat,
        chats: state.chat.chats
    };
};

const ConversasListConnect = connect(mapStateToProps, { getChatList })(ConversasList);

export default ConversasListConnect;
