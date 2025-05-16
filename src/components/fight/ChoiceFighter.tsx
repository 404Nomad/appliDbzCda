import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    StatusBar,
    FlatList,
    Image,
} from 'react-native';
import React, { use, useEffect, useState } from 'react';
import { Character } from '../../types/character';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchChoiceCharacterDetail } from '../../store/characters/characterSlice';
// import RootState from your store definition
import { RootState } from '../../store/store';

interface ChoiceFighterProps {
    characters: Character[];
}

const ChoiceFighter: React.FC<ChoiceFighterProps> = ({ characters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [character1, setCharacter1] = useState<Character | null>(null);
    const [character2, setCharacter2] = useState<Character | null>(null);
    const [typeCharacter, setTypeCharacter] = useState(0);
    console.log('character1', character1);
    console.log('character2', character2);
    const dispatch = useDispatch<AppDispatch>();

    const { characterDetail1, characterDetail2, loading } = useSelector((state: RootState) => state.Characters);

    useEffect(() => {
    }, [dispatch, typeCharacter, isOpen, character1, character2]);

    useEffect(() => {
        if (characterDetail1 && !loading) {
            setCharacter1(characterDetail1);
        }
        if (characterDetail2 && !loading) {
            setCharacter2(characterDetail2);
        }
    }, [characterDetail1, characterDetail2, loading, typeCharacter]);


    const openModal = (typeCharacter: number) => {
        setIsOpen(true);
        setTypeCharacter(typeCharacter);
    };

    const choiceCharacter = async (id: number) => {
        try {
            dispatch(fetchChoiceCharacterDetail(id, typeCharacter));
            setIsOpen(true);
        } catch (error) {
            console.log('error', error);
        }
        setIsOpen(false);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => openModal(1)}>
                <Text style={styles.buttonText}>{character1?.name || 'Joueur 1'}</Text>
            </TouchableOpacity>
            <Text style={styles.vs}>VS</Text>
            <TouchableOpacity style={styles.button} onPress={() => openModal(2)}>
                <Text style={styles.buttonText}>{character2?.name || 'Joueur 2'}</Text>
            </TouchableOpacity>

            <Modal
                visible={isOpen}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsOpen(false)}>
                <SafeAreaView style={styles.modalContainer}>
                    <StatusBar hidden />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setIsOpen(false)}>
                        <Icon name="close-circle" size={32} color="#fff" />
                    </TouchableOpacity>
                    {/* affichage de tous les personnages */}
                    <View style={styles.modalList}>
                        <FlatList
                            data={characters || []}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => {
                                const nameTruncate =
                                    item?.name.length > 10
                                        ? item?.name.substring(0, 10) + '...'
                                        : item?.name;
                                return (
                                    <TouchableOpacity
                                        style={styles.containerList}
                                        onPress={() => {
                                            choiceCharacter(item?.id);
                                        }}>
                                        <Image source={{ uri: item?.image }} style={styles.image} />
                                        <Text style={styles.text}>{nameTruncate}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                            numColumns={3}
                        />
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fefefe',
    },
    button: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    vs: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 5,
        elevation: 5,
    },
    modalList: {},
    containerList: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: 85,
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
export default ChoiceFighter;