import { View, Text ,Button,TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import auth from '@react-native-firebase/auth'

export default function Login({navigation}) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const signup = () =>{
 if(email !='' && password != ''){
  auth().createUserWithEmailAndPassword(email,password).then((res) =>{
    console.log("response",res)
    Alert.alert("User Create Successfully you can Login now")
  })
  .catch((error) => {
    console.log("error_+++++++++++++++++++++",error)
    Alert.alert(error.message)
  })
}
else{
  Alert.alert("Both fields are mandatory")
 }
 }

const login =() =>{
  auth().signInWithEmailAndPassword(email,password).then((res) =>{
    console.log("response",res);
    navigation.navigate('Home')
  })
  .catch((error) =>{
    console.log("error",error)
    Alert.alert(error.message)
  })
} 

  return (
    <View>
      <TextInput
      placeholder='Enter email'
      onChangeText={setEmail}
      keyboardType='email-address'
      value={email}
      />
       <TextInput
      placeholder='Enter password'
      onChangeText={setPassword}
      value={password}
      secureTextEntry={true}
      />
      <Button
      title='Sign Up'
      onPress={signup}
      />
       <Button
      title='Login'
      onPress={login}
      />
    </View>
  )
}