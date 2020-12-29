import React, {Suspense} from 'react';
import RouteWithSubRoutes from "./components/routewithsubroutes";
import routes from "./router";
import {Switch} from "react-router-dom";
import Header from "./components/header";
import PlayBar from "./views/playbar";


function App() {

    return (<>
        <Header/>
        <Suspense
            fallback={<div
                className="com-loading">正在加载...</div>}>
            <div className={'main-wrapper'}>
                <Switch>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i}  {...route}/>)}
                </Switch>
            </div>
        </Suspense>
        <PlayBar/>
    </>)
}


export default App;