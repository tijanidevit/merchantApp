import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaViewComponent } from 'react-native';
export const Home = () => {
    return (
        <SafeAreaViewComponent>
            <Card>
                <Card.Content>
                    <Title>{'title'}</Title>
                    <Paragraph>{'dhehehddd'}</Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaViewComponent>
    )
}
