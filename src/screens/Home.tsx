import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { fetchCharacters } from '../store/characters/characterSlice'
import { RootState } from '../store/store'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>(); // on recupere le hook dispatch
  const navigate = useNavigation(); // on recupere le hook de navigation

  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page, 1 by default

  useEffect(() => {
    // This effect will run when the component mounts
  
    return () => {
      // This cleanup function will run when the component unmounts
      // You can perform any necessary cleanup here
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts
  

  useEffect(() => {
    dispatch(fetchCharacters(currentPage, 10)); // Fetch characters when the component mounts, page 1 et limit 10
  }, [dispatch, currentPage]); // si currentpage change, on refait la requete

  const { characters, loading, error } = useSelector(
    (state: RootState) => state.Characters,
  );

  console.log('characters', characters);

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home