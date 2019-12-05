import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Container =(props)=>{

    return(
    <View style={{...styles.card,...props.style}}>{props.children}</View>
    )
}

const styles=StyleSheet.create({
    card: {
        alignItems: "center",
        shadowColor:'black',
        shadowOffset:{width:4,height:4},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        borderRadius:5,
        padding:20,
      },
    
})
export default Container;