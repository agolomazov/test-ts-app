import { all, fork } from 'redux-saga/effects';
import { loggerWatcher } from '../features/logger';
import { blogSaga } from '../features/blog';

export function* rootSaga() {
  yield all([
    loggerWatcher,
    blogSaga
  ].map(fork));
}