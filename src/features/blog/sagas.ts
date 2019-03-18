import { call, all, takeEvery, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { push } from 'connected-react-router';
import {
  FETCH_POSTS,
  FETCH_CURRENT_POST,
  fetchAllFail,
  fetchAllSuccess,
  fetchCurrentSuccess,
  fetchCurrentFail,
} from './ducks';
import { Action } from './types';
import { fetchPosts, fetchCurrentPost } from './api';

export function* blogSaga() {
  yield all([
    takeEvery(FETCH_POSTS, fetchAllPost),
    takeEvery(FETCH_CURRENT_POST, fetchCurrentSaga),
  ]);
}

function* fetchAllPost() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchAllSuccess(posts.data));
  } catch (error) {
    yield put(fetchAllFail());
  }
}

function* fetchCurrentSaga(action: Action) {
  const { payload } = action;
  try {
    if (payload === '1') {
      yield put(push('/'));
    } else {
      const { data }: AxiosResponse = yield call(fetchCurrentPost, payload);
      yield put(fetchCurrentSuccess(data));
    }
  } catch (error) {
    console.log('[error]', error.message);
    yield put(push('/404'));
  }
}