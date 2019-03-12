// Core
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// Components
import ShareBtn from '@shared-components/ShareBtn';

// Styles
import styles from './styles';

const ImageInfo = ({ author, camera, imageUrl }) => (
  <View style={styles.imageInfo}>
    <SafeAreaView style={styles.safeAreaWrapper}>
      {/*
        Additional View wrappers were added due to iOS bug, see:
        https://github.com/react-navigation/react-navigation/issues/3185
      */}
      <View style={styles.content}>
        <View style={styles.contentCol}>
          <Text
            style={styles.author}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {author}
          </Text>

          <Text
            style={styles.camera}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {camera}
          </Text>
        </View>

        <ShareBtn imageUrl={imageUrl}/>
      </View>
    </SafeAreaView>
  </View>
);

export default ImageInfo;
