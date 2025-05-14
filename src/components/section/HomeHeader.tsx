import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ORANGE } from '../../constants/colorConstants'

// add React.FC to the component for better type checking
const HomeHeader: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/ball.png')} />
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.titleLogo}
                        source={require('../../assets/images/logo.png')} />
                    <Text style={styles.subTitle}>Personnages Légendaires</Text>
                </View>
            </View>
            <View style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#010101',
        paddingTop: 20, // padding for the status bar
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
        borderWidth: 2,
        borderColor: '#FF6b6b',
    },
    titleLogo: {
        width: '100%',
        height: 50,
        resizeMode: 'contain',
    },
    subTitle: {
        fontSize: 14,
        marginTop: 4,
        textAlign: 'center',
        color: ORANGE,
    },
    divider: {
        height: 7,
        backgroundColor: ORANGE,
        marginTop: 16,
    }
})

export default HomeHeader