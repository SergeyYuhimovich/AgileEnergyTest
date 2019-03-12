import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageInfo: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000'
  },
  safeAreaWrapper: {
    flex: 1
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  contentCol: {
    flex: 1
  },
  author: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  camera: {
    fontSize: 20,
    color: '#fff'
  }
})
