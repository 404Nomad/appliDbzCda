import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchPlanet} from '../store/characters/characterSlice';
import Loading from '../components/ui/Loading';
import HomeHeader from '../components/section/HomeHeader';
import Pagination from '../components/section/Pagination';
import PlanetCard from '../components/ui/PlanetCard';

const Planet = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const loadPlanet = () => {
    dispatch(fetchPlanet(currentPage, 10));
  };

  useEffect(() => {
    loadPlanet();
  }, [dispatch, currentPage]);

  const {planet, loading, error} = useSelector(
    (state: RootState) => state.Characters,
  );
  console.log(planet);

  const handleRefresh = () => {
    setRefreshing(true);
    loadPlanet();
    setRefreshing(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //on traite le cas du chargement des données
  if (loading && !planet) {
    return <Loading message={'Chargement des planetes...'} />;
  }

  //on traite le cas d'erreur
  if (error && !planet) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error</Text>
        <Text style={styles.retryText} onPress={loadPlanet}>
          Appuyer pour réessayer
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <FlatList
        data={planet?.items || []}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <PlanetCard planet={item} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#FF6B6B']}
            tintColor={'#FF6B6B'}
          />
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {planet?.meta && (
        <Pagination
          currentPage={planet.meta.currentPage}
          totalPages={planet.meta.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryText: {
    fontSize: 16,
    color: '#5D5FEF',
    fontWeight: 'bold',
    padding: 8,
  },
  listContent: {
    paddingVertical: 12,
    paddingBottom: 80,
  },
});

export default Planet;