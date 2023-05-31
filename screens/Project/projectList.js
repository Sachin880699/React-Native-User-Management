import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image, SafeAreaViewBase } from 'react-native';
import { DataTable } from 'react-native-paper';


const ProjectList =({navigation})=>{
    const [data,setData] = useState([])
    const getAPIData = async ()=>{
        const url = "http://192.168.193.146:8000/api/inhouse_project_list/"
        let result = await fetch(url)
        result = await result.json();
        setData(result.Output)
        console.log(result.Output)
    }
    useEffect(()=>{
        getAPIData();
    },[])

    return(
        <View>
            <Text style={{color:"red"}} onPress={()=>navigation.navigate("Home")}>Back</Text>
           <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>ID</DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>
            
            {
                data.length?
                data.map((item)=>
                <View>
                    <DataTable.Row>
                 <DataTable.Cell>{item.id}</DataTable.Cell>
                <DataTable.Cell>{item.project_name}</DataTable.Cell>
                <DataTable.Cell>Details</DataTable.Cell>
                </DataTable.Row>
                </View>)
                :
                null
            }
                
                
           
  
    </DataTable>
        </View>
    )
}

export default ProjectList

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      projectName:{
        color:"black"
      }
})