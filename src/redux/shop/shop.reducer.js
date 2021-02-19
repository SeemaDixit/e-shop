import SHOP_DATA from '../../pages/shop/shopData';

const INIATIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INIATIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}
  
  export default shopReducer;