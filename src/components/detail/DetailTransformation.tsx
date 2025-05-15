import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Transformation } from '../../types/character'

interface DetailTransformationProps {
    transformations: Transformation[]
};

const DetailTransformation: React.FC<DetailTransformationProps> = ({ transformations }) => {

    if (!transformations || transformations.length === 0) return null

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Transformations</Text>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.transformationContainer}
            >
                {transformations && transformations.map(transformations => (
                    <Text>{transformations?.name}</Text>
                ))}
                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12
    },
    transformationContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    }

});

export default DetailTransformation