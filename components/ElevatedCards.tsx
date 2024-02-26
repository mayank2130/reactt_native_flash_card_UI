import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Hello</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Lilly</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Hi</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>how</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>are</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>you?</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    margin: 2,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 6,
  },
});
