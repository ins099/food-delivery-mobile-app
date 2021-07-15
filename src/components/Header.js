import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, icons, SIZES} from '../../constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={icons.nearby} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.locationBox}>
        <View style={styles.innerBox}>
          <Text>Location</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={icons.basket} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
    paddingTop: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  locationBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    width: '70%',
    backgroundColor: 'lightgrey',
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
