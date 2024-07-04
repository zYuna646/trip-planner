import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Icon } from "@swmansion/icons";

const image = require("../../assets/images/header.png");

const data = [
  {
    uri: "https://i.pinimg.com/236x/39/91/6c/39916ca80e4f762a0963cae544a8fe00.jpg",
    hashtag: "#Nature",
  },
  {
    uri: "https://i.pinimg.com/236x/c1/4f/91/c14f914870be1a780cc7b462c987ed20.jpg",
    hashtag: "#Travel",
  },
  // Add more items as needed
];

const Card = ({ item }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <ImageBackground source={{ uri: item.uri }} style={styles.cardImage}>
        <Text style={styles.hashtagText}>{item.hashtag}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default function TabTwoScreen() {
  const [search, onSearch] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={image} style={styles.imageBackground}>
            <View style={{ flex: 2 }}>
              <View style={styles.searchContainer}>
                <Icon
                  name="search"
                  type="outline"
                  color="white"
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.textInput}
                  value={search}
                  onChangeText={onSearch}
                  placeholder="Search"
                  placeholderTextColor="white"
                />
              </View>
            </View>
            <View style={{ width: "90%", alignSelf: "center", flex: 1, }}>
                <Text style={styles.headerText}>KEMANA?</Text>
                <Text style={styles.headerText}>PERGINYA SHERYLY?</Text>
                <Text style={styles.subHeaderText}>
                  Sheryly, si Hiu Paus ramah tak kunjung kembali setelah
                </Text>
                <Text style={styles.subHeaderText}>kedatangan paus orca</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, width: "90%", alignSelf: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Icon name="explore" type="outline" color="#008B92" />
            <Text
              style={{ fontWeight: "bold", fontSize: 20, marginLeft: "5%" }}
            >
              Trends Now
            </Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#008B92",
    borderRadius: 30,
    width: "90%",
    alignSelf: "center",
    height: 60,
    paddingHorizontal: 10,
    marginTop: "25%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  headerText: {
    alignSelf: "flex-start",
    textAlign: "center",
    fontFamily: "Sirukota",
    fontSize: 34,
    color: "white",
  },
  subHeaderText: {
    fontSize: 10,
    color: "white",
    marginBottom: "2%",
  },
  textInput: {
    flex: 1,
    height: "100%",
    color: "white",
  },
  cardContainer: {
    width: "100%",
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  hashtagText: {
    color: "white",
    padding: 10,
    fontSize: 20,
    borderBottomLeftRadius: 10,
  },
  scrollViewContent: {
    marginTop: "5%",
    paddingBottom: 15,
  },
});
