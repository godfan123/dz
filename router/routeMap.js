import React from 'react';

import {BrowserRouter as Router,Link,Route,Redirect,Switch} from 'react-router-dom';
import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

class RouterMap extends React.Componenct{


     render(){

         return (

             <Router>

                 <Switch>
                     <Route path='/' component={App}>
                         <IndexRoute component={Home}/>
                         <Route path='/city' component={City}/>
                         <Route path='/User' component={User}/>
                         <Route path='/search/:category(/:keyword)' component={Search}/>
                         <Route path='/detail/:id' component={Detail}/>
                         <Route path='*' component={NotFound}/>
                     </Route>
                 </Switch>

             </Router>


         )


     }


}





export default RouterMap