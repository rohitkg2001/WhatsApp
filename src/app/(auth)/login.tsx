import BottomCom from "@/src/component/atmos/BottomCom";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+ 91");
  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter Your phone number</Text>
          <Text style={styles.description}>
            {" "}
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}> What's my number? </Text>
          </Text>
        </View>

        <View style={styles.input_main_container}>
          <View style={styles.dropdown_wrapper}>
            <TouchableOpacity
              style={styles.dropdown_container}
              onPress={() => setVisible(true)}
            >
              <View />
              <Text style={styles.dropdown_title}>{countryName}</Text>
              <AntDesign
                name="caretdown"
                size={moderateScale(14)}
                color="black"
              />
            </TouchableOpacity>
            <View style={styles.horizontal_line} />
          </View>

          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line_small} />
            </View>
            <View style={styles.input_wrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
              />
              <View style={styles.horizontal_line_small} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <BottomCom
          title="Next"
          style={{ paddingHorizontal: scale(29) }}
          onPress={onNextButtonClick}
        />
      </View>
      {visible && (
        <CountryPicker
          visible={true}
          withFilter
          withFlag
          withCallingCode
          withCountryNameButton
          withAlphaFilter
          onClose={() => setVisible(false)}
          onSelect={(e: any) => {
            setCountryCode("+" + e.callingCode[0] + " ");
            setCountryName(e.name);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(30),
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container: {
    gap: verticalScale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "black",
  },
  link_description: {
    color: "#002AC0",
  },
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
    marginTop: verticalScale(5),
  },
  horizontal_line_small: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
    marginTop: verticalScale(2),
  },
  dropdown_wrapper: {
    gap: verticalScale(5),
  },
  dropdown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropdown_title: {
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  input_container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: scale(20),
  },
  country_code: {
    width: scale(50),
    gap: verticalScale(5),
    fontWeight: "500",
    color: "black",
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  input_wrapper: {
    flex: 1,
    gap: verticalScale(5),
  },
  input: {
    fontSize: moderateScale(16),
    paddingBottom: verticalScale(5),
  },
});

export default Login;
