import ReactDOM from 'react-dom'
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import {GlobalStyle} from './style'
import {Provider} from 'react-redux'
import store from "./stroe";

ReactDOM.render(
    <>
        <Provider store={store}>
            <GlobalStyle/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>

    </>, document.getElementById('app'))