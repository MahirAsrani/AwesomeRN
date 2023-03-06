import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../components/cart/CartItem';
import Summary from '../components/cart/Summary';
import {
  decreseQty,
  deleteCartItem,
  increseQty,
} from '../redux/actions/cartActions';

const CartScreen = () => {
  const cartItems = useSelector(({cart}) => cart.items);
  const dispatch = useDispatch();
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Items in Cart</Text>
      <ScrollView style={styles.itemContainer}>
        {cartItems?.map(x => (
          <CartItem
            key={x.id}
            picture_url={x.picture_url}
            name={x.name}
            qty={x.qty}
            price={x.price}
            onIncQty={() => dispatch(increseQty(x.id))}
            onDecQty={() => dispatch(decreseQty(x.id))}
            onDelete={() => dispatch(deleteCartItem(x.id))}
          />
        ))}
      </ScrollView>
      <Summary
        deliveryCharge={15.0}
        subTotal={cartItems.reduce((pv, cv) => (pv += cv.price * cv.qty), 0)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => alert('chk')}>
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 12,
    color: 'black',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'flex-end',
  },
  itemContainer: {
    flex: 1,
  },

  btn: {
    backgroundColor: '#fc0339',
    padding: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
