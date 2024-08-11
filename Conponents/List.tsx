import React from "react"
import { FlatList, ScrollView, Text, View } from "react-native"


const List=(props:any)=>{
const users=[
    {
      id:1,  
      name:"Semanta"
    },
    {
        id:2,  
        name:"Tamal Da"
    },
    {
        id:3,  
        name:"Maytri Di"
    },
    {
        id:4,  
        name:"Riya Di"
    },
    {
        id:5,  
        name:"Habibur Da"
    },
    {
        id:6,  
        name:"Akash Da"
    },
    {
        id:7,  
        name:"Aman Da"
    },
];

{/*diffrence between map and FlatList, FaltList is optimized for handel huge data on ScrollView and help to run low and device for 
   lag free and smooth scroll
*/}
if (props.method==="FlatList"){
    return(
        <View>
         <FlatList
          data={users}
          renderItem={({item})=>(<Text style={{marginTop:10,backgroundColor:'#16d953'}}>{item.name}</Text>)}
          keyExtractor={item=>item.id.toString()}
         />
        </View>
     )       
}else if(props.method==="Map"){
    {/*ScrollView use for add scrolling on page*/}
       return(
       <ScrollView style={{}}>
       { users.map((text)=>(<Text style={{marginTop:80,backgroundColor:'#16d953',fontSize:30,}} key={text.id}>{text.name}</Text>))}
       </ScrollView>
       )
}    

}
export default List;