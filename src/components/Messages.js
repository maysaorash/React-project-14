import React from 'react'
import Message from './Message';

import {
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

 function Messages() {
    return (
        <div>
         <p>This is my Messages page!</p> 
         <ul>
         <li key="1"> <Link to="/messages/1">Message Number - 1 </Link></li>
         <li key="2"> <Link to="/messages/2">Message Number - 2 </Link></li>
         <li key="3"> <Link to="/messages/3">Message Number - 3 </Link></li>     
        </ul> 
        <div>
        <Switch>    
        <Route path="/messages/:url" component={Message} />
        </Switch>
        </div> 
        </div>
    )
}

export default Messages;