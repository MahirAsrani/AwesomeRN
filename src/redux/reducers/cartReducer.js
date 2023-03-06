import {
  INC_QTY_CART,
  DEC_QTY_CART,
  DELETE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
} from '../../constants.js';

const initialState = {
  items: [
    {
      id: 111,
      picture_url:
        'https://rukminim1.flixcart.com/image/416/416/kyq62kw0/noodle/f/z/o/840-pack-of-12-1-instant-noodles-maggi-original-imagawfw8ycfrgku.jpeg?q=70',
      name: 'Maggi Noodles',
      price: 10,
      qty: 1,
    },
    {
      id: 112,
      picture_url:
        'https://rukminim1.flixcart.com/image/416/416/l30hmkw0/mouse/e/1/r/-original-image8f8msmhfvjs.jpeg?q=70',
      name: 'Gaming Mouse',
      price: 710,
      qty: 1,
    },
    {
      id: 113,
      picture_url:
        'https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/y/p/a/-original-imaghhtnu8zm6yaf.jpeg?q=70',
      name: 'Boult AirBass',
      price: 1099,
      qty: 1,
    },
  ],
};

function decQty(items, id) {
  const newItems = [];
  items.forEach(x => {
    if (x.id === id) {
      x.qty <= 1 ? null : newItems.push({...x, qty: x.qty - 1});
    } else {
      newItems.push(x);
    }
  });

  return newItems;
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_QTY_CART:
      return {
        ...state,
        items: state.items.map(x =>
          x.id === action.payload ? {...x, qty: x.qty + 1} : x,
        ),
      };
    case DEC_QTY_CART:
      return {
        ...state,
        items: decQty(state.items, action.payload),
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(({id}) => id !== action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
