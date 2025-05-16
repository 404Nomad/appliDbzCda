import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeHeader from '../components/section/HomeHeader'
import ChoiceFighter from '../components/fight/ChoiceFighter'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { fetchCharacters } from '../store/characters/characterSlice'

const Fight = () => {

    const dispatch = useDispatch<AppDispatch>(); // on recupere le hook dispatch

    // on recupere les personnages
    const loadCharacters = () => {
        dispatch(fetchCharacters(1, 100)); // Fetch characters when the component mounts
    };

    // 
    useEffect(() => {
        loadCharacters(); // Load characters when the component mounts
    }, [dispatch]);

    const { characters, loading, error } = useSelector((state: RootState) => state.Characters,);

    console.log('characters', characters);

    return (
        <View>
            <HomeHeader />
            <ChoiceFighter characters={characters?.items ?? []}/>
        </View>
    )
}

export default Fight