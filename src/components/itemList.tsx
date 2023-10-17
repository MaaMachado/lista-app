// App.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function List() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Digite um item..."
          style={styles.input}
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />

        <TouchableOpacity onPress={handleAddItem}>
            <Text style={styles.btn}>▶</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listagem}>
        <Text style={styles.tittle}>Lista de Itens:</Text>
        <Text style={styles.br}>--------------------------------------------------------</Text>

        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.bola}></View>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: -200,
  },
  input: {
    width: 320,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  btn: {
    width: 30,
    height: 40,
    backgroundColor: '#2088AF',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 8,
  },
  listagem: {
    width: 350,
    padding: 15,
    marginTop: 20,
    backgroundColor: '#D7E6F0',
  },
  tittle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  br: {
    fontWeight:'bold',
    color: '#2088AF'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bola: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
