import { StyleSheet } from 'react-native';

export const overlay = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
});

export const toast = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        borderRadius: 14,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
