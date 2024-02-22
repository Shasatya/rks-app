import React, { useState } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const home = () => {
  const [filter, setFilter] = useState("");
  var radio_props = [
    { label: "500 ", value: 0 },
    { label: "500 -1000", value: 1 },
    { label: "1000+", value: 2 },
  ];
  // const onPress = () => {
  //   console.log("pressed");
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeHeader}>
        <MaterialIcons
          name="menu"
          size={24}
          color="black"
          onPress={() => {
            console.log("Hello");
          }}
        />
        <FontAwesome name="user-circle-o" size={24} color="#E27A63" />
      </View>

      {/* <View style={styles.filterBtnsContainer}>
        <Text style={styles.filterBtnsText}>Filter Designs </Text>
        <RadioForm formHorizontal={true} animation={true} style={{ left: 10 }}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={filter === i}
                onPress={(value) => setFilter(value)}
                borderWidth={2}
                buttonInnerColor={"#e74c3c"}
                buttonOuterColor={filter === i ? "#86060A" : "#808080"}
                buttonSize={10}
                buttonOuterSize={20}
                buttonStyle={{}}
                buttonWrapStyle={{ marginLeft: 20 }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={(value) => setFilter(value)}
                labelStyle={{
                  fontSize: 15,
                  color: filter === i ? "#86060A" : "#808080",
                }}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View> */}

      <View style={styles.homeCardContainer}>
        <Pressable style={styles.homeCard}>
          <Image
            style={styles.homeCardImg}
            source={require("../../assets/icons/logo.png")}
          />
          <Text>800</Text>
        </Pressable>
        <Pressable style={styles.homeCard}>
          <Image
            style={styles.homeCardImg}
            source={require("../../assets/icons/logo.png")}
          />
          <Text>800-1000</Text>
        </Pressable>
        <Pressable style={styles.homeCard}>
          <Image
            style={styles.homeCardImg}
            source={require("../../assets/icons/logo.png")}
          />
          <Text>1000-1200</Text>
        </Pressable>
        <Pressable style={styles.homeCard}>
          <Image
            style={styles.homeCardImg}
            source={require("../../assets/icons/logo.png")}
          />
          <Text>1200-1400</Text>
        </Pressable>
        <Pressable style={styles.homeCard}>
          <Image
            style={styles.homeCardImg}
            source={require("../../assets/icons/logo.png")}
          />
          <Text>1400-1600</Text>
        </Pressable>
        <Pressable style={styles.homeCard}>
          <Image
            style={styles.homeCardImg}
            source={require("../../assets/icons/logo.png")}
          />
          <Text>1600+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  homeHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  filterBtnsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    top: 20,
  },
  filterBtnsText: {
    fontFamily: "serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 35,
    color: "#86060A",
    left: 30,
  },
  homeCardContainer: {
    top: 100,
    width: 240,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  },
  homeCard: {
    flexBasis: "42%",
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  homeCardImg: {
    height: 30,
    width: 30,
  },
});
