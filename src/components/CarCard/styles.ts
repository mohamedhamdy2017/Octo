import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    width: '100%',
    minHeight: 98,
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  content: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainImage: {
    width: 61,
    height: 65,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    paddingVertical: 11,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
  },
  description: {
    marginVertical: 2,
    fontSize: 13,
    fontWeight: '400',
  },
  price: {
    marginVertical: 2,
    color: '#4D69FF',
    fontSize: 13,
    fontWeight: '700',
  },
  production: {
    width: '83%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  year: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearImage: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  meter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    borderTopWidth: 2,
    borderColor: '#F1F1F1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    marginTop: 8,
    height: 22,
  },
  bottomLogo: {
    width: 65,
    height: 11,
    marginTop: 8,
  },
  stars: {
    width: 65,
    height: 11,
  },
});
