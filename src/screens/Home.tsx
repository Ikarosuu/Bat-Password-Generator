import React from 'react'
import {Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../screens/Style'
import { BatLogo } from '../components/BatLogo/BatLogo';
import { BatTextInput } from '../components/BatTextInput/BatTextInput';

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
        <View style={styles.inputContainer}>
            <BatTextInput></BatTextInput>
        </View>
            <StatusBar style="light" />
        </View>
    )
}