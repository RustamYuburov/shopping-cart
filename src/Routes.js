import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Contacts from './components/Contacts/Contacts';
import Shop from './components/Shop/Shop';
import ShopItem from './components/Shop/ShopItem';
import Checkout from './components/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';

const Routes = ({ shoppingCart, addItemToCart, removeItemFromCart }) => {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Homepage} /> */}
        <Route exact path="/homepage" component={Homepage}>
          <Homepage />
        </Route>
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/shop/:id"
          render={(routeProps) => (
            <ShopItem
              itemId={routeProps.match.params.id}
              numberOfItems={shoppingCart.length}
              addBookToCart={addItemToCart}
            />
          )}
        />
        <Route exact path="/contacts" component={Contacts} />
        <Route
          exact
          path="/checkout"
          render={() => (
            <Checkout
              shoppingCart={shoppingCart}
              addBookToCart={addItemToCart}
              removeBookFromCart={removeItemFromCart}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Routes;
