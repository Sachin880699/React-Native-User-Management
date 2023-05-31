import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Register =({navigation})=>{
    const [email,setEmail] = useState(undefined);
    const [password,setPassword] = useState(undefined);
    const [name, setName] = useState(undefined);

    const saveAPIData = async () => {
        const url = "http://192.168.193.146:8000/api/register/"
        const data ={
          name:name,
          email:email,
          password:password
        }
        let result = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(data)
        })
        result = await result.json();
        navigation.navigate('Login');
      }


    return(
            <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder='Email'
                placeholderTextColor="black"
                onChangeText={(text)=>setEmail(text)}
            />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder='Password'
                placeholderTextColor="black"
                secureTextEntry={true}
                color="black"
                onChangeText={(text)=>setPassword(text)}
            />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder='Name'
                placeholderTextColor="black"
                color="black"
                onChangeText={(text)=>setName(text)}
            />
            </View>
             <TouchableOpacity><Text style={{color:"black"}} onPress={()=>navigation.navigate("Login")}>Login</Text></TouchableOpacity>
            
            <TouchableOpacity style={styles.loginBtn} onPress={saveAPIData} >
                <Text style={styles.loginText}>SUBMIT</Text>
            </TouchableOpacity>
           
        </View>


    )
    }

export default Register


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:50
    },
    title:{
        fontSize:30,
        color:"red",

    },
    inputView:{
        backgroundColor:"#FFC0CB",
        borderRadius:30,
        width:"70%",
        height:45,
        marginBottom:20,
        alignItems:"center"
    },
    TextInput:{
        height:50,
        flex:1,
        padding:10,
        marginLeft:20

    },
    forgot_button:{
        color:"black",
        height:30,
        marginBottom:30,
    },
    loginBtn:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#FF1493",
    },
    loginText:{
        marginTop:3,
        color:"black"
    }
})