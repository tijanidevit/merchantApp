import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';
export const Home = () => {
    return (
        <StatusBar>
            <Card>
                <Card.Content>
                    <Title>{'title'}</Title>
                    <Paragraph>{'dhehehddd'}</Paragraph>
                </Card.Content>
            </Card>
        </StatusBar>
    )
}
