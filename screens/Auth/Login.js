import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native";
import {
  Paragraph,
  Button,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import { Text } from "react-native-paper";
const s = require("./AuthStyle");
const gs = require("../../style");
import { SafeAreaView } from "react-native-safe-area-context";
import WalletImg from "../../assets/img/wallet.jpg";
import { useForm } from "react-hook-form";
import { Alert, FormGroup, Input } from "../../components";
import { LoginSchema } from "../../src";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../src/hooks/auth/UseLogin";

export const Login = ({ navigation }) => {
  const { mutate, isLoading, isError, error } = useLogin();
  const {
    control,
    handleSubmit,
    watch,
    mode: onChangeText,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <SafeAreaView>
      <View style={s.main}>
        {isError && <Alert message={error.message} show={true} />}

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
            <FormGroup>
              <Input
                label="Email address"
                placeholder="me@wallet.com"
                control={control}
                name="email"
                icon="email"
                keyboardType="email-address"
              />
            </FormGroup>

            <FormGroup>
              <Input
                label="Password"
                placeholder="******"
                control={control}
                icon="lock-clock"
                name="password"
                secureTextEntry={true}
                onPress={() => console.log("pressed", "pressed")}
              />
            </FormGroup>
            <View style={gs.my2}>
              {isLoading && <ActivityIndicator color={MD2Colors.red800} />}
              <Button
                style={gs.btn}
                mode="contained"
                onPress={handleSubmit(onSubmit)}
              >
                Login
              </Button>
            </View>

            <View style={[gs.formGroup, gs.flex, gs.flexRow, gs.justifyCenter]}>
              <Paragraph variant="bodyLarge">New here? </Paragraph>
              <TouchableOpacity
                mode="text"
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={gs.textPrimary} variant="bodyLarge">
                  Register here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
