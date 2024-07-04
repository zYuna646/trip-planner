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
import React, { useState } from "react";
import { Icon } from "@swmansion/icons";

const data = [
  {
    uri: "https://i.pinimg.com/236x/39/91/6c/39916ca80e4f762a0963cae544a8fe00.jpg",
    title: "Nature",
    subtitle: "sadasd",
    price: "100k",
    desc: "sadaoskdoajsoidjasiojioda",
  },
  {
    uri: "https://i.pinimg.com/236x/c1/4f/91/c14f914870be1a780cc7b462c987ed20.jpg",
    title: "Travel",
    subtitle: "sadasd",
    price: "200k",
    desc: "sadaoskdoajsoidjasiojioda",
  },
  // Add more items as needed
];

const TrendCard = ({ item }) => (
  <View style={styles.trendCardContainer}>
    <ImageBackground source={{ uri: item.uri }} style={styles.trendCardImage} />
    <View style={styles.trendCardTextContainer}>
      <View style={{ flex: 4 }}>
        <Text style={styles.trendCardTitle}>{item.title}</Text>
        <Text style={{ color: "gray" }}>{item.subtitle}</Text>
        <Text style={{ color: "black", marginTop: "5%" }}>{item.desc}</Text>
        <Text
          style={{ color: "black", marginTop: "10%", alignSelf: "flex-end" }}
        >
          Mulai Dari
        </Text>
        <Text style={styles.trendCardPrice}>{item.price}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.trendCardButton}>
          <Text style={styles.trendCardButtonText}>Selengkapnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const MapCard = ({ item }) => (
  <View style={styles.mapCardContainer}>
    <View style={{flex:1}}>
      <ImageBackground source={{ uri: item.uri }} style={styles.mapCardImage} />
      <Text style={styles.mapCardTitle}>{item.title}</Text>
      <Text style={styles.mapCardPrice}>{item.subtitle}</Text>
      <Text style={{paddingHorizontal:10, color:'black', marginTop:'5%'}}>{item.desc}</Text>
    </View>
    <View>
      <TouchableOpacity style={styles.mapCardButton}>
        <Text style={styles.mapCardButtonText}>Selengkapnya</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function LocationScreen() {
  const [search, onSearch] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, width: "90%", alignSelf: "center" }}>
          <View style={{ flex: 1 }}>
            <View style={styles.searchContainer}>
              <Icon
                name="search"
                type="outline"
                color="#008B92"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.textInput}
                value={search}
                onChangeText={onSearch}
                placeholder="Search"
                placeholderTextColor="#008B92"
              />
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.suggestionText}>Suggestion</Text>
            <View style={styles.trendCardWrapper}>
              <TrendCard item={data[0]} />
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={styles.mapCardScrollView}
              showsHorizontalScrollIndicator={false}
            >
              {data.map((item, index) => (
                <MapCard key={index} item={item} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
    marginTop: "8%",
  },
  textInput: {
    flex: 1,
    height: "100%",
    color: "#008B92",
  },
  suggestionText: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  trendCardWrapper: {
    flex: 2,
    marginBottom: 15,
  },
  trendCardContainer: {
    borderWidth: 1,
    borderColor: "#008B92",
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
  },
  trendCardImage: {
    width: 180,
    height: 250,
  },
  trendCardTextContainer: {
    flex: 1,
    padding: 10,
  },
  trendCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  trendCardPrice: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginVertical: 2,
  },
  trendCardButton: {
    backgroundColor: "#008B92",
    padding: 10,
    borderRadius: 25,
  },
  trendCardButtonText: {
    color: "white",
    textAlign: "center",
  },
  mapCardScrollView: {
    flexDirection: "row",
    marginBottom: "50%",
  },
  mapCardContainer: {
    width: 220,
    height: 330,
    marginRight: 15,
    borderRadius: 20,
    borderColor: "#008B92",
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
  },
  mapCardImage: {
    width: "100%",
    height: 100,
  },
  mapCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  mapCardPrice: {
    fontSize: 16,
    color: "gray",
    paddingHorizontal: 10,
  },
  mapCardButton: {
    padding: 10,
    borderWidth:1,
    borderColor:'#008B92',
    borderRadius: 25,
    margin: 10,
  },
  mapCardButtonText: {
    color: "#008B92",
    textAlign: "center",
  },
});
