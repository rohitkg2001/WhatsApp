import imagePath from "@/src/constant/ImagesPath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome = () => {
    router.push("/(auth)/terms_agree");
  };

  let loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 3000);
  };

  useEffect(() => {
    const timeout = setTimeout(loading_timeout, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Auth</Text>
      <Link href={"/login"}> Login</Link> */}

      <View style={styles.header}></View>

      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_styel}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {
    // height: verticalScale(30),
  },
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000",
  },
  logo_styel: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: "#000000",
    fontWeight: "bold",
  },
  loading_text: {
    fontSize: moderateScale(20),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(15),
  },
});

export default Auth;
