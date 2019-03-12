// Core
import React from 'react';
import { FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

// Redux
import { authHandler } from '@actions/AuthActions';
import { getImagesList, getImageDetails } from '@actions/GalleryActions';

// Components
import ListItem from './components/ListItem';

// Styles
import styles from './styles';

class ImageGallery extends React.PureComponent {
  componentDidMount() {
    const { authToken, getImagesList, authHandler } = this.props;

    authToken ? getImagesList() : authHandler();
  }

  componentDidUpdate(prevProps) {
    const { authToken, getImagesList } = this.props;

    if (prevProps.authToken !== authToken) {
      getImagesList();
    }
  }

  _onListEndReached = () => {
    const { imagesListHasMore, imagesListLoading, getImagesList } = this.props;

    if (imagesListHasMore && !imagesListLoading) {
      getImagesList();
    }
  };

  _onSelectImage = id => {
    const { getImageDetails, navigation } = this.props;

    getImageDetails(id);
    navigation.navigate('ImageDetails');
  };

  _keyExtractor = (item) => item.id;

  _renderItem = ({ item }) => {
    const { id, cropped_picture} = item;

    return (
      <ListItem
        imageId={id}
        imageUri={cropped_picture}
        onPress={this._onSelectImage}
      />
    )
  };

  render() {
    const { imagesList, imagesListLoading, authTokenLoading } = this.props;

    return (
      <SafeAreaView style={styles.imageGallery}>
        {
          authTokenLoading
            ?
            <ActivityIndicator
              size='large'
              color='#fff'
            />
            :
            <FlatList
              data={imagesList}
              keyExtractor={this._keyExtractor}
              numColumns={2}
              renderItem={this._renderItem}
              onEndReached={this._onListEndReached}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                imagesListLoading && <ActivityIndicator color='#fff'/>
              }
            />
        }
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return { ...state.auth, ...state.gallery };
};

export default connect(mapStateToProps, {
  authHandler, getImagesList, getImageDetails
})(ImageGallery);
