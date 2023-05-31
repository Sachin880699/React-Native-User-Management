import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  AsyncStorage from "@react-native-async-storage/async-storage"
import Register from './register';


const Login =({navigation})=>{
    const [email,setEmail] = useState(undefined)
    const [password,setPassword] = useState(undefined)
    const [error, setError] = useState(undefined)

   

    const LoginUser = async () =>{
        const url = "http://192.168.193.146:8000/api/login/"
        const data ={
            email:email,
            password:password
        }

        let result = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        response = await result.json()
        console.log(response.Message.code)
        if(response.Message.code=== 200){
            setError(undefined)
            await AsyncStorage.setItem('user', JSON.stringify(response.Output));
            navigation.navigate('Home');
        }
        else
        {
            setError("Email or password is wrong!")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <Text style={{fontSize:15,color:"red"}}>{error}</Text>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                <Text style={styles.forgot_button}>Register</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.loginBtn} onPress={LoginUser}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
           
        </View>
    )
}


const styles = StyleSheet.create({
    

    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
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

export default Login