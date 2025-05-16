import { View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Character } from '../../types/character'

interface FightResultProps {
    character1: Character | null
    character2: Character | null
}

const FightResult: React.FC<FightResultProps> = ({ character1, character2 }) => {
    const [result, setResult] = useState<string | null>(null);
    const anim1 = new Animated.Value(0);
    const anim2 = new Animated.Value(0);

    const screenWidth = Dimensions.get('window').width;

    const simulFirstFight = () => {
        const ki1 = character1?.ki ?? 0;
        const ki2 = character2?.ki ?? 0;
        if (ki1 > ki2) {
            setResult(`${character1?.name} wins!`);
        } else if (ki2 > ki1) {
            setResult(`${character2?.name} wins!`);
        } else {
            setResult('Égalité !');
        }
    }

    useEffect(() => {
        anim1.setValue(0);
        anim2.setValue(0);
        setResult(null);

        Animated.parallel([
            Animated.timing(anim1, {
                toValue: (screenWidth / 2) - 100, // 100 = image width
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(anim2, {
                toValue: -((screenWidth / 2) - 100),
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setTimeout(() => {
                simulFirstFight();
            }, 800);
        });
    }, [character1, character2]);

    return (
        <View>
            <View style={styles.effectContainer}>
                <Animated.View style={{ transform: [{ translateX: anim1 }] }}>
                    <Image 
                        source={{ uri: character1?.image }} 
                        style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    />
                </Animated.View>
                <Animated.View style={{ transform: [{ translateX: anim2 }] }}>
                    <Image 
                        source={{ uri: character2?.image }} 
                        style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    />
                </Animated.View>
            </View>
            <Text style={styles.result}>{result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    effectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    result: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginTop: 24,
        textAlign: 'center',
    },
})

export default FightResult