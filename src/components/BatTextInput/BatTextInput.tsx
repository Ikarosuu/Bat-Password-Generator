import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './BatTextinputStyles';

interface BatTextinputProps{
  pass: string
}

export function BatTextInput(props: BatTextinputProps) {
  return (
    <>
        <TextInput 
          placeholder='pass' 
          style={styles.inputer}
          value={props.pass}
        />
    </>
  );
}