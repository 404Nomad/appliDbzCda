import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'

const StorageService = () => {
    const {getItem, setItem, removeItem} = useAsyncStorage('@dbz_combats') // utiliser le hook useAsyncStorage et ajouter notre clef 

    const getStorage = async () => {
        try {
            const value = await getItem();
            if (value !==  null ) {
                return JSON.parse(value);
            }
        } catch (e) {
            console.error("Error getting data from storage", e);
        }
    };

    const setStorage = async (value: any) => {
        try {
            setItem(JSON.stringify(value));
        } catch (e) {
            console.error("Error setting data to storage", e);
        }
    };

    const removeItemStorage = async () => {
        try {
            await removeItem();
        } catch (e) {
            console.error("Error removing data from storage", e);
        }
    };
}

export default StorageService