import React, { useEffect, useRef, useState} from 'react'
import { StatusBar, Keyboard, Text, View, TextInput, TouchableOpacity, SafeAreaView, Animated, Dimensions, BackHandler, PanResponder, ScrollView, Image, DrawerLayoutAndroid} from 'react-native';
const styles = require('./styles.js')
import { connect2, login, fakeconnect2 } from './connections';

const LoginScreen = (func) => {
    const [Login, setLogin] = useState("")
    const [Password, setPassword] = useState("")

    const localLogin = async (log, pass)=>{
        user = await login(log, pass)
        if( user[0]){
            func(user[1])
        }
        
    }
    
    return(
        <View style={[styles.container, {backgroundColor: '#b3d6b8', flexDirection:'row'}]} >
      <StatusBar
        
        backgroundColor={'transparent'} 
        translucent={true}/>

        <View style={[{ alignSelf:'center', backgroundColor:'black', width:200}]} >
        <TextInput
            ref={(ref) => {inputRef1 = ref}}
           textAlignVertical ={'top'}
           style={[{
            height: 40,
            maxWidth:'70%',
            backgroundColor:'white',
            padding:2,
            margin:5,
            borderRadius: 5,
            color: 'black',}]}
           placeholder = {'login'}
           placeholderTextColor = {'grey'}
           value={Login}
           onChangeText={(text)=>{setLogin(text)}}
           />
           <TextInput
            ref={(ref) => {inputRef1 = ref}}
           textAlignVertical ={'top'}
           style={[{
            height: 40,
            maxWidth:'70%',
            backgroundColor:'white',
            padding:2,
            margin:5,
            borderRadius: 5,
            color: 'black',}]}
           placeholder = {'password'}
           placeholderTextColor = {'grey'}
           value={Password}
           onChangeText={(text)=>{setPassword(text)}}
           />
                <TouchableOpacity onPress={()=>{localLogin(Login, Password)}}>
                    <Text>next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{fakeconnect2(aunth, func)}}>
                    <Text>pass</Text>
                </TouchableOpacity>
        </View>

        
        </View>
    )
}

export default LoginScreen;