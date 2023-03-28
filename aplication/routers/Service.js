import { useState } from "react";
import { Button, FlatList, SafeAreaView, TextInput, Text, View, StyleSheet } from "react-native";
import Task from "../components/Task";


const DATA = [];
  
export default  function Service() {
        
    const Item = ({item}) => (
        <View style={style.item}>
            <Text style={style.title}>{item.title}</Text>
            <Text style={style.title}>{item.date}</Text>
            <Button title="Remove" color={"red"} onPress={() => {                
                var index = DATA.indexOf(item)
                DATA.splice(index, 1)
                setList([DATA])
             } }/>
        </View>
    )

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [list, setList] = useState([]);

    return (
        <View style={style.container}>

            <View style={style.form}>
                <TextInput style={style.input} 
                           placeholder="enter task name" 
                           onChangeText={(text) => setTask(text)}
                           value={task}
                />
            </View>

            <View style={style.form}>
                <TextInput style={style.input} 
                           placeholder="enter the date"
                           onChangeText={(text) => setDate(text)}
                           value={date}
                />
            </View>

            <View style={style.form}>                
                <Button title="Add" onPress={() => {                    
                    DATA.push({id: DATA.length, title: task, date: date});
                    setList([DATA])
                 } }/>
            </View>

            <View style={style.divider}>

            </View>


            <SafeAreaView style={style.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1,     
        alignItems: 'center',
    },
    form : {
        width: 300,
        borderWidth: 1,
        borderColor: "blue",    
        margin: 2,
        borderRadius: 5,
    },
    input : {
        fontSize: "1.2em",
        padding: 4, 
        width: "100%"
    },
    active_danger: {
        fontSize: "1.4em",
        backgroundColor: "red",
        padding: 6,
        borderRadius: 5,
    },
    form_danger: {
        width: 300, 
        borderRadius: 5, 
        textAlign: "center"
    },
    active_danger: {
        fontSize: "1.4em",
        backgroundColor: "red",
        padding: 6,
        borderRadius: 5,
    },
    divider: {
        width: "100%", 
        borderWidth: 1,
        borderColor: "black",    
    },
    item: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        width: 600, 
        margin: 2,
    },
    title: {
        margin: 4,
        flex: 0.5
    }
})