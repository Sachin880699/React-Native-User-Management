import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {DataTable} from "react-native-paper"

const Users = ({navigation})=>{

    const [data,setData] = useState([])
    const [name,setName] = useState(undefined)
    const getAPIData = async () =>{

        const url ="http://192.168.193.146:8000/api/member_list/"
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(()=>{
        getAPIData();
    },[])

    // Search Users

    const searchUser = async (text)=>{
        setName(text)
        const url = "http://192.168.193.146:8000/api/search_member/"
        const data={
            search:name,
        }
        let result = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        result = result.json();
        console.warn(result)
        setData(result)
    }

    

    
    return(
        <View>
            <Text style={{fontSize:30,color:"red"}} onPress={()=>navigation.navigate("Home")}>Home</Text>

            <TextInput onChangeText={(text)=>searchUser(text)} placeholder='Search...' style={styles.searchBox} placeholderTextColor="black" />
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Email</DataTable.Title>
                <DataTable.Title>Acation</DataTable.Title>
                </DataTable.Header>

                {data.length?
                data.map((item) =>
                <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.email}</DataTable.Cell>
                <DataTable.Cell>
                    <TouchableOpacity >
                        <Text style={{color:"orange"}}>Update</Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={{color:"red"}}>Delete</Text>
                    </TouchableOpacity>
                    </View>
                </DataTable.Cell>
                </DataTable.Row>
                )
                :null
                
                }


            </DataTable>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox:{
        color:"black",
        fontSize:18,
        borderWidth:2,
        borderColor:"gray",
        margin:10,
        borderRadius:10
    }
})

export default Users;