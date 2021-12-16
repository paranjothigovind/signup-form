import {store} from '../store';

export const signUp = (data: any) => (dispatch: any) => {
    const users = store.getState().auth.users;
    dispatch({
        type: 'SIGNUP',
        payload: [...users, data]
    })
}


export const signIn = (data: any) => (dispatch: any) => {
    const users = store.getState().auth.users;
    let findUser = users.find((filter: any) => filter.email === data.email);
    if(findUser){
        if(findUser.email === data.email && findUser.password === data.password){
            dispatch({
                type: 'LOGIN',
                payload: findUser
            })
        }
    }
}

export const logout = () => (dispatch: any) => {
    dispatch({
        type: 'LOGOUT'
    })
}

