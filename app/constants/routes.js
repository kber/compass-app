import _ from 'lodash';

import HomePage from '../containers/home';

function setRoute(oldProps, newProps) {
  return _.merge({}, oldProps, newProps);
}

function Home(props) {
  return setRoute({
    component: HomePage,
    title: '首页'
  }, props);
}

export { Home }
