import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const CartItem = ({
  picture_url = 'https://specifications-pro.com/wp-content/uploads/2021/08/iPhone-13-2.jpg',
  name = 'Product Name',
  qty = 1,
  price = 100,
  onIncQty,
  onDecQty,
  onDelete,
}) => {
  return (
    <View style={styles.cartitem}>
      <Image
        source={{
          uri: picture_url,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{paddingHorizontal: 15, flex: 1}}>
        <Text style={styles.cartText}>{name}</Text>
        <Text style={styles.itemPrice}> {price} </Text>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.incSel} onPress={onIncQty}>
            <Text style={{fontSize: 25, lineHeight: 26}}>+</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{qty}</Text>
          <TouchableOpacity style={styles.incSel} onPress={onDecQty}>
            <Text style={{fontSize: 25, lineHeight: 26}}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.delete} onPress={onDelete}>
          <Text style={{textTransform: 'uppercase', color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartitem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  delete: {
    fontSize: 18,
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
  },
  qty: {fontSize: 18, marginHorizontal: 10, lineHeight: 26, color: 'black'},
  incSel: {
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemPrice: {fontSize: 15, color: 'black'},
  cartText: {fontSize: 20, color: 'black', paddingVertical: 2},
  image: {width: 60, height: 60},
});
