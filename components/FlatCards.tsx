import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.innerText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.innerText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.innerText}>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
        margin:2
    },
    innerText:{
        color: "#FFFFFF"
    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:10
    },
    card:{
        justifyContent: "center",
        alignItems: "center",
        margin:8,
        borderRadius: 4,
        width: 100,
        height: 100
    },
    cardOne:{
        backgroundColor: "#B31B1B"
    },
    cardTwo:{
        backgroundColor: "#007FFF"
    },
    cardThree:{
        backgroundColor: "#4CBB17"
    },
})