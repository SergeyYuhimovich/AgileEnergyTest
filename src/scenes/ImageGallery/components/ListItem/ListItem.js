// Core
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

// Styles
import styles from './styles';

const ListItem = ({ imageId, imageUri, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(imageId)}
    style={styles.listItem}
  >
    <Image
      source={{ uri: imageUri }}
      style={styles.image}
      resizeMode='cover'
    />
  </TouchableOpacity>
);

export default ListItem;
