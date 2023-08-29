import { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText("");
  }
  const buttonClear = () => {
    setData([]);
    setText("")
  }

  return (
    <View style={styles.container} >
      <View>
        <TextInput
          style={{ width: 200, borderColor: 'grey', borderWidth: 1, marginTop: 200 }}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button onPress={buttonPressed} title='ADD' />
        <Button onPress={buttonClear} title='CLEAR' />
      </View>
      <View>
        <Text>Shoppinglist</Text>
        <FlatList data={data} renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()} />
      </View>
      <View>
        <Text>Shoppinglist</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  warningText: {
    fontSize: 20
  },
});

