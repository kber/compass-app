import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default createStoreWithMiddleware(reducers);