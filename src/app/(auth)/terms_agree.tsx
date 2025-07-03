import BottomCom from "@/src/component/atmos/BottomCom";
import ImagesPath from "@/src/constant/ImagesPath";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image
          source={ImagesPath.welcome}
          style={styles.image_style}
          resizeMode="contain"
        />
        <Text style={styles.description_text}>
          Read our <Text style={styles.link_text}> Privacy Policy.</Text> tap
          "Agree and continue" to accept the{" "}
          <Text style={styles.link_text}>Teams of Service.</Text>
        </Text>
        <View style={{ width: moderateScale(300) }}>
          <BottomCom title="AGREE AND CONTINUE" onPress={onAgree}></BottomCom>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: verticalScale(84),
    // paddingHorizontal: scale(30),
  },
  header: {
    // flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    gap: verticalScale(30),
  },
  footer: {
    // flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#00000",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  welcome_text: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black",
    marginBottom: verticalScale(10),
  },
  image_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  description_text: {
    textAlign: "center",
    // fontSize: moderateScale(10),
    color: "black",
  },
  link_text: {
    color: "#0C42CC",
  },
});
export default TermsAgree;
