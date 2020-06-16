import React,{useState,useEffect} from 'react';
import { View, Text,FlatList,TextInput, Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            list:[],
            taskName:''
        }
    }

render(){

    return (
        console.log("list render",this.state.list),
      <View style={{ flex: 1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginBottom:10,borderColor: "#050300",backgroundColor:'#bab3a9',borderWidth: 1,marginVertical:10,borderRadius:8}}>
            <TextInput
                placeholder='Enter Task Name'
                onChangeText={(text)=>this.setState({taskName:text})}
            />
            <Button
                title='Add Task'
                onPress={()=>{
                    console.log("before",this.state.list)
                    var obj={itemName:this.state.taskName,status:0}
                    this.setState({list:[...this.state.list,obj]},()=>console.log("listAfter:",this.state.list))
                }}
            />
        </View>
      
        <FlatList
        style={{marginTop:20}}
            data={this.state.list}
            extraData={this.state.list}
            renderItem={({item,index})=>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginBottom:5,backgroundColor:'#f2a60f',borderRadius:8,borderColor:'#050300',borderWidth:1}}>
               <TextInput
               value={item.itemName}
               onChangeText={(text)=>
            {
                let array = this.state.list
                array[index].itemName=text
                console.log("array",array)
                this.setState({list:array})
            }
            } 
            />
            <TouchableOpacity style={{alignSelf:'center'}} 
            onPress={()=>{
                 var newArray = [...this.state.list]
                 console.log("index",index)
                if(newArray[index].status==0){
                    newArray[index].status=1
                }else{
                    newArray[index].status=0
                }
                this.setState({list:newArray},()=>console.log("stateChane",this.state.list))
            }
            }
            >
            {item.status==0?<Icon name="square-o" size={35} color="#900" />:<Icon name="check-square-o" size={35} color="#900"/>}    
            
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                this.state.list.splice(index,1)
                this.setState({list:[...this.state.list]})
            }}
                style={{alignSelf:'center'}}
            >
                <DeleteIcon name="delete" size={30} color="#900"/> 
            </TouchableOpacity>
            
            </View>
        }
        ListEmptyComponent={()=><Text style={{alignSelf:'center'}}>No Tasks Added</Text>}

        />
    </View>
    );
  }
}

export default HomeScreen  

