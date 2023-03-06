import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Summary = ({deliveryCharge = 0, subTotal = 0}) => {
  return (
    <View style={styles.summary}>
      <View style={styles.summaryField}>
        <Text style={styles.summaryText}>Delivery Charges</Text>
        <Text style={styles.summaryValue}>{deliveryCharge}</Text>
      </View>
      <View style={styles.summaryField}>
        <Text style={styles.summaryText}>Sub Total</Text>
        <Text style={styles.summaryValue}>{subTotal}</Text>
      </View>
      <View style={styles.summaryField}>
        <Text style={styles.summaryText}>Total</Text>
        <Text style={styles.summaryValue}>{subTotal + deliveryCharge}</Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
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
});
