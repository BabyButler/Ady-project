import {SIGNUP,SIGNIN,CURRENT_USER} from "../ActionType/ActionType"


const initialState={
    user:null,
    post:null,
    posts:[],
    comment:null,
    comments:[],
    users:[]
}

const UserReducer=(state=initialState,action)=>{
   switch (action.type) {
       case SIGNUP : return{
           ...state,
           user: action.payload
       }
       case SIGNIN : return{
        ...state,
        user: action.payload
        }
        case CURRENT_USER : return{
            ...state,
            user: action.payload
        }
        case 'ADD_POST' : return{
            ...state,
            post: action.payload
        }
        case 'GET_ALL_POSTS' : return{
            ...state,
            posts: action.payload.posts
        }
        case 'GET_ONE_USER' : return{
            ...state,
            user: action.payload
        }
        case 'POST_COMMENT' : return{
            ...state,
            comment: action.payload
        }
        case 'GET_ALL_COMMENTS' : return{
            ...state,
            comments: action.payload.comments
        }
        case 'ALL_USERS' : return{
            ...state,
            users: action.payload
        }
        
       default : return state
   }
}
export default UserReducer