
import { FETCH_BOOKS_LOADING,
     FETCH_BOOKS_SUCCESS, 
     FETCH_BOOKS_ERROR 
    } from '../reducers/constant'

    import axios from "axios";

    const fetchBooksLoading = () => {
        return {
           type: FETCH_BOOKS_LOADING
        }
    }

    const fetchBooksSuccess = data => {
        return {
           type: FETCH_BOOKS_SUCCESS,
           payload: data
        }
    }

    const fetchBooksError = error => {
        return {
           type:  FETCH_BOOKS_ERROR,
           payload: error
        }
    }


    const GOOGLE_API_KEY = 'AIzaSyCwF_3GD0h1daxi-Y1sOA30ChLWMIJ3C8w'

    export const fetchBooks = title => {
        return dispatch => {

            dispatch(fetchBooksLoading())
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`)
            .then( res => {

                const bookItemsArray = res.data.items;
                dispatch(fetchBooksSuccess(bookItemsArray))

            })
            .catch( error => {
                dispatch(fetchBooksError(error.message))
            })

        }
    }