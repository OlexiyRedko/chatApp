import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity,} from 'react-native';
const styles = require('./styles.js');


function Header({text, button1, button2}) {
    return(<View style={[styles.header ]}>
      <TouchableOpacity style={styles.button} onPress={button1}>
        <Image source={require('./img/menu.png')} style={styles.image} resizeMode="stretch"></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={button2}>
        <Image source={require('./img/search.png')} style={styles.image} resizeMode="stretch"></Image>
      </TouchableOpacity>
      <Text style={styles.labelheader}>{text}</Text>
    </View>)
     
}

export default Header;
