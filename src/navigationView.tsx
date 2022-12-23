import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, Button} from 'react-native';
import Header from './header'
const styles = require('./styles.js');
const users = require('./users.js');


function NavigationView({closeNavi, userid, profileFunction}) {
    const nothing = () =>{
        
      }

    return(
        
    <View style={[{backgroundColor:'#213144', flex:1}]}>
        <Header button1={closeNavi}></Header>
        <TouchableOpacity style={[{ height:65, width:'100%', flexDirection:'row'}]} onPress={profileFunction}>
            <Image source={users[userid-1]['img']} style={[{  height: 55,
                                                            width: 55,
                                                            borderRadius: 5,
                                                            margin: 5,
                                                            }]} resizeMode="stretch"></Image>
            <View style={[{alignSelf:'flex-end', marginBottom:5}]}>
                <Text style={[{color:'white',}]}>My Profile</Text>
                <Text style={[{fontWeight: 'bold', fontSize:20, color:'white'}]}>{users[userid-1]['name']}</Text>
            </View>
        </TouchableOpacity>

    </View>
    )
}

export default NavigationView;