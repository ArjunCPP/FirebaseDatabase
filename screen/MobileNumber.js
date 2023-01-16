import React, { useState } from "react";
import {StyleSheet, View, Text ,TextInput ,Button} from 'react-native'


export default function MobileNumber(props){
    const [phoneNumber,setPhoneNumber] = useState(null)
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Enter Phone Number</Text>
            <TextInput
            style={styles.input}
            autoFocus
            value={phoneNumber}
            onChangeText={setPhoneNumber}/>
            <Button
            title="Sign in with OTP"
            onPress={()=> props.onSubmit(phoneNumber)}/>
        </View>
    )
}

const styles = StyleSheet.create({
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