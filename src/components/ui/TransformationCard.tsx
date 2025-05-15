import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Modal, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Transformation } from '../../types/character'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TransformationCardProps {
    transformation: Transformation
}

const TransformationCard: React.FC<TransformationCardProps> = ({ transformation }) => {

    const [fullScreenImage, SetFullScreenImage] = useState<string | null>(null);
    const { width, height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    console.log('Press');
                    SetFullScreenImage(transformation.image);
                }}
                activeOpacity={0.8}
            >
                <Image
                    source={{ uri: transformation.image }}
                    style={styles.image}
                />

            </TouchableOpacity>
            <Text style={styles.name}>{transformation?.name}</Text>
            <View style={styles.kiContainer}>
                <Text style={styles.kiLabel}>Ki:</Text>
                <Text style={styles.kiValue}>{transformation?.ki}</Text>
            </View>

            {/* Modale pour afficher l'image en plein ecran onPress*/}
            <Modal
                visible={fullScreenImage !== null}
                transparent={true}
                animationType='fade'
                onRequestClose={() => SetFullScreenImage(null)}
            >
                <SafeAreaView style={styles.modalContainer}>
                    <StatusBar hidden />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => SetFullScreenImage(null)}
                    >
                        <Icon name='close-circle' size={32} color={'#fff'} />
                    </TouchableOpacity>
                    <View style={styles.fullScreenContainer}>
                        {fullScreenImage && (
                            <Image
                                source={{ uri: fullScreenImage }}
                                style={{ width: width, height: height * 0.8}}
                                resizeMode='contain'
                            />
                        )}
                    </View>
                </SafeAreaView>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        marginRight: 12,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 8,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 4,
    },
    kiContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    kiLabel: {
        fontSize: 14,
        color: '#666',
        marginRight: 4,
    },
    kiValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FF6b6b',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 5,
        elevation: 5,
    },
    fullScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TransformationCard