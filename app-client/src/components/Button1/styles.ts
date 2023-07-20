import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,

    backgroundColor: '#fff',
  },

  icon: {
    flex: 2,
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
  },
})
