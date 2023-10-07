'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    my2: {
        marginVertical: 10
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userSide:{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    }
});