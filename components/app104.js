import React from 'react';
import { View,Text } from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      //this is our initial data
      message:'Hello World',
      bp:'How You Like that',
    }
  }
  render(){
    return(
      <View>
        <Text>{this.state.message}</Text>
        <Text>I Love My Mather</Text>
      </View>
    )
  }
}
export default App;