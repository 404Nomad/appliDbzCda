import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { fetchCharacters } from '../store/characters/characterSlice'
import { RootState } from '../store/store'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = React.useState(1); // State to manage the current page, 1 by default

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