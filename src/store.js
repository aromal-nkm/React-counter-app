import {legacy_createStore} from "redux"; //legacycreate is the real or actual function
import counterReducer from "./reducer"

const store=legacy_createStore(counterReducer);

export default store;