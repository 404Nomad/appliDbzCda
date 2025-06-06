import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackParamList } from '../navigations/MainNavigation'
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterByRace, fetchCharacterDetail } from '../store/characters/characterSlice';
import Loading from '../components/ui/Loading';
import DetailHeader from '../components/detail/DetailHeader';
import DetailStats from '../components/detail/DetailStats';
import DetailPlanet from '../components/detail/DetailPlanet';
import DetailTransformation from '../components/detail/DetailTransformation';
import DetailBiographie from '../components/detail/DetailBiographie';
import DetailRace from '../components/detail/DetailRace';

// creer type 
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail = () => {
  const route = useRoute<DetailScreenRouteProp>(); // recuperer les parametres de la route

  const { characterId } = route.params; // recuperer le parametre de la route
  console.log("characterId", characterId); // afficher l'id du personnage dans la console

  const dispatch = useDispatch<AppDispatch>(); // recuperer le dispatch

  const {characterDetail,CharacterByRace, loading, error} = useSelector((state: RootState) => state.Characters);

  useEffect ( () => {
    dispatch(fetchCharacterDetail(characterId));
  }, [dispatch, characterId]); // on passe le dispatch et l'id du personnage en dependance

  //on récupère les personnages du meme genre
  useEffect(() => {
    if(characterDetail && characterDetail.race){
      dispatch(fetchCharacterByRace(characterDetail.race));
    }
  }, [dispatch, characterDetail]);

  // on gere le chargement de la page
  if (loading) {
    return <Loading message='Chargement des détails du personnage...'/> // on affiche le loading
  }

  // on gere le cas d'erreur
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorContainer}>{error}</Text> // on affiche l'erreur
      </View>
    )
  }


  console.log("characterDetail", characterDetail); // afficher le personnage detail dans la console

  return (
  <ScrollView style={styles.container}>
    {characterDetail && (
      <DetailHeader character={characterDetail} />
    )}

      <View style={styles.content}>

        <DetailStats character ={characterDetail} />
        { characterDetail?.originPlanet && (
          <DetailPlanet planet={characterDetail?.originPlanet}/>
        )}

        {characterDetail?.transformations && (
          <DetailTransformation transformations={characterDetail?.transformations}/>
        )}

        <DetailBiographie description={characterDetail?.description}/>

        {CharacterByRace && CharacterByRace.length > 0 && (
          <DetailRace characters={CharacterByRace} />
        )}

      </View>

  </ScrollView>
  )
}

const styles = StyleSheet.create( {
    errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#ff6B6B',
    textAlign: 'center',
    marginBottom: 16,
  },
  container: {
    flex:1,
    backgroundColor: '#FFF',
  },
  content: {
    padding: 16,
  },
} );

export default Detail
