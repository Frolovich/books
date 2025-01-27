import { configureStore, combineReducers} from '@reduxjs/toolkit'; 

import reducerAddBooks from '../reducers/reducerAddBooks'; 
import reducerFetchBooks from './reducerFetchBooks';
import { thunk } from 'redux-thunk';
const rootReducer = combineReducers({
    library: reducerAddBooks,
    search: reducerFetchBooks
})


const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
export default store;

 