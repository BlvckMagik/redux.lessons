import './index.scss';
import store from './store.js';
import { setUser, removeUser } from './user.actions.js';
import { addProduct, deleteProduct } from './cart.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(setUser({ name: 'John' }));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: 1, name: 'kok' }));
store.dispatch(addProduct({ id: 2, name: 'sos' }));
store.dispatch(deleteProduct(1));
