import React, {Component} from 'react';

import './App.css';
import PCApp from './container/pc/pc_app';
import MobileApp from './container/mobile/mobile_app';
import MediaQuery from 'react-responsive';
import {Router, Route,hashHistory,IndexRoute} from 'react-router';
import PCNewsDetail from './container/pc/pc_news_detail';
import MobileNewsDetail from './container/mobile/mobile_news_detail';
import PCNewsContainer from './container/pc/pc_news_container';

class App extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path='/' component={PCApp}>
                            <IndexRoute component={PCNewsContainer}/>
                            <Route path='/top' component={PCNewsContainer}/>
                            <Route path='/shehui' component={Shehui}/>
                            <Route path='/guonei' component={Guonei}/>
                            <Route path='/guoji' component={Guoji}/>
                            <Route path='/yule' component={Yule}/>
                            <Route path='/tiyu' component={Tiyu}/>
                            <Route path='/keji' component={Keji}/>
                            <Route path='/shishang' component={Shishang}/>
                            <Route path='/details/:uniquekey' component={PCNewsDetail}/>
                        </Route>
                    </Router>
                </MediaQuery>

                <MediaQuery query='(max-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path='/' component={MobileApp}/>
                        <Route path='/details/:uniquekey' component={MobileNewsDetail}/>
                    </Router>

                </MediaQuery>
            </div>
        );
    }
}

//定义了一些组件做示例

const Shehui=function () {
  return(
      <div>社会</div>
  );
};


const Guonei=function () {
    return(
        <div>国内</div>
    );
};

const Guoji=function () {
    return(
        <div>国际</div>
    );
};


const Yule=function () {
    return(
        <div>娱乐</div>
    );
};


const Tiyu=function () {
    return(
        <div>体育</div>
    );
};


const Keji=function () {
    return(
        <div>科技</div>
    );
};

const Shishang=function () {
    return(
        <div>时尚</div>
    );
};

export default App;
