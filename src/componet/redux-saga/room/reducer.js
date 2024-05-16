import { DELETE_ROOM_ERROR, DELETE_ROOM_PENDING, DELETE_ROOM_SUCCESS, GET_ROOM_ERROR, GET_ROOM_PENDING, GET_ROOM_SUCCESS, POST_ROOM_PENDING, POST_ROOM_SUCCESS, UPDATA_ROOM_ERROR, UPDATA_ROOM_PENDING, UPDATA_ROOM_SUCCESS } from "./action";


let initialState = {
    room: [],
    isLoading: false,
    isError: null,
};

let roomReducer = (state = initialState, action) => {
    console.log(action, "action from reducer");
    switch (action.type) {
        //post user
        case POST_ROOM_PENDING: {
            return {
                isLoading: true,
                ...state,
            }
        }
        case POST_ROOM_SUCCESS: {
            return {
                isLoading: false,
                room: state.room.concat(action.data),
            }
        }
        case POST_ROOM_SUCCESS: {
            return {
                isError: action.data,
                ...state,
            }
        }
        //get user
        case GET_ROOM_PENDING: {
            return {
                isLoading: true,
                ...state,
            }
        }
        case GET_ROOM_SUCCESS: {
            return {
                isLoading: false,
                room: action.data,
            }
        }
        case GET_ROOM_ERROR: {
            return {
                ...state,
                isError: action.data,
            }
        }
        //delete user
        case DELETE_ROOM_PENDING: {
            return {
                isLoading: true,
                ...state,
            }
        }
        case DELETE_ROOM_SUCCESS: {
            return {
                isLoading: false,
                room: state.room.filter((item) => item.id != action.data.id)
            }
        }
        case DELETE_ROOM_ERROR: {
            return {
                isLoading: false,
                isError: action.data,
            }
        }
        //update user
        case UPDATA_ROOM_PENDING: {
            return {
                isLoading: true,
                ...state,
            }
        }
        case UPDATA_ROOM_SUCCESS: {
            return {
                isLoading: false,
                room: state.room.map((value, index) => {
                    if (value.id == action.data.id) {
                        return {
                            ...value,
                            ...action.data,
                        }
                    } else {
                        return value;
                    }
                })
            }
        }
        case UPDATA_ROOM_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default roomReducer