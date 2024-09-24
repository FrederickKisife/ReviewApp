import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        padding: 24,
    },
    title:{
        fontFamily:"helvetica",
        fontWeight:"bold",
        fontSize:18,
    }
})