import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacit,Image } from "react-native";

export function HomeScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
    
     <View style={styles.Persona}>
    <View  style={styles.Per1}>

    <Image style={styles.header} source={require("../assets/saric.jpg")} />
    </View>


     </View>
     <View style={styles.text1}>
     <Text style ={styles.text2}>Danijela</Text>
      <Text style={styles.text2}>Saric</Text>
      <Text style={styles.text2}>dsaric1@ffos.hr</Text>




     </View>

     <View style={styles.Persona}>
    <View  style={styles.Per1}>

   
    </View>


     </View>
     <View style={styles.text1}>
     <Text style ={styles.text2}>FFOS</Text>
      <Text style={styles.text2}>Srednja Strukovna Vinkovci</Text>
      <Text style={styles.text2}>Osnovna skola</Text>




     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
Persona:{
  flexDirection:"row",
  justifyContent: "space-between",
  paddingHorizontal: 10,
  borderBottomWidth: 3,
  borderBottomColor: "blue"
},
header:{
  width: 150,
  height: 150
},
text1:{
  padding:30,

},
text2:{
  padding:10,
  
}
});