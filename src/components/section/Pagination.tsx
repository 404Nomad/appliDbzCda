import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

interface PaginationProps { 
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
} 

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style= {[styles.pageButton, styles.edgeButton, currentPage === 1 && styles.disableButton]}
            onPress={ () => { onPageChange(1)} }
            disabled={currentPage === 1}
        >
            <Text style={styles.buttonText}>Premier</Text>

        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    pageButton: {
        backgroundColor: '#FF6b6b',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginHorizontal: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity : 0.1,
        shadowRadius: 2,
    },
    edgeButton: {
        backgroundColor: '#5D5FEF',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
    },
    disableButton: {
        backgroundColor: '#ccc',
        elevation: 0,
    }
});



export default Pagination