import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { counterReducer } from '../features/counter';
import { statusbarReducer } from '../features/statusbar';
import { Statusbar } from '../features/statusbar/types';
import { blogReducer } from '../features/blog';
import { Blog } from '../features/blog/types';

const rootReducer = (history: History) => combineReducers({
  count: counterReducer,
  statusbar: statusbarReducer,
  blog: blogReducer,
  router: connectRouter(history)
})

export interface State {
  count: number
  router: RouterState,
  statusbar: Statusbar,
  blog: Blog,
}

export default rootReducer;