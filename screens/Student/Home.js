import React from 'react'
import { Avatar, Card, Paragraph, Text, Title } from 'react-native-paper'
// const s = require('../../style');
import 'bootstrap/dist/css/bootstrap.css';

export const Home = () => {
    return (
        <>
            <Card style={my2}>
                <Card.Content>
                    <Avatar.Image size={32} source={require('../../assets/user.png')} />
                    <Text>Hi, James</Text>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Title>{'title'}</Title>
                    <Paragraph>{'dhehehddd'}</Paragraph>
                </Card.Content>
            </Card>
        </>
    )
}
