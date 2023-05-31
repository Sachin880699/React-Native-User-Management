import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image } from 'react-native';
import Users from './users';
import Login from './Authentication/login';

const Home =({navigation})=>{

    return(
        <View >
           <TouchableOpacity onPress={()=>navigation.navigate("Users")}>
            <Image style={styles.userImage} source={{uri:"https://e7.pngegg.com/pngimages/389/412/png-clipart-font-awesome-computer-icons-user-profile-users-group-blind-miscellaneous-blue-thumbnail.png"}} />
            
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("ProjectList")}>
            <Image style={styles.allProject} source={{uri:"https://cdn-icons-png.flaticon.com/512/1087/1087815.png"}} />
            </TouchableOpacity>
            
            <Text style={{fontSize:30,color:"red"}} onPress={()=>navigation.navigate("ProjectList")}>Login</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    

    userImage:{
        width: 150,
        height: 150,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "black",
        marginLeft:100,
        borderColor:"gray",
        borderRadius:10,
        marginTop:10
    },
    allProject:{
        width: 150,
        height: 150,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "black",
        marginLeft:100,
        borderColor:"gray",
        borderRadius:10,
        marginTop:10
    }
    
    
})

export default Home