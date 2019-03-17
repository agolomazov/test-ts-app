import { all, call, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux';

function* loggerWorker(action: Action) {
  yield call(console.log, action.type);
}

export function* loggerWatcher() {
  yield all([
    takeEvery('*', loggerWorker)
  ]);
}