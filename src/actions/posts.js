import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); // via api to get posts
        const action = { type: FETCH_ALL, payload: data }

        dispatch(action);  // to dispacth an action to the store
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data }); // const action = { type: 'CREATE', payload: data }
    } catch (error) {
        console.log(error);
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const updateLikeCount = (id) => async (dispatch) => {
    try {
        const { data } = await api.updateLikeCount(id);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}