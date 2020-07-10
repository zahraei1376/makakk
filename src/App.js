import React,{Component, useReducer} from 'react';
import Layout from './Component/Layout/Layout';
import './App.scss';


class App extends Component{
    render() {
        return(
            <div className="App">
                <Layout/>
            </div>
        )
    }
}
///////////////////////////////////////////////////////////////
export default App;

