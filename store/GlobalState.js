import reducers from "./Reducers";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, reduxThunk)));

export const DataProvider = ( {children} ) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
