import firebase from '../FirebaseConnection';

export const getChatList = (userUid) => {
    return (dispatch) => {

        firebase.database().ref('users').child(userUid).child('chats').on('value', (snapshot) => {
            let chats = [];
            snapshot.forEach((childItem) => {
                chats.push({
                    key: childItem.key

                });
            });
            dispatch({
                type:'setChatList',
                payload:{
                    chats:chats
                }
            })
        });

    }
};

export const getContactList = (userUid) => {
    return (dispatch) => {



        firebase.database().ref('users').orderByChild('name').once('value').then((snapshot) => {
            let users = [];
            snapshot.forEach((childItem) => {
                if (childItem.key != userUid) {
                    users.push({
                        key: childItem.key,
                        name: childItem.val().name
                    });
                }
            });
            dispatch({
                type: 'setContactList',
                payload: {
                    users: users
                }
            })
        });
    };
};


export const createChat = (userUid1, userUid2) => {
    return (dispatch) => {


        //Criando o proprio Chat
        //o push vira o proprio no gerando key automatico
        let newChat = firebase.database().ref('chats').push();
        newChat.child('members').child(userUid1).set({
            id: userUid1
        });
        newChat.child('members').child(userUid2).set({
            id: userUid2
        });
        //Associando aos envolvidos
        let chatId = newChat.key

        //user1
        firebase.database().ref('users').child(userUid1).child('chats')
            .child(chatId).set({
                id: chatId
            });

        //user2
        firebase.database().ref('users').child(userUid2).child('chats')
            .child(chatId).set({
                id: chatId
            });
        dispatch({
            type: 'setActiveChat',
            payload: {
                chatid: chatId
            }
        });
    }
}