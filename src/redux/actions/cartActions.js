import {
  ADD_ITEM_TO_CART,
  DEC_QTY_CART,
  DELETE_ITEM_FROM_CART,
  INC_QTY_CART,
} from '../../constants';

export const increseQty = id => {
  return {
    type: INC_QTY_CART,
    payload: id,
  };
};
export const decreseQty = id => {
  return {
    type: DEC_QTY_CART,
    payload: id,
  };
};
export const deleteCartItem = id => {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: id,
  };
};
export const addToCart = id => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: id,
  };
};
