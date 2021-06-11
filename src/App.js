import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import CartPage from "./pages/CartPage"
import { Provider } from "react-redux"
import { store } from "./redux/reducers/index"
import "./appStyles.scss"

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/cart' component={CartPage} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
