import {StyleSheet} from "react-native"

const base_style = StyleSheet.create({
    container:{ 
        margin:14,
        padding:10,
        marginTop:20,
        borderRadius:8,
            },
            title:{ 
                textAlign:"center",
                fontWeight:"bold",
            }

})





export default {
primary:StyleSheet.create({
    ...base_style,
    container:{
        ...base_style.container,
backgroundColor:"#80cbc4",
    },
    title:{
        ...base_style.title,
        color:"white",
       
    }
}),
secondary:StyleSheet.create({
    ...base_style,
    container:{
        ...base_style.container,
backgroundColor:"white",
borderWidth:1,


    },
    title:{
        ...base_style.title,
        color:"#80cbc4",
     
    }
})

}


