import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  backBtnWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  backBtnIcon: {
    width: 20,
    height: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
})
