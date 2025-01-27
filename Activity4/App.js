
import React from 'react';
import {View, StyleSheet, TextInput, Text, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider 
        style={{
          flexDirection: 'row',
        }}
            >
      <View style={{alignItems:"flex-start",flex: 2}}>

<Image
            source={{
              uri: 'https://i.scdn.co/image/ab6761610000e5eb50069ac992d74c5610ecb9cc',
            }}
            style={{width: 200, height: 200,resizeMode:"center",margin:"auto"}}
          />

      <Text style ={
          {
              textAlign: "center",
              flex: 1
            }
          }>Timothy "Tim" Dionela (born March 14, 1999), known professionally by his last name as Dionela</Text>
          

      </View>

      <SafeAreaView style={{flex: 2}}>
        <TextInput
          style={styles.input}
          placeholder="NAME:"
        />

        <TextInput
          style={styles.input}
          placeholder="AGE:"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="ADDRESS:"
        />

        <TextInput
          style={styles.input}
          placeholder="SCHOOL:"
        />

        <TextInput
          style={styles.input}
          placeholder="COURSE:"
        />

        <TextInput
          style={styles.input}
          placeholder="EMAIL:"
          keyboardType="email"
        />
        
        <TextInput
          style={styles.input}
          placeholder="CONTACT NO:"
          keyboardType="tel"
        />

        <TextInput
          multiline
          numberOfLines={5}
          editable
          style={styles.multi}
          placeholder="ABOUT ME:"
          maxLength={255}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
//name,age,address,school,course,email,contact_no
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },

  multi: {
    height: 100,
    margin: 12,
    borderColor: '#00008B',
    borderWidth: 2,
    padding: 5,
  },

});

export default TextInputExample;


