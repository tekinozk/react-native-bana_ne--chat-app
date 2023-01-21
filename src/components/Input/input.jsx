import React from 'react'
import {TextInput,View} from "react-native"
import styles from "./input.style"
import Icon from "react-native-vector-icons/EvilIcons"


function Input({placeholder,iconName,onChangeText,value,isSecure}) {
  return (
    <View style={styles.container}>
   <TextInput autoCapitalize="none" secureTextEntry={isSecure} style={styles.input}  value={value} placeholder={placeholder} onChangeText={onChangeText} ></TextInput>
   <Icon name={iconName} size={30} color="black" />
    </View>
  )
}

export default Input