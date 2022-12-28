import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, ScrollView, ImageBackground,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './header';
const styles = require('./styles.js');
import {user} from './users.js'


function ProfileNavigation({closeNavi, renderingUser}) {

  const [img, setImg] = useState("1.png")
    const [username, setUsername] = useState("")
    const [tags, setTags] = useState(undefined)
    useEffect(() =>{set_all()})
    // {uri:'file:///storage/emulated/0/Pictures/Ncity/'+users[userid].img}
    
    const set_all = async () =>{
        const curruser = await user(renderingUser)
        if(JSON.stringify(img)!==JSON.stringify('file:///storage/emulated/0/Pictures/Ncity/'+curruser.photoURL)){
            console.log(img)
            setImg('file:///storage/emulated/0/Pictures/Ncity/'+curruser.photoURL)
        }
        if(JSON.stringify(username)!=JSON.stringify(curruser.name1+curruser.name2)){
            setUsername(curruser.name1+curruser.name2)
        } 
        const tages = curruser.tags.split(", ")
        console.log(tages)
        const tags_mapped = tages.map(item=> (
              <TouchableOpacity key={item}>
                <Text style={styles.biotag}>
                {item}
                </Text>
                
                </TouchableOpacity>
            ))
        if(JSON.stringify(tags)!=JSON.stringify(tags_mapped)){
          setTags(tags_mapped)
        }
        
    }
    

    

  
    

    return(

        <View style={[{height:'100%', width:'100%'}]}>
                <ScrollView style = {[{flex:1, backgroundColor:'#2d425f'}]}>
                            <ImageBackground source={{uri: img}} style={[{height:350}]} resizeMode='cover'>
                                      <LinearGradient colors={['#2d425f60','#2d425f64','transparent']} style = {[{}]}>
                                      <Header button1={closeNavi} style={[{transform: [{ translateY: -0 }]}]} color='transparent'></Header>
                                      </LinearGradient>


                                      <View style={[{flex:1}]}></View>
                                      <LinearGradient colors={['transparent','#2d425f64','#2d425f60']} style = {[{minHeight:60, padding:5}]}>
                                      <Text style = {[{color:'white', fontSize:25, fontWeight: 'bold',}]}>{username}</Text>
                                      </LinearGradient>


                            </ImageBackground>
                        <View style = {[{flex:1, flexDirection:'row', flexWrap: "wrap",}]}>
                          {tags}                            

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