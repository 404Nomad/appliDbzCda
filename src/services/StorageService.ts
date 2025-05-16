import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'

const StorageService = () => {
    const {getItem, setItem, removeItem} = useAsyncStorage('@dbz_combats')
}

export default StorageService