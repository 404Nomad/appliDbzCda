import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Character} from '../../types/character';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ChoiceFighterProps {
  characters: Character[];
}

const ChoiceFighter: React.FC<ChoiceFighterProps> = ({characters}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);
  const [typeCharacter, setTypeCharacter] = useState(1);

  const openModal = (typeCharacter: number) => {
    setIsOpen(true);
    setTypeCharacter(typeCharacter);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => openModal(1)}>
        <Text style={styles.buttonText}>Joueur 1</Text>
      </TouchableOpacity>
      <Text style={styles.vs}>VS</Text>
      <TouchableOpacity style={styles.button} onPress={() => openModal(2)}>
        <Text style={styles.buttonText}>Joueur 2</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}>
        <SafeAreaView style={styles.modalContainer}>
          <StatusBar hidden />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsOpen(false)}>
            <Icon name="close-circle" size={32} color="#fff" />
          </TouchableOpacity>
          {/* affichage de tous les personnages */}
          <View style={styles.modalList}>
            <FlatList
              data={characters || []}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                const nameTruncate =
                  item?.name.length > 10
                    ? item?.name.substring(0, 10) + '...'
                    : item?.name;
                return (
                  <TouchableOpacity
                    style={styles.containerList}
                    onPress={() => {
                      console.log('toto');
                    }}>
                    <Image source={{uri: item?.image}} style={styles.image} />
                    <Text style={styles.text}>{nameTruncate}</Text>
                  </TouchableOpacity>
                );
              }}
              numColumns={3}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fefefe',
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vs: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
  modalList: {},
  containerList:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: 85,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default ChoiceFighter;