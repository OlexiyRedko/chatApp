import React, { useEffect, useRef, useState} from 'react';
import { Text, View,Image, TouchableOpacity, Button, ScrollView, Animated} from 'react-native';
const styles = require('./styles.js');


function ProfileNavigation({closeNavi, users, renderingUser}) {

    return(
        <View style={[{height:'100%'}]}>
                <View style = {[{backgroundColor:'pink', alignSelf:'center', flex:1}, {}]}>
                      <ScrollView style = {[{flex:1, backgroundColor:'#2d425f'}]}>
                      <View style = {[{height:350, backgroundColor:'blue'}]}>

                        <Image source={users[renderingUser]["img"]} style={[{height:350}]} resizeMode='cover'></Image>

                          <Animated.View style = {[{minHeight:40, margin:5, padding:5, transform: [{ translateY: -50 }],}]}>
                          <Text style = {[{color:'white', fontSize:25}]}>{users[renderingUser]["name"]}</Text>
                          </Animated.View>
                      </View>
                        
                        <View style = {[styles.biocontainer]}>
                          <Text style = {[{color:'black', fontSize:18}]}>bio: there is some bio</Text>
                        </View>

                        <View style = {[styles.biocontainer]}>
                          <Text style = {[{color:'black', fontSize:18}]}>phonenumber: +380683231569</Text>
                        </View>
                        <Text style={styles.paragraph}>I'm in the Drawer!</Text>
                        <Button
                          title="Close drawer"
                          onPress={closeNavi}
                        />
                        
                      </ScrollView>
                          
                  </View>
                      
    </View>
    )
}

export default ProfileNavigation;