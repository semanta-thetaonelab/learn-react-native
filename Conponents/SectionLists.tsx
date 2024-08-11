import React from "react";
import { ScrollView, SectionList, StyleSheet, Text, View } from "react-native";

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
});

const user=[
    {
        id:'1',
        name:'Semanta',
        data:['PHP',"JS",'Angular']
    },
    {
        id:'2',
        name:'Argha',
        data:['PHP',"JS",'Angular','React','Next','React-Native']
    }
]
const SelectionLists=()=>{

    return(<View>
        <SectionList
         sections={user}
         renderItem={({item})=><Text style={{marginLeft:15,fontSize:13}}>{item}</Text>}
         renderSectionHeader={({section:{name}})=>(
            <Text style={{marginLeft:0,fontSize:30}}>{name}</Text>
         )}
        />
    </View>)
}
export default SelectionLists;