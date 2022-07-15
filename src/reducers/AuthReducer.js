const initalState = {
    name:'',
    email: '',
    password: '',
    uid: '',
    status: 0
};

const AuthReducer = (state = initalState, action) => {
    if (action.type == 'changeStatus') {
        return { ...state, status: action.payload.status };
    }
    if (action.type == 'changeEmail') {
        return { ...state, email: action.payload.email };
    }

    if (action.type == 'changeSenha') {
        return { ...state, password: action.payload.password };
    }

    if (action.type == 'changeName') {
        return { ...state, name: action.payload.name };
    }

    if (action.type == 'changeUid') {
        return { ...state, status:1, uid: action.payload.uid };
    }

    return state;
};

export default AuthReducer;