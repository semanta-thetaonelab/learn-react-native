import { StyleSheet, Text } from "react-native"
import NewSyle from '../glopbalStyle'
const BasicStyle = () => {

    const style=StyleSheet.create({
        textStyle:{
          color:'#7970cf',
          fontSize:20,
          fontWeight:'bold'
          
        }
      })
    return (
      <>
        {/*this is inline css on react-native*/}
        <Text style={{fontSize:20}}>Hi I Am Inline CSS</Text>
  
        {/*this is internal css on react-native*/}
        <Text style={style.textStyle}>Hi I Am Internal CSS</Text>
  
        {/*this is one class global css on react-native*/} 
        <Text style={NewSyle.text}>One Class Global CSS</Text>
  
        {/*this is Multipal class global css on react-native*/}
        <Text style={[NewSyle.text,NewSyle.space]}>Multipal Class Global CSS</Text>
      </>
    )
  }