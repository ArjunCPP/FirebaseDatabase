import React, { useState } from "react";
import{View,Text,TextInput, TouchableHighlight, StyleSheet, Alert}from "react-native"
import database from "@react-native-firebase/database"


let addItem = item => {
    database().ref('/Item').push({
        name:item
    })
}
function AddItem(){
    const [name,setName] = useState('');
    const handlesubmit = () =>{
        addItem(name)
        setName('');
        Alert.alert("Iteam Saved Succecfully")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titile}>Add Item</Text>
            <TextInput style={styles.ItemInput} value={name} onChangeText={text => setName(text)}/>
            <TouchableHighlight
            onPress={handlesubmit}
            style={styles.ButtonText}>
                <Text style={styles.Button}>Add</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        flexDirection:"column",
        justifyContent:"center",
        backgroundColor:"#6565fc"
    },
    titile:{
        marginBottom:20,
        fontSize:25,
        textAlign:"center"
    },
    ItemInput:{
        height:50,
        padding:4,
        marginRight:5,
        fontSize:23,
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:5,
        color:"#fff"
    },
    Button:{
        fontSize:18,
        color:"#111",
        alignItems:"center",
    },
    ButtonText:{
        height:45,
        flexDirection:"row",
        backgroundColor:"#fff",
        borderColor:"#fff",
        borderRadius:5,
        marginBottom:10,
        marginTop:10,
        alignSelf:"stretch",
        justifyContent:"center"
    }
})

export default AddItem;