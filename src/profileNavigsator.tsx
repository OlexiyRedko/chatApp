import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, ScrollView, ImageBackground,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './header';
const styles = require('./styles.js');
import {user, returncachedUser} from './users.js'


function ProfileNavigation({closeNavi, renderingUser}) {
  const [curruser, setcurruser] = useState({
    id: renderingUser,
    email: "",
    usertag: "",
    name1: "",
    name2: "",
    tags: "",
    photoURL: "1.png",
    bio: ""
})
    useEffect(()=>{
      const res = returncachedUser(renderingUser)
        if(res != 0){
          setcurruser(res)
        }else{
          user(renderingUser, setcurruser)
        }
    })

    

    

  
    

    return(

        <View style={[{height:'100%', width:'100%'}]}>
                <ScrollView style = {[{flex:1, backgroundColor:'#2d425f'}]}>
                            <ImageBackground source={{uri: 'file:///storage/emulated/0/Pictures/Ncity/'+curruser.photoURL}} style={[{height:350}]} resizeMode='cover'>
                                      <LinearGradient colors={['#2d425f60','#2d425f64','transparent']} style = {[{}]}>
                                      <Header button1={closeNavi} style={[{transform: [{ translateY: -0 }]}]} color='transparent'></Header>
                                      </LinearGradient>


                                      <View style={[{flex:1}]}></View>
                                      <LinearGradient colors={['transparent','#2d425f64','#2d425f60']} style = {[{minHeight:60, padding:5}]}>
                                      <Text style = {[{color:'white', fontSize:25, fontWeight: 'bold',}]}>{curruser.name1+curruser.name2}</Text>
                                      </LinearGradient>


                            </ImageBackground>
                        <View style = {[{flex:1, flexDirection:'row', flexWrap: "wrap",}]}>
                          {curruser.tags.split(", ").map(item=> (
                              <TouchableOpacity key={item}>
                                <Text style={styles.biotag}>
                                {item}
                                </Text>
                                
                              </TouchableOpacity>
                            ))}                            

                        </View>
                        
                        <View style = {[styles.biocontainer]}>
                          <Text style = {[{color:'#6491aa', fontSize:18}]}>bio: there is some bio</Text>
                        </View>

                        <View style = {[styles.biocontainer]}>
                          <Text style = {[{color:'#6491aa', fontSize:18}]}>phonenumber: +380683231569</Text>
                        </View>
                        
                      </ScrollView>
                      
    </View>
    )
}

export default ProfileNavigation;