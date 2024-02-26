import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <TouchableOpacity  onPress={() => openWebsite('https://www.twitter.com')}>
        <Text style={styles.headingText}>ActionCard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 14,
        paddingHorizontal: 10,
        margin:2,
        color: "#0000FF"
        
    },
});
