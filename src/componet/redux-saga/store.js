import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "./rootreducer";
import rootSaga from "./saga";



let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store