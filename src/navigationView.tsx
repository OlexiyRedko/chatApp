import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, Button} from 'react-native';
import Header from './header'
const styles = require('./styles.js');
import {user, returncachedUser} from './users.js'
const RNFS = require('react-native-fs');


function NavigationView({closeNavi, userid, profileFunction, logout}) {
    const [curruser, setcurruser] = useState({
        id: userid,
        email: "",
        usertag: "",
        name1: "",
        name2: "",
        tags: "",
        photoURL: "1.png",
        bio: ""
    })
      useEffect(()=>{
        const res = returncachedUser(userid)
          if(res != 0){
            setcurruser(res)
          }else{
            user(userid, setcurruser)
          }
      })
    


    return(
        
    <View style={[{backgroundColor:'#213144', flex:1}]}>
        <Header button1={closeNavi}>
            <TouchableOpacity style={[{ marginTop: 5,
                                          marginBottom: 8,
                                          height:20,
                                          marginLeft:'5%',
                                          marginRight:'5%',}]} 
                                          onPress={()=>{
                                            logout()
                                            // setresp('0')
                                            }}>
                <Image source={require('./img/search.png')} style={[{height:'100%', width:40}]} resizeMode="contain"></Image>
              </TouchableOpacity>
        </Header>
        <TouchableOpacity style={[{ height:65, width:'100%', flexDirection:'row'}]} onPress={profileFunction}>
            <Image source={{uri: 'file:///storage/emulated/0/Pictures/Ncity/'+curruser.photoURL}} style={[{  height: 55,
                                                            width: 55,
                                                            borderRadius: 5,
                                                            margin: 5,
                                                            }]} resizeMode="stretch"></Image>
            <View style={[{alignSelf:'flex-end', marginBottom:5}]}>
                <Text style={[{color:'white',}]}>My Profile</Text>
                <Text style={[{fontWeight: 'bold', fontSize:20, color:'white'}]}>{curruser.name1+curruser.name2}</Text>
            </View>
        </TouchableOpacity>

    </View>
    )
}

export default NavigationView;