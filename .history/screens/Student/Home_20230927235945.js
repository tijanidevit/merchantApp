import React from 'react'
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
