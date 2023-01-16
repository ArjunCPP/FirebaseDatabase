import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,Button}from "react-native"

export default function VerifyCode(props){
    const [code,setCode] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Enter OTP</Text>
            <TextInput
            autoFocus
            keyboardType="numeric"
            style={styles.input}
            value={code}
            onChangeText={setCode}/>
            <Button
            title="Confirm OTP"
            onPress={()=> props.onSubmit(code)}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        borderWidth:1,
        borderColor:"#000",
        width:300,
        padding:10,
        marginVertical:30,
        fontSize:25,
        borderRadius:8

    },
    Text:{
        fontSize:25,

    }
})