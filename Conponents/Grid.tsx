import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const style=StyleSheet.create({
    items:{
        width:80,
        height:80,
        backgroundColor:'black',
        color:'white',
        fontWeight:'bold',
        fontSize:50,
        textAlignVertical:'center',
        margin:5,
        textAlign:'center'
    }
})
const Grid=()=>{

    return(
    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
     <Text style={style.items}>S</Text>
     <Text style={style.items}>E</Text>
     <Text style={style.items}>M</Text>
     <Text style={style.items}>A</Text>
     <Text style={style.items}>N</Text>
     <Text style={style.items}>T</Text>
     <Text style={style.items}>A</Text>
    </View>)
}
export default Grid;