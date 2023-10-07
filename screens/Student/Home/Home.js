import React from 'react'
import { View } from 'react-native';
import { Avatar, Card, Paragraph, Text, Title, Button } from 'react-native-paper'
const s = require('./HomeStyle');
const gs = require('../../../style');
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
    return (
        <SafeAreaView>
            <Card style={gs.bgTransparent}>
                <Card.Content style={s.header}>
                    <View style={s.userSide}>
                        <Avatar.Image size={35} source={require('../../../assets/user.png')} />
                        <Text variant="bodyLarge" style={gs.strong}>Hi, James</Text>
                    </View>

                    <Card.Actions>
                        <Button icon="logout" mode="text" onPress={() => console.log('Pressed')}></Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
            <Card style={[s.my2,gs.container]}>
                <Card.Content>
                    <Title>{'title'}</Title>
                    <Paragraph>{'dhehehddd'}</Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}
