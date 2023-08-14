import React, {useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {useHome} from '../../hooks/useHome';
import {CarCard} from '../../components/CarCard';
import {ICAR} from '../../components/CarCard';

const Home = () => {
  const {cars} = useHome();

  const keyExtractor = useCallback(
    (_: ICAR, index: number) => index.toString(),
    [],
  );

  const renderItem = ({item}: {item: ICAR}) => {
    return <CarCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Home;
