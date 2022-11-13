import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, StyleSheet, Dimensions,} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Header({button1, button2, indw, indp}) {
  let img;
  let style;
  let resmod
  if(indw!=0 || indp==1){
    img=require('./img/back.png')
  }else{
    img=require('./img/menu.png')
  }
    return(<View style={[headerStyles.header ]}>
      <TouchableOpacity style={headerStyles.button} onPress={button1}>
        <Image source={img} style={headerStyles.image} resizeMode="stretch"></Image>
      </TouchableOpacity>
      <TouchableOpacity style={headerStyles.button2} onPress={button2}>
        <Image source={require('./img/search.png')} style={headerStyles.image} resizeMode="stretch"></Image>
      </TouchableOpacity>
      <Text style={headerStyles.labelheader}>{indw}</Text>
    </View>)
     
}

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: '#2d425f',
    alignItems: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: windowHeight*10/100
  },
  button: {
    height: 18,
    width: 30,
    marginTop: 5,
    marginBottom: 8,
    marginLeft: '4%',
    marginRight: '45%',

},
button2: {
  height: 18,
  width: 18,
  marginTop: 5,
  marginBottom: 8,
  marginLeft: '0%',
  marginRight: '4%',

},
labelheader: {
  fontSize: 20,
  color: 'white',
  marginBottom: 4,
  
},
image: {
  width:'100%',
  height: '100%',
},
})

export default Header;
