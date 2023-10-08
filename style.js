"use strict";
import { StyleSheet } from "react-native";
import { primaryColour } from "./src/utils/constants";

module.exports = StyleSheet.create({
  my2: {
    marginVertical: 15,
  },

  strong: {
    fontWeight: 400,
  },

  container: {
    // marginHorizontal: 10
  },

  bgTransparent: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 0,
    borderColor: "transparent",
    elevation: 0,
  },

  container: {
    marginHorizontal: 20,
  },

  bold: {
    fontWeight: "bold",
  },

  formGroup: {
    marginVertical: 5,
  },

  btn: {
    paddingVertical: 10,
    borderRadius: 5,
  },

  flex: {
    display: "flex",
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  justifyCenter: {
    justifyContent: "center",
  },

  textCenter: {
    textAlign: "center",
  },

  ml1: {
    marginLeft: 7.5,
  },

  mr1: {
    marginRight: 7.5,
  },

  textPrimary: {
    color: primaryColour,
  },
});
