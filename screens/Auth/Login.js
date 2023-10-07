import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Paragraph, Button, TextInput } from "react-native-paper";
import { Text } from "react-native-paper";
const s = require("./AuthStyle");
const gs = require("../../style");
import { SafeAreaView } from "react-native-safe-area-context";
import WalletImg from "../../assets/img/wallet.jpg";

export const Login = () => {
  return (
    <SafeAreaView>
      <View style={s.main}>
        <View style={s.walletArea}>
          <Image
            style={s.walletImg}
            source={WalletImg}
            width={10}
            height={10}
          />
        </View>

        <View style={gs.container}>
          <Text variant="headlineLarge" style={gs.bold}>
            Login
          </Text>

          <View style={gs.my2}>
            <View style={gs.formGroup}>
              <TextInput
                mode="outlined"
                label="Email address"
                placeholder="me@wallet.com"
                right={<TextInput.Icon icon="email" />}
              />
              <View />

              <View style={gs.formGroup}>
                <TextInput
                  mode="outlined"
                  label="Password"
                  placeholder="******"
                  right={<TextInput.Icon icon="eye" />}
                />
                <View />
                <View style={gs.my2}>
                  <Button
                    style={gs.btn}
                    mode="contained"
                    onPress={() => console.log("Pressed")}
                  >
                    Login
                  </Button>
                </View>

                <View
                  style={[gs.formGroup, gs.flex, gs.flexRow, gs.justifyCenter]}
                >
                  <Paragraph style={gs.mr1} variant="bodyLarge">
                    New here?{" "}
                  </Paragraph>
                  <TouchableOpacity mode="text">
                    <Text variant="bodyLarge">Register here</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
