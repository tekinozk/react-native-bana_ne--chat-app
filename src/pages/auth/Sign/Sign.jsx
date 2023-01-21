import styles from "./Sign.style"
import React from 'react'
import {Text,View} from "react-native"
import Input from "../../../components/Input/input"
import Button from "../../../components/Button/Button"
import {Formik} from "formik"
import auth from "@react-native-firebase/auth"
import FlashMessage, { showMessage } from "react-native-flash-message";
import AuthErrorMessageParser from "../../../utils/AuthErrorMessageParser"



function Sign({navigation}) {
 
  const initialFormValues = {
    usermail:"",
    userpassword:"",
    userconfirm:"",
  }

  const handleLogin = () =>{
    navigation.goBack()
  }

const handleSign = async (form) => {
if(form.userpassword !== form.userconfirm){return(
    showMessage({message:"Parolalar eşleşmiyor",type:"warning"}))
      }

try { await auth().createUserWithEmailAndPassword(form.usermail,form.userconfirm)
  showMessage({message:"Kullanıcı oluşturuldu",type:"success"})
  navigation.navigate("LoginPage")
} catch (error) {
  showMessage({message:AuthErrorMessageParser(error.code),type:"warning"})
}




 
 

}

  return (
<View style={styles.container} >
    <Text style={styles.header} >Bana Ne?</Text>
    <Formik
    initialValues={initialFormValues}
    onSubmit={handleSign}
    >
      {({values,handleSubmit,handleChange})=>(

        <>
        <Input onChangeText={handleChange("usermail")} value={values.usermail}   placeholder="e-postanızı giriniz... "/>
        <Input onChangeText={handleChange("userpassword")} value={values.userpassword}  isSecure={true}  placeholder="Şifrenizi giriniz... "/>
        <Input onChangeText={handleChange("userconfirm")} value={values.userconfirm}  isSecure={true}  placeholder="Şifrenizi tekrar giriniz... "/>
        <Button   onPress={handleSubmit} text="KAYIT OL" />
        </>
        )
  }
    </Formik>
  
    <Button theme="secondary" text="GERİ" onPress={handleLogin} />
   </View>
  )
}

export default Sign