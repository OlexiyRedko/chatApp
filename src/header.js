import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, StyleSheet, Dimensions, ImageSourcePropType,} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Header extends React.Component  {
  
  
  constructor(props) {
    
    super(props)
    
  }

  

  

  render() {


    return(<View style={[headerStyles.header, {backgroundColor:this.props.color}, this.props.style]}>
      <TouchableOpacity style={headerStyles.button} onPress={this.props.button1}>
        <Image source={this.props.img} style={[{height:'100%', width:40}]} resizeMode="contain"></Image>
      </TouchableOpacity>
      {this.props.children}
    </View>)
  }
}

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: windowHeight*10/100
  },
  button: {
    marginTop: 5,
    marginBottom: 8,
    height:20,
    marginLeft:'5%',
    marginRight:'5%',


},
labelheader: {
  fontSize: 20,
  color: 'white',
  marginBottom: 4,
  
},
})


Header.defaultProps = {
  img:require('./img/back.png'),
  color:'#2d425f',
  style:{}
}