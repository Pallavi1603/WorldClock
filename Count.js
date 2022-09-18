import React from "react";
import {View,Text, FlatList,useState,StyleSheet,Image,Button} from "react-native";

const date3 = new Date(Date.UTC(2013, 14, 10, 2, 6, 9));

const Count=(props)=>{
    return(
      <Text>{props.Text}</Text>
    )
  }

export default Count;