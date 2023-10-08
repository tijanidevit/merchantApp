"use strict";
import { StyleSheet } from "react-native";
import { primaryColour, secondaryColour } from "./src/utils/constants";

module.exports = StyleSheet.create({
  my2: {
    marginVertical: 15,
  },
  mb1: {
    marginBottom: 7.5,
  },
  mb0x5: {
    marginBottom: 4.5,
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

  textGrey: {
    color: "grey",
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

  mr1x5: {
    marginRight: 10.75,
  },

  textPrimary: {
    color: primaryColour,
  },

  textSecondary: {
    color: secondaryColour,
  },

  bgPrimary: {
    backgroundColor: primaryColour,
  },

  bgSecondary: {
    backgroundColor: secondaryColour,
  },

  border15: {
    borderRadius: "15%",
  },
});
