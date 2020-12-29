import {Route, Redirect} from 'react-router-dom'


const redirectFn = (redirect) => <Redirect to={redirect}/>

const routeFn = (route) => <Route path={route.path}
                                  render={props => <route.component {...props} routes={route.routes}/>}/>

function RouteWithSubRoutes(route) {
    const {redirect} = route
    return (<>
        {redirect ? redirectFn(redirect) : routeFn(route)}
    </>)
}

export default RouteWithSubRoutes