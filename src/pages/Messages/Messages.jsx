import {React,useState,useEffect} from 'react'
import styles from "./Messages.style"
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import {View,FlatList,ScrollView,Text} from "react-native"
import ContentInput from '../../components/modal/ContentInput'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import parseContentData from '../../utils/parseContentData'
import MessageCard from '../../components/MessageCard/MessageCard'



function Messages() {
const[inputModalVisible,setInputModalVisible] = useState(false)
const [contentList,setContentList] = useState([])
const [disabled,setDisabled] = useState(false)

useEffect(() => {
  database()
  .ref('/messages')
  .on('value', snapshot => {
    const contentData = snapshot.val()

 
    const parsedContent=parseContentData(contentData || {} )
    setContentList(parsedContent)

  });
}, [])



function handleInputModalClose(){
  setInputModalVisible(false)
}

function handleContentSend(content){
  handleInputModalToggle()
sendContent(content)
}

 function  sendContent(content){
  const userMail =  auth().currentUser.email
  const contentObject ={
    text:content,
    username:userMail.split("@")[0],
    date:new Date().toISOString().replace(/T/,"  ").split(".")[0],
    dislike:0,
  }
   database().ref("messages/").push(contentObject)
}


function handleInputModalToggle(){

  setInputModalVisible(!inputModalVisible)

}


const handleDislike = async (item) => {
 await database().ref(`messages/${item.id}`).update({dislike:item.dislike + 1})


}

function renderContent  ({item}) {



return <MessageCard message={item} disabled={disabled} onDislike={()=>handleDislike(item)} />
} 


  return (
<View style={styles.container}>
<FlatList  data={contentList} renderItem={renderContent} />
  <FloatingButton  icon="plus" onPress={handleInputModalToggle} />    
   <ContentInput onSend={handleContentSend} visible={inputModalVisible} onClose={handleInputModalClose} />
</View>

    )
}

export default Messages