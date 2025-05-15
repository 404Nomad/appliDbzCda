import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Character } from '../../types/character'

interface DetailStatsProps {
    character: Character | null;
}

const DetailStats: React.FC<DetailStatsProps> = ({character}) => {

    const {width } = Dimensions.get('window'); // recuperer la largeur de l'ecran

    console.log("width", width); // afficher la largeur de l'ecran dans la console


  return (
    <View style={styles.statsContainer}>
    </View>
  )
}

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },

})

export default DetailStats