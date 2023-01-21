import React from 'react'
import {Text,View} from "react-native"
import { TouchableOpacity } from 'react-native'
import styles from "./MessageCard.style"

function MessageCard({message,onDislike,disabled }) {


  return (
 <View style={styles.container} >
    <Text style={styles.date}  >{message.date}</Text>
    <Text style={styles.text}   >{message.text}</Text>
    <Text style={styles.username}   >{message.username}</Text>
    <View>
      <TouchableOpacity disabled={disabled} style={styles.dislike} onPress={onDislike}>
        <Text style={styles.title} >Bana Ne?</Text>
        {message.dislike? <Text>{message.dislike}</Text>:null}
      </TouchableOpacity>
    </View>
    <View>

    </View>
 </View>
  )
}

export default MessageCard