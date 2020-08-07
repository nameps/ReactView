import React from 'react';
import{View,Text} from 'react-native';
const ViewBox=()=>{
  return(
    <View style={{
      flexDirection:"row",
      height:100,
      padding:20
    }}>

    <View style={{backgroundColor:"blue",flex:0.3}}></View>
    <View style={{backgroundColor:"red",flex:0.3}}></View>
      <Text>Hello world</Text>
    </View>
  )
}
export default ViewBox;