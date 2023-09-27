import React from 'react'
import { Avatar, Card, Paragraph, Title } from 'react-native-paper'

export const Home = () => {
    return (
        <>
            <Card>
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
