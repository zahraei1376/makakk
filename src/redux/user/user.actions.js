import { UserActionTypes } from './user.types';
// import axios from 'axios';

// export const setCurrentUser = (user) =>({
//     type:UserActionTypes.SET_CURRENT_USER,
//     payload:user
// });

export const fetchUserStart = () =>({
   type:UserActionTypes.FETCH_COLLECTION_START
});

export const fectchUserCuccess = (user,teacher,admin) =>({
    type:UserActionTypes.FETCH_USER_SECCUSS,
    payload:user,
    isTeacher:teacher,
    isAdmin:admin
});

export const fectchUserFailure = errorMessage =>({
    type:UserActionTypes.FETCH_USER_FAILURE,
    payload:errorMessage
});

export const fetchUserStartAsync = (data) =>{
    return dispatch => {
        console.log(data);
        // dispatch(fetchCollectionsStart());
        fetch("http://localhost:7000/Login", {
            headers: {
                'Content-Type': 'application/json'
                },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            console.log(dataRes);
            console.log(dataRes.userId);
            dispatch(fectchUserCuccess(dataRes.userId,dataRes.isTeacher,dataRes.isAdmin))
            // this.setState({
            //     errorsLog:dataRes.data,
            //     message:dataRes.message,
            //     Id:dataRes.userId,
            //     teacher:dataRes.teacher,
            //     admin:dataRes.admin,
            // })
            // sessionStorage.setItem('UserLogin',JSON.stringify({
            //     token:dataRes.token,
            //     Id:this.state.Id,
            //     teacher:this.state.teacher,
            //     admin:this.state.admin,
            // }))
        })
        .catch(err => {
            dispatch(fectchUserFailure(err.message));
        });
    }
 }