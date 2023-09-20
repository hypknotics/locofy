import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.frame}>
        <Pressable
          style={styles.menu}
          onPress={() => navigation.navigate("RecepieAndMeals")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menu.png")}
          />
        </Pressable>
        <View style={styles.textParent}>
          <Text style={styles.text}>Breakfast</Text>
          <Image
            style={styles.arrowRightIcon}
            contentFit="cover"
            source={require("../assets/arrow-right.png")}
          />
        </View>
      </View>
      <TextInput
        style={styles.frame1}
        mode="outlined"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        theme={{
          fonts: { regular: { fontFamily: "Poppins", fontWeight: "Regular" } },
          colors: { text: "rgba(255, 255, 255, 0.5)" },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  menu: {
    position: "relative",
    width: 40,
    height: 40,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.primaryColor,
    textAlign: "center",
  },
  arrowRightIcon: {
    position: "relative",
    width: 14,
    height: 8,
    marginLeft: 16,
  },
  textParent: {
    width: 147,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 90,
  },
  frame: {
    width: 277,
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame1: {
    borderRadius: Border.br_11xl,
    width: 380,
    height: 50,
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: Padding.p_5xl,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 14,
    marginTop: 10,
  },
  header: {
    backgroundColor: Color.colorGray,
    width: 428,
    height: 160,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_11xl,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FormHeader;
