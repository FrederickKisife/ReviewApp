import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        padding: 24,
    }
})