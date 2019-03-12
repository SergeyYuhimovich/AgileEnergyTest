// Core
import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

// Components
import ImageInfo from './components/ImageInfo';

// Assets
import Images from '@assets/images';

// Styles
import styles from './styles';

class ImageDetails extends React.PureComponent {
  render() {
    const { navigation, activeImage, activeImageLoading } = this.props;

    return (
      <View style={styles.imageDetails}>
        <SafeAreaView style={styles.backBtnWrapper}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Image
              source={Images.backIcon}
              style={styles.backBtnIcon}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {
          activeImageLoading
            ?
            <ActivityIndicator
              size='large'
              color='#fff'
            />
            :
            <View style={styles.content}>
              <Image
                source={{ uri: activeImage.full_picture }}
                loadingIndicatorSource={<Text>Hello</Text>}
                style={styles.image}
                progressiveRenderingEnabled
              />

              <ImageInfo
                author={activeImage.author}
                camera={activeImage.camera}
                imageUrl={activeImage.full_picture}
              />
            </View>
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { ...state.gallery };
};

export default connect(mapStateToProps)(ImageDetails);
