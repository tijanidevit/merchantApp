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
    },
    main:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100%'
    },
    
    walletArea: {
        height: '40%'
    },

    walletImg: {
        height: '100%',
        width: '100%'
    }
    
});