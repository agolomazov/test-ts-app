import { Blog, Action, Post } from './types';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const FETCH_CURRENT_POST = 'FETCH_CURRENT_POST';
export const FETCH_CURRENT_POST_SUCCESS = 'FETCH_CURRENT_POST_SUCCESS';
export const FETCH_CURRENT_POST_FAIL = 'FETCH_CURRENT_POST_FAIL';

const initialState: Blog = {
  posts: [],
  currentPost: null,
  loading: false
};

const startFetch = (state: Blog): Blog => ({
  ...state,
  loading: true,
});

const successFetchPosts = (state: Blog, { payload }: Action): Blog => ({
  ...state,
  posts: payload,
  loading: false,
});

const failFetchPosts = (state: Blog): Blog => ({
  ...state,
  posts: [],
  loading: false,
});

const startCurrentFetch = (state: Blog): Blog => ({
  ...state,
  loading: true,
});

const successCurrentFetch = (state: Blog, { payload }: Action): Blog => ({
  ...state,
  currentPost: payload,
  loading: false,
});

const failCurrentFetch = (state: Blog): Blog => ({
  ...state,
  currentPost: null,
  loading: false,
});

export const fetchAll = (): Action => ({
  type: FETCH_POSTS,
});

export const fetchAllSuccess = (payload: Array<Post>): Action => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchAllFail = (): Action => ({
  type: FETCH_POSTS_FAIL,
});

export const fetchCurrent = (payload: number): Action => ({
  type: FETCH_CURRENT_POST,
  payload,
});

export const fetchCurrentSuccess = (payload: Post): Action => ({
  type: FETCH_CURRENT_POST_SUCCESS,
  payload,
});

export const fetchCurrentFail = (): Action => ({
  type: FETCH_CURRENT_POST_FAIL,
});

export const blogReducer = (state: Blog = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return startFetch(state);
    case FETCH_POSTS_SUCCESS:
      return successFetchPosts(state, action);
    case FETCH_POSTS_FAIL:
      return failFetchPosts(state);
    case FETCH_CURRENT_POST:
      return startCurrentFetch(state);
    case FETCH_CURRENT_POST_SUCCESS:
      return successCurrentFetch(state, action);
    case FETCH_CURRENT_POST_FAIL:
      return failCurrentFetch(state);
    default:
      return state;
  }
}