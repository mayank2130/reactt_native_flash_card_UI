import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Buggati Veyron',
      status: '$1.7M',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg',
    },
    {
      uid: 2,
      name: 'Buggati Chiron',
      status: '$4.0M',
      imageUrl:
        'https://newsroomcdn.bugatti.com/w_1800,q_75/276lo0iu03p0-01-bugatti-css-golden-era-making-of.webp',
    },
    {
      uid: 3,
      name: 'Mercedes S-Class',
      status: '$129,300',
      imageUrl:
        'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2021-Mercedes-Benz-S-Class-S-450-sedan-red-press-image-1001x565p.jpg',
    },
    {
      uid: 4,
      name: 'Range Rover',
      status: '$166,400',
      imageUrl:
        'https://www.cnet.com/a/img/resize/d4e691837e481f1f2e2c3ad3ac21dfb85f2d0aca/hub/2021/10/25/0b2caab3-02c2-40bf-9c44-a8d970e675bf/2023-land-rover-range-rover-sv-promo.jpg?auto=webp&fit=crop&height=675&width=1200',
    },
    {
      uid: 5,
      name: 'Ferrari F8 Spider',
      status: '$328,292',
      imageUrl:
        'https://bluesky.cdn.imgeng.in/cogstock-images/b804c381-44ad-480d-b8f2-595a8d64f2b8.jpg?migeng=/w_1200/',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Car List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              resizeMode="contain"
              source={{uri: imageUrl}}
              style={styles.userImage}
            />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userName}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  },
  userCard: {
    width: 350,
    height: 260,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  userImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  userName: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center"
  },
});
