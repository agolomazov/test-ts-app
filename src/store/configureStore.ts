import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

export default function configureStore(preloadedState?: any) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}