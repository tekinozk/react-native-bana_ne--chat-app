import {React,useState} from 'react'
import {View,TextInput} from "react-native"
import styles from "./contentInput.style"
import Button from '../../Button'
import Modal from "react-native-modal"



function contentInput({onSend,visible,onClose}) {
const [text,setText] = useState(null)

function handleSend(){
    if(!text){
        return false
    }
        onSend(text)
        setText(null)
}


  return (
    <Modal style={styles.modal} isVisible={visible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose} >
<View style={styles.container}>
    <View style={styles.input_container}>
<TextInput onChangeText={setText} placeholder='Darla hadi milleti' multiline />
    </View>
<Button  onPress={handleSend} text="Gönder"/>
</View> 
    </Modal>

)
}

export default contentInput