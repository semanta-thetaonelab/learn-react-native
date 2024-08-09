import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const InputField=()=>{
    const [inputFields,setInputField]=useState({name:'',email:'',pass:''});
    
    const controlFormChanges=(Whom:string,val:any)=>{
        setInputField({
          ...inputFields,
          [Whom]:val
        })
    }
    return(
       <View>
        <Text style={{margin:5}}>Enter Name</Text>
        <TextInput 
         placeholder='Enter name'
         value={inputFields.name}
         onChangeText={(text)=>controlFormChanges('name',text)}
         style={{borderColor:'#cdcdd1',borderRadius:5,borderWidth:1,margin:5,paddingLeft:15}}
        />
  
        <Text style={{margin:5}}>Enter Email</Text>
        <TextInput 
         placeholder='Enter email'
         value={inputFields.email}
         onChangeText={(text)=>controlFormChanges('email',text)}
         style={{borderColor:'#cdcdd1',borderRadius:5,borderWidth:1,margin:5,paddingLeft:15}}
        />
        <Text style={{margin:5}}>Enter Passord</Text>
        <TextInput 
         placeholder='Enter passord'
         value={inputFields.pass}
         secureTextEntry={true}
         onChangeText={(text)=>controlFormChanges('pass',text)}
         style={{borderColor:'#cdcdd1',borderRadius:5,borderWidth:1,margin:5,paddingLeft:15}}
        />
        {/* <Button title='See value' onPress={()=>console.warn(inputFields.name)}/> */}
       </View>
    )
  }