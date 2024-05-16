import { all, call, put, takeLatest } from "redux-saga/effects";
import { DELETE_ROOM_ERROR, DELETE_ROOM_PENDING, DELETE_ROOM_SUCCESS, GET_ROOM_ERROR, GET_ROOM_PENDING, GET_ROOM_SUCCESS, POST_ROOM_ERROR, POST_ROOM_PENDING, POST_ROOM_SUCCESS, UPDATA_ROOM_ERROR, UPDATA_ROOM_PENDING, UPDATA_ROOM_SUCCESS } from "../room/action";
import { delete_room, get_room, post_room, updata_room } from "../room/api";

function* handle_post_room(action) {
    // console.log(action, "action from handle post room");
    try {
        let { data, status } = yield call(post_room, action);
        // console.log(data, status, "data and status from handle post room");
        if (status == 201 || status == 200) {
            yield put({ type: POST_ROOM_SUCCESS, data });
        } else {
            yield put({ type: POST_ROOM_ERROR, data });
        }
    }
    catch (error) {
        yield put({ type: POST_ROOM_ERROR, data: error })
    }
}

function* handle_get_room(action) {
    // console.log(action, "action from handle get room");
    try {
        let { data, status } = yield call(get_room, action);
        // console.log(data, status, "data and status from handle get room");
        if (status == 200) {
            yield put({ type: GET_ROOM_SUCCESS, data });
        }
        else {
            yield put({ type: GET_ROOM_ERROR, data });
        }
    }
    catch (error) {
        yield put({ type: GET_ROOM_ERROR, data: error });
    }
}

function* handle_delete_room(action) {
    // console.log(action, "action from handle delete room");
    try {
        let { data, status } = yield call(delete_room, action);
        // console.log(data, status, "data and status from handle delete room");
        if (status == 200) {
            yield put({ type: DELETE_ROOM_SUCCESS, data });
        } else {
            yield put({ type: DELETE_ROOM_ERROR, data });
        }
    }
    catch (error) {
        yield put({ type: DELETE_ROOM_ERROR, daat: error })
    }
}

function* handle_updata_room(action) {
    console.log(action, "action from handle updata room");
    try {
        let { data, status } = yield call(updata_room, action);
        console.log(data, status, "data and status from handle updata room");
        if (status == 200) {
            yield put({ type: UPDATA_ROOM_SUCCESS, data });
        }
        else {
            yield put({ type: UPDATA_ROOM_ERROR, data });
        }
    }
    catch (error) {
        yield put({ type: UPDATA_ROOM_ERROR, data: error })
    }
}

function* handle_post_room_saga() {
    yield takeLatest(POST_ROOM_PENDING, handle_post_room)
}

function* handle_get_room_saga() {
    yield takeLatest(GET_ROOM_PENDING, handle_get_room)
}

function* handle_delete_room_saga() {
    yield takeLatest(DELETE_ROOM_PENDING, handle_delete_room)
}

function* handle_updata_room_saga() {
    yield takeLatest(UPDATA_ROOM_PENDING, handle_updata_room)
}

function* rootSaga() {
    yield all([handle_post_room_saga(), handle_get_room_saga(), handle_delete_room_saga() , handle_updata_room_saga()])
}

export default rootSaga


