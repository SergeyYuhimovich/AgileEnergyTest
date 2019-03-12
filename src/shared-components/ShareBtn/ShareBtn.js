// Core
import React from 'react';
import { TouchableOpacity, Image, Share } from 'react-native';

// Assets
import Images from '@assets/images';

// Styles
import styles from './styles';

const _onShare = async (imageUrl) => {
  try {
    await Share.share({
      title: 'Title',
      message: `${imageUrl}`,
    });
  } catch (error) {
    alert(error.message);
  }
};

const ShareBtn = ({ imageUrl }) => (
  <TouchableOpacity onPress={() => _onShare(imageUrl)}>
    <Image
      source={Images.shareIcon}
      style={styles.shareIcon}
      resizeMode='contain'
    />
  </TouchableOpacity>
);

export default ShareBtn;
