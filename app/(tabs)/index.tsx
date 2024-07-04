import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@swmansion/icons";
import MasonryList from "@react-native-seoul/masonry-list";
import { Video } from "expo-av";

const image = require("../../assets/images/header.png");

const data = [
  { uri: 'https://i.pinimg.com/236x/39/91/6c/39916ca80e4f762a0963cae544a8fe00.jpg', type: 'image' },
  { uri: 'https://i.pinimg.com/236x/c1/4f/91/c14f914870be1a780cc7b462c987ed20.jpg', type: 'image' },
  { uri: 'https://i.pinimg.com/236x/d7/4c/2c/d74c2c9a78b1f60815ebcf1065af4d51.jpg', type: 'image' },
  { uri: 'https://i.pinimg.com/236x/9e/76/09/9e76099e2effb0b77875b2358cbf862c.jpg', type: 'image' },
  { uri: 'https://i.pinimg.com/236x/c1/4f/91/c14f914870be1a780cc7b462c987ed20.jpg', type: 'image' },
  { uri: 'https://i.pinimg.com/236x/7f/62/91/7f6291ab0e6e01434169a1fc5628c46a.jpg', type: 'image' },
  // Add more items as needed
];

export default function HomeScreen() {
  const [search, onSearch] = useState('');

  const handleItemPress = (item) => {
    console.log('Item clicked:', item);
  };

  const renderItem = ({ item }) => {
    const randomHeight = Math.random() > 0.5 ? 200 : 300; // Set random heights
    if (item.type === 'image') {
      return (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
          <ImageBackground source={{ uri: item.uri }} style={[styles.image, { height: randomHeight }]}>
            {/* Add any overlay or text on the image if needed */}
          </ImageBackground>
        </TouchableOpacity>
      );
    } else if (item.type === 'video') {
      return (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
          <Video
            source={{ uri: item.uri }}
            style={[styles.video, { height: randomHeight }]}
            useNativeControls
            resizeMode="cover"
            isLooping
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.main}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={image} style={styles.imageBackground}>
          <Text style={styles.headerText}>WOLOLO HABARI?</Text>
          <Text style={styles.subHeaderText}>SO KA PANTE INI HARI?</Text>
        </ImageBackground>
      </View>
      <View style={{ flex: 2, marginTop: "5%" }}>
        <View style={styles.searchContainer}>
          <Icon name="search" type="outline" color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            value={search}
            onChangeText={onSearch}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
        <View style={{ flex: 5, marginTop: "5%" }}>
          <MasonryList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={renderItem}
            contentContainerStyle={styles.masonryContainer}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Sirukota",
    fontSize: 34,
    color: "white",
  },
  subHeaderText: {
    textAlign: "center",
    fontFamily: "Sirukota",
    fontSize: 18,
    color: "white",
    marginTop: "2%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
  masonryContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 15,
    borderRadius: 10,
    margin: 5,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  video: {
    width: "100%",
    borderRadius: 10,
  },
});
