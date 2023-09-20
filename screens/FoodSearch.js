import * as React from "react";
import { StyleSheet, View } from "react-native";
import FormHeader from "../components/FormHeader";
import FormContainer from "../components/FormContainer";
import { Color } from "../GlobalStyles";

const FoodSearch = () => {
  return (
    <View style={styles.foodSearch}>
      <FormHeader />
      <FormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  foodSearch: {
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
    width: "100%",
    height: 926,
    overflow: "hidden",
    paddingBottom: 626,
    alignItems: "center",
  },
});

export default FoodSearch;
