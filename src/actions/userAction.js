import axios from 'axios';

export const getUserData = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=5')
        .then(response => {
            console.log('response', response);
            dispatch({
                type: 'FETCH_DATA',
                payload: response.data
            })
        })
}