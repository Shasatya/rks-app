import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios"; // Import Axios for making HTTP requests

const EnterDetails = () => {
  const [fullName, setFullName] = useState("");
  const handleSubmission = async () => {
    axios
      .post("http://10.0.2.2:4000/createUser", { fullName })
      .then((response) => {
        console.log("Transfered from Front End");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>You are nearly {"\n"} there</Text>
      <View style={[styles.nameInputContainer, styles.inputShadowProp]}>
        <TextInput
          style={styles.nameInput}
          placeholder="Enter your full name"
          textAlign="center"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmission}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* {fullName && (
        <View style={styles.createdUserContainer}>
          <Text style={styles.createdUserText}>User Created:</Text>
          <Text>{`Full Name: ${fullName}`}</Text>
       
        </View>
      )} */}
    </SafeAreaView>
  );
};

export default EnterDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  headingText: {
    top: 200,
    fontFamily: "serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 35,
    color: "#86060A",
    paddingHorizontal: 70,
  },
  nameInputContainer: {
    top: 240,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  nameInput: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "serif",
    width: 260,
    height: 55,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
  },
  inputShadowProp: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  submitBtn: {
    width: 120,
    height: 45,
    backgroundColor: "#E27A63",
    borderRadius: 10,
  },
  submitText: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "serif",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
    color: "#fff",
  },
});
