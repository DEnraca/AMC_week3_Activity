
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
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


