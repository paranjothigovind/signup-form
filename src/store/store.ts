// import default components to persist data
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

// import dev tool extension package to view local storage in browser
import { composeWithDevTools } from "redux-devtools-extension";

// import thunk middleware to process async requests
import thunk from "redux-thunk";

// import reducer
import rootReducer from "./reducers"

// import default persistor loca storage
import storage from "redux-persist/lib/storage";

// initialize thunk middleware
const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store to generalize data between components
export const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(
    applyMiddleware(...middleware)
    // window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  )
);
export const persistor = persistStore(store);
