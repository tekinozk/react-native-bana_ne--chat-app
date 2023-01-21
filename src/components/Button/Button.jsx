import React from 'react'
import {TouchableOpacity,Text, ActivityIndicator} from "react-native"
import styles from "./Button.style"



function Button({onPress,loading,text,theme="primary"}) {




  return (
 <TouchableOpacity text={text} onPress={onPress} loading={loading} style={styles[theme].container}>
  {loading?<ActivityIndicator size="large"></ActivityIndicator>:<Text style={styles[theme].title}>{text}</Text>}

 </TouchableOpacity>
  )
}

export default Button