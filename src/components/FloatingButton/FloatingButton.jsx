import React from 'react'
import { TouchableOpacity ,View} from 'react-native'
import Icon from "react-native-vector-icons/EvilIcons"
import styles from "./FloatingButton.style"

function FloatingButton({onPress,icon}) {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress}  >
<Icon name={icon} size={40}  color="white"></Icon>
    </TouchableOpacity>
    </View>
  )
}

export default FloatingButton