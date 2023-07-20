import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 23,
  },

  logoContainer: {
    flex: 1.5,
    marginTop: 22,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingLeft: 12,
  },

  image: {
    height: 130,
    width: 130,
    borderRadius: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },

  formContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'space-evenly',
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    height: 1,
    width: 140,
    borderRadius: 12,
    backgroundColor: '#fff',
  },

  lineText: {
    color: '#fff',
    marginHorizontal: 26,
  },

  buttonsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },

  singinContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textSingin: {
    fontSize: 16,
    color: '#fff',
  },
})

export const logo = StyleSheet.create({
  logoContainer: {
    flex: 1,
    marginTop: 52,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingLeft: 12,
  },

  image: {
    height: 104,
    width: 104,
    borderRadius: 12,
  },

  title: {
    fontSize: 26,
    marginTop: 16,
    fontWeight: '600',
    color: '#fff',
  },
})
