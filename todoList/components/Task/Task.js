import React from "react";
import {View , Text , StyleSheet, TouchableOpacity} from 'react-native'

const Task = ({
    text,
    completeTask,
    index,
}) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                 <Text style={styles.itemText}>{text}</Text>
            </View>
            <TouchableOpacity style={styles.circular} onPress={() => completeTask(index)}>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        width: 16,
        height: 16,
        borderColor:"#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
})

export default Task