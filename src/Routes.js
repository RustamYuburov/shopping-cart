import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Contacts from './components/Contacts/Contacts';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/contacts' component={Contacts}/>
        <Route exact path='/checkout' component={Checkout}/>
      </Switch>
    </div>
  )
}

export default Routes;