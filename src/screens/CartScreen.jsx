import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CartScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.itemContainer}></View>
      <View style={styles.summary}>
        <View style={styles.summaryField}>
          <Text style={styles.summaryText}>Delivery Charges</Text>
          <Text style={styles.summaryValue}>55.00</Text>
        </View>
        <View style={styles.summaryField}>
          <Text style={styles.summaryText}>Sub Total</Text>
          <Text style={styles.summaryValue}>55.00</Text>
        </View>
        <View style={styles.summaryField}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryValue}>55.00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'flex-end',
  },
  itemContainer: {
    flex: 1,
  },
  summary: {
    flex: 0.2,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  summaryField: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  summaryText: {
    fontSize: 15,
  },
  summaryValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
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
