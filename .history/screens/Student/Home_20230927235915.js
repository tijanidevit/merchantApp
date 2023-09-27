import React from 'react'
import { View, Text } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

export const Home = () => {
    return (
        <Card>
            <Card.Content>
                <Title>{'title'}</Title>
                <Paragraph>{content}</Paragraph>
            </Card.Content>
        </Card>
    )
}
