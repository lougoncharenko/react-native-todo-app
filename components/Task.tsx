import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
interface Props {
    taskname: string
}

const Task = ({taskname}: Props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity> 
             <Text>This is a Text</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
     backgroundColor: 'white',
     padding: 15,
     borderRadius: 10,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6'
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black'
    }
});

export default Task