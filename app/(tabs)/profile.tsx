import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MasonryList from "@react-native-seoul/masonry-list";
import { Video } from "expo-av";
import { Icon } from "@swmansion/icons";

const data = [
  {
    uri: "https://i.pinimg.com/236x/39/91/6c/39916ca80e4f762a0963cae544a8fe00.jpg",
    type: "image",
  },
  {
    uri: "https://i.pinimg.com/236x/c1/4f/91/c14f914870be1a780cc7b462c987ed20.jpg",
    type: "image",
  },
  {
    uri: "https://i.pinimg.com/236x/d7/4c/2c/d74c2c9a78b1f60815ebcf1065af4d51.jpg",
    type: "image",
  },
  {
    uri: "https://i.pinimg.com/236x/9e/76/09/9e76099e2effb0b77875b2358cbf862c.jpg",
    type: "image",
  },
  {
    uri: "https://i.pinimg.com/236x/c1/4f/91/c14f914870be1a780cc7b462c987ed20.jpg",
    type: "image",
  },
  {
    uri: "https://i.pinimg.com/236x/7f/62/91/7f6291ab0e6e01434169a1fc5628c46a.jpg",
    type: "image",
  },
  // Add more items as needed
];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("post"); // State untuk mengetahui tab yang aktif
  const profileImage = data[0].uri; // Menggunakan foto profil dari data dummy
  const dummyPosts = [
    { uri: "https://picsum.photos/200/300", type: "image" },
    { uri: "https://picsum.photos/300/200", type: "image" },
    { uri: "https://picsum.photos/250/350", type: "image" },
    { uri: "https://picsum.photos/350/250", type: "image" },
    { uri: "https://picsum.photos/275/400", type: "image" },
    { uri: "https://picsum.photos/400/275", type: "image" },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => {
    const randomHeight = Math.random() > 0.5 ? 200 : 300; // Set random heights
    if (item.type === "image") {
      return (
        <TouchableOpacity style={styles.itemContainer}>
          <Image
            source={{ uri: item.uri }}
            style={[styles.image, { height: randomHeight }]}
          />
        </TouchableOpacity>
      );
    } else if (item.type === "video") {
      return (
        <TouchableOpacity style={styles.itemContainer}>
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
    <View style={styles.container}>
      {/* Header Profil */}
      <View style={styles.header}>
        <View style={{alignSelf:'center', flexDirection:'row'}}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:'white', borderRadius:20}}>
            <Icon name="edit-3" type="outline" color="#008B92" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Informasi Profil */}
      <View style={styles.profileInfo}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.userHandle}>@johndoe</Text>
        <View style={styles.followContainer}>
          <Text style={styles.followText}>300 Followers</Text>
          <Text style={styles.followText}>200 Following</Text>
        </View>
      </View>

      {/* Tab Navigator */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "post" && styles.activeTab]}
          onPress={() => setActiveTab("post")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "post" && styles.activeTabText,
            ]}
          >
            Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "saved" && styles.activeTab]}
          onPress={() => setActiveTab("saved")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "saved" && styles.activeTabText,
            ]}
          >
            Saved
          </Text>
        </TouchableOpacity>
      </View>

      {/* Konten Postingan dan Simpanan */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <MasonryList
          data={dummyPosts}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={renderItem}
          onEndReachedThreshold={0.1}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  profileImage: {
    width: 100,
    marginLeft:25,
    height: 100,
    borderRadius: 50,
  },
  editIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#ccc",
    padding: 5,
    borderRadius: 15,
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userHandle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  followContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  followText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#008B92",
  },
  activeTabText: {
    color: "#008B92",
  },
  contentContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileScreen;
