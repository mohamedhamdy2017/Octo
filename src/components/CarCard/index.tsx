import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {IMAGES} from '../../Images';
import styles from './styles';

export interface ICAR {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  yearOfProduction: string;
  km: string;
  location: string;
}

interface CarCardProps {
  item: ICAR;
}

export const CarCard = ({item}: CarCardProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.content}>
        <Image
          source={{uri: item?.image}}
          style={styles.mainImage}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.production}>
            <View style={styles.year}>
              <Image
                source={IMAGES.calendar}
                style={styles.yearImage}
                resizeMode="contain"
              />
              <Text>{item.yearOfProduction}</Text>
            </View>
            <View style={styles.meter}>
              <Image
                source={IMAGES.odometer}
                style={styles.yearImage}
                resizeMode="contain"
              />
              <Text>{item.km}</Text>
            </View>
            <View style={styles.meter}>
              <Image
                source={IMAGES.location}
                style={styles.yearImage}
                resizeMode="contain"
              />
              <Text>{item.location}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Image
          source={IMAGES.carswitch}
          style={styles.bottomLogo}
          resizeMode="cover"
        />
        <Image
          source={IMAGES.stars}
          style={styles.stars}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
