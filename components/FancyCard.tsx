import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function FancyCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Mansions in Demand</Text>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.youtube.com/watch?v=WaiNimfkUE8')
          }>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              source={{
                uri: 'https://mlshkd6fvbce.i.optimole.com/cb:i5I2.12f4b/w:auto/h:auto/q:mauto/ig:avif/f:best/https://homesoftherich.net/wp-content/uploads/2022/01/Screen-Shot-2022-01-18-at-7.16.11-PM.png',
              }}
              style={styles.cardImage}
            />

            <View style={styles.cardBody}>
              <Text style={styles.cardTilte}>Stone Mansion</Text>
              <Text style={styles.cardLabel}>Alpine, New Jersey</Text>
              <View style={styles.cardSemiBody}>
                <Text style={styles.cardDescription}>12 bed 20 baths</Text>
                <Text style={styles.cardFooter}>10 car parking</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    margin: 2,
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardSemiBody: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    gap: 45,
  },
  cardTilte: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 15,
  },
  cardFooter: {
    fontSize: 15,
  },
});
