import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const RecepieAndMeals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recepieAndMeals}>
      <Text style={[styles.recepieAndMeals1, styles.viewAllTypo]}>
        Recepie and meals
      </Text>
      <View style={[styles.iphoneX, styles.iphonePosition]}>
        <View style={styles.iphoneLayout}>
          <View
            style={[styles.iphoneXstatusBarsstatusBa1, styles.iphoneLayout]}
          >
            <View style={styles.rectangle} />
            <View style={styles.battery}>
              <View style={styles.border} />
              <Image
                style={styles.capIcon}
                contentFit="cover"
                source={require("../assets/cap.png")}
              />
              <View style={styles.capacity} />
            </View>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              contentFit="cover"
              source={require("../assets/cellular-connection.png")}
            />
            <View style={[styles.timeStyle, styles.timeLayout]}>
              <Text style={[styles.time, styles.timeLayout]}>
                <Text style={styles.text}>9:4</Text>1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification-icon.png")}
      />
      <Image
        style={styles.recepieAndMealsChild}
        contentFit="cover"
        source={require("../assets/group-3506.png")}
      />
      <Pressable
        style={[styles.viewAllWrapper, styles.viewLayout]}
        onPress={() => navigation.navigate("FoodSearch")}
      >
        <Text style={[styles.viewAll, styles.viewLayout]}>View All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewAllTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iphonePosition: {
    left: "50%",
    position: "absolute",
  },
  iphoneLayout: {
    height: 44,
    width: 375,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  viewLayout: {
    width: 44,
    position: "absolute",
  },
  recepieAndMeals1: {
    marginLeft: -117,
    top: 78,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    top: 0,
    height: 11,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorWhite,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  text: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -8,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    left: 0,
    top: "50%",
    color: Color.colorWhite,
  },
  timeStyle: {
    top: 15,
    left: 21,
    height: 17,
    overflow: "hidden",
  },
  iphoneXstatusBarsstatusBa1: {
    marginTop: -22,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  iphoneX: {
    marginLeft: -187,
    top: 10,
  },
  notificationIcon: {
    top: 72,
    left: 357,
    width: 66,
    height: 66,
    position: "absolute",
  },
  recepieAndMealsChild: {
    height: "1.33%",
    width: "5.11%",
    top: "5.61%",
    right: "89.63%",
    bottom: "93.06%",
    left: "5.26%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewAll: {
    fontSize: 10,
    color: Color.primaryColor,
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  viewAllWrapper: {
    top: 218,
    left: 181,
    height: 15,
  },
  recepieAndMeals: {
    borderRadius: 50,
    backgroundColor: Color.colorGray,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 104,
    elevation: 104,
    shadowOpacity: 1,
    flex: 1,
    height: 1520,
    overflow: "hidden",
    width: "100%",
  },
});

export default RecepieAndMeals;
