import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Button 
            accessibilityLabel='click em mim'
            title='CLICK AQUI'
            onPress={()=> {console.log('ola')}}
        />
    </View>
  );
}