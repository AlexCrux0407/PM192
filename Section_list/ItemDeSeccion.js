import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ItemDeSeccion = (props) => {
  return (
    <View style={itemStyles.itemCard}>
      <Text style={itemStyles.itemNombre}>{props.nombre}</Text>
      <Text style={itemStyles.itemMensaje}>{props.mensaje}</Text>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  itemNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5,
  },
  itemMensaje: {
    fontSize: 16,
    color: '#555',
  },
});

export default ItemDeSeccion;