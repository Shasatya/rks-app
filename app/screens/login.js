import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/logo.png")}
        />
        <View>
          <Text style={styles.logoText}>Where imaginations </Text>
          <Text style={styles.logoText}>come true </Text>
        </View>
      </View>

      <View style={styles.phoneInputContainer}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter your Phone number"
          textAlign="center"
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.sendOtpBtn}>
          <Text style={styles.sendOtpText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    top: 50,
  },
  logo: {
    height: 50,
    width: 80,
  },
  logoText: {
    fontFamily: "serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 35,
    color: "#000",
    textAlign: "center",
  },
  phoneInputContainer: {
    top: 230,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  phoneInput: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "serif",
    width: 260,
    height: 55,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  sendOtpBtn: {
    width: 120,
    height: 45,
    backgroundColor: "#E27A63",
    borderRadius: 10,
  },
  sendOtpText: {
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
