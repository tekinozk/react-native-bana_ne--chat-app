import styles from "./Login.style"
import {React,useState} from 'react'
import {Text,View} from "react-native"
import Input from "../../../components/Input/input"
import Button from "../../../components/Button/Button"
import { Formik } from "formik"
import auth from "@react-native-firebase/auth"
import { showMessage} from "react-native-flash-message";
import AuthErrorMessageParser from "../../../utils/AuthErrorMessageParser"

function Login({navigation}) {
  const [loading,setLoading] = useState(false)

const handlePress = () =>{
    navigation.navigate("SignPage")
}

const initialFormValues ={
    usermail:"",
    password:"",
  }


const handleFormSubmit = async (formValues) =>{
  try {
    setLoading(true)
    await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password)
    setLoading(false)
  
} catch (error) {
  setLoading(false)
  showMessage({
    message: AuthErrorMessageParser(error.code),
    type: "warning",
    backgroundColor:"red"
  });
 
}

}


  return (
<View style={styles.container} >
    <Text style={styles.header} >Bana Ne?</Text>
    <Formik
    initialValues={initialFormValues}
    onSubmit={handleFormSubmit}
    >
        {({values,handleSubmit,handleChange})=>(

            
            <>
    <Input onChangeText={handleChange("usermail")} value={values.usermail}    placeholder="e-postanızı giriniz... "/>
    <Input onChangeText={handleChange("password")} value={values.password}    isSecure={true}  placeholder="Şifrenizi giriniz... "/>
    <Button loading={loading} text={"GİRİŞ YAP"}  onPress={handleSubmit} />
</>
            )
        }
    </Formik>
    <Button onPress={handlePress}  theme="secondary" text={"KAYIT OL"} />
   </View>
  )
}

export default Login