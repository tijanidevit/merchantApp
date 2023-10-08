import { View } from "react-native";
const gs = require("../../style");

export const FormGroup = ({ children }) => {
  return <View style={gs.formGroup}>{children}</View>;
};
