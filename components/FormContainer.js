import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.placeList}>
      <View style={styles.foodLogCard}>
        <View style={[styles.imageParent, styles.parentFlexBox]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <View style={styles.titleLocationFlexoParent}>
            <Text style={styles.titleLocationFlexo}>{`A Pasta Special Hot
sausce`}</Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-518.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.componentsvgIcon}
                  contentFit="cover"
                  source={require("../assets/3160163-componentsvg.png")}
                />
                <Text style={[styles.calories, styles.kalTypo]}>138 Kal</Text>
              </View>
              <View style={[styles.componentsvgGroup, styles.parentFlexBox]}>
                <Image
                  style={styles.componentsvgIcon}
                  contentFit="cover"
                  source={require("../assets/3160163-componentsvg1.png")}
                />
                <Text style={[styles.kal, styles.kalTypo]}>138 Macro</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  kalTypo: {
    marginLeft: 5,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    height: 21,
    textAlign: "left",
    color: Color.colorWhite,
  },
  imageIcon: {
    borderRadius: Border.br_mini,
    width: 90,
    height: 95,
  },
  titleLocationFlexo: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 240,
    height: 54,
    textAlign: "left",
    color: Color.colorWhite,
  },
  frameChild: {
    width: 242,
    height: 2,
    marginTop: 10,
  },
  componentsvgIcon: {
    width: 14,
    height: 15,
  },
  calories: {
    width: 49,
  },
  kal: {
    width: 71,
  },
  componentsvgGroup: {
    marginLeft: 20,
  },
  frameParent: {
    height: 21,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleLocationFlexoParent: {
    width: 241,
    marginLeft: 20,
  },
  imageParent: {
    height: 95,
  },
  foodLogCard: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslategray,
    width: 380,
    height: 115,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    justifyContent: "center",
  },
  placeList: {
    width: 428,
    height: 140,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
  },
});

export default FormContainer;
