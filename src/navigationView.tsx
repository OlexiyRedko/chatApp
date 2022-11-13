import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, Button} from 'react-native';
import Header from './header'
const styles = require('./styles.js');


function NavigationView({closeNavi, }) {
    const nothing = () =>{
        
      }

    return(
        
    <View style={[{backgroundColor:'pink', flex:1}]}>
        <Header indw = {1} button1={closeNavi} button2={nothing} indp={0}/>
        <Text style={styles.paragraph}>I'm in the Drawer!</Text>
        <Button
            title="Close drawer"
            onPress={closeNavi}
        />
    </View>
    )
}

export default NavigationView;