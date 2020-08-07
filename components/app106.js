
import React from 'react';
import { View,Text } from 'react-native';


export default class ViewBox extends React.Component{
  render(){
    return(
      <View style={{
        flexDirection:"row",
        height:100,
        padding:20
      }}>
        <View style={{backgroundColor:"blue",flex:0.3}}>
          <Text style={{color:"white",textAlign:"center"}}>Blue</Text>
        </View>
        <View style={{backgroundColor:"green",flex:0.3}}></View>
        <Text>Hello My Cat</Text>
      </View>
    )
  }
}
