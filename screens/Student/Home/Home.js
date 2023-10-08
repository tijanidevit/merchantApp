import React from "react";
import { Image, View } from "react-native";
import {
  Avatar,
  Card,
  Paragraph,
  Text,
  Title,
  Button,
} from "react-native-paper";
const s = require("./HomeStyle");
const gs = require("../../../style");
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView style={gs.container}>
      {/* <Card style={gs.bgTransparent}>
        <Card.Content style={s.header}>
          <View style={s.userSide}>
            <Avatar.Image
              size={35}
              source={require("../../../assets/user.png")}
            />
            <Text variant="bodyLarge" style={gs.strong}>
              Hi, James
            </Text>
          </View>

          <Card.Actions>
            <Button
              icon="logout"
              mode="text"
              onPress={() => console.log("Pressed")}
            ></Button>
          </Card.Actions>
        </Card.Content>
      </Card> */}

      <Card style={[gs.my2, gs.bgSecondary]}>
        <Card.Content style={[gs.flex, gs.flexRow]}>
          <View>
            <Text
              variant="headlineMedium"
              style={[gs.bold, gs.mb0x5, gs.textPrimary]}
            >
              Hi, Jacki
            </Text>
            <Text style={[gs.textGrey]} variant="bodyLarge">
              {"Welcome back"}
            </Text>

            <View style={[gs.flex, gs.flexRow, gs.my2]}>
              <Avatar.Image
                style={gs.mr1x5}
                size={45}
                source={require("../../../assets/user.png")}
              />

              <View>
                <Text style={gs.textGrey} variant="bodyLarge">
                  {" "}
                  {"Total Balance"}
                </Text>
                <View>
                  <Text
                    variant="headlineSmall"
                    style={[gs.bold, gs.textPrimary]}
                  >
                    NGN 2,000.00
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Image
              style={{ width: "10%", height: "10%" }}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/005/697/437/non_2x/3d-money-holding-wallet-with-financial-security-dollar-coin-on-isolated-background-online-payment-and-money-saving-concept-3d-holding-wallet-secure-render-for-business-finance-investment-vector.jpg",
              }}
            />
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};
