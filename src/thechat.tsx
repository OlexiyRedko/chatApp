import React, { useEffect, useRef, useState} from 'react';
import {Keyboard, Animated, TouchableOpacity, Text, Image, View, TextInput} from 'react-native';
import { FlashList } from '@shopify/flash-list';
const styles = require('./styles.js');
let chattexts = [{text:""},]


function TheChat({ data, renderer, users, panResponder, chat, send, reloadw, position, width, openprof, myUser}) {
    let listRef1
    let inputRef1
    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
            inputRef1.blur();
        });
        return () => {
            keyboardHide.remove()
        }
      });
    
    for(let i = chattexts.length; i<=data.length; i++){
        chattexts.push({text:""})
      }
    const selectStyle = (item) => {
        if(item.userid == myUser){
          return(styles.mymsg)
        }else{
          return(styles.msg)
        }}
      
      const selectStyle2 = (item) => {
        if(item.userid == myUser){
          return(styles.mymsgcontainer)
        }else{
          return(styles.msgcontainer)
        }}
    
    const Item2 = ({ item }) => (
        <View  style={selectStyle(item)} >
          <View style = {[{flexDirection: 'row'}]}>
            <Text style={[{color: 'white', fontWeight: 'bold',}]}>{users[item.userid-1]['name']} </Text>
            
          </View>
          <View style={selectStyle2(item)} >
              <TouchableOpacity onPress={() => openprof(item.userid)} >
                <Image source={users[item.userid-1]['img']} style={styles.userimage} resizeMode="stretch"></Image>
              </TouchableOpacity>
            <Text style={[styles.messagetext]}>{item.msg} </Text>
            <Text style={[{color: 'white', alignSelf:"flex-end", fontSize: 10, margin:5}]}>{item['time']} </Text>
          </View>
        </View >
    );
    const Item3 = ({ item }) => (
        <View  style={selectStyle(item)} >
          <View style = {[{flexDirection: 'row'}]}>
            
          </View>
          <View style={selectStyle2(item)} >
            <Text style={[styles.messagetext, {backgroundColor:'#b3d6b8'}]}>{item.msg} </Text>
            <Text style={[{color: 'white', alignSelf:"flex-end", fontSize: 10, margin:5}]}>{item['time']} </Text>
          </View>
        </View >
    );
    const Item4 = ({ item }) => (
        <View  style={selectStyle(item)} >
          <View style = {[{flexDirection: 'row'}]}>
            
          </View>
          <View style={selectStyle2(item)} >
            <Image style={styles.userimage} resizeMode="stretch"></Image>
            <Text style={styles.messagetext}>{item.msg} </Text>
            <Text style={[{color: 'white', alignSelf:"flex-end", fontSize: 10, margin:5}]}>{item['time']} </Text>
          </View>
        </View >
    );
    const renderItem2 = ({ item }) => {
        if(item.userid == myUser){
            return(<Item3 item={item} />)
          }else{
            if(item.small == true){ 
                return(<Item4 item={item} />)
            }else{
                return(<Item2 item={item} />)
            }
          }
        
    }

      
    
    const itemwidth2 = {
        transform: [{ translateX: position}], // open3
    }
    const itw = {
        width: width, // sliderwidth
    }
    

    return(
        <Animated.View style={[styles.sider, itemwidth2]}
      {...panResponder.panHandlers}
      >
        <Animated.View style={[itw]}>

        <View style={[styles.slidercontainer]}>

        <View style={[styles.bottom]}>
        <TouchableOpacity style={styles.buttonsend} onPress={() => {
          if(chattexts[chat]){
            send(chat, chattexts[chat]['text'])
          }else{
            for(let i=chattexts.length; i<=chat; i++){
              chattexts.push({text:""})
            }
            send(chat, chattexts[chat]['text'])
          }
          chattexts[chat]['text'] = ""
          inputRef1.clear();
          
          }}>
          <Image source={require('./img/send.png')} style={[{width:'100%', height:'100%'}]} resizeMode="stretch"></Image>
        </TouchableOpacity>
          <TextInput
            ref={(ref) => {inputRef1 = ref}}
           textAlignVertical ={'top'}
           multiline ={true}
           style={styles.input}
           onChangeText = {(text)=>{
            try{
              chattexts[chat]['text']=text
            }catch(err){
              for(let i=chattexts.length; i<=chat; i++){
                chattexts.push({text:""})
              }
              chattexts[chat]['text']=text
            }
            reloadw()
          }}
           placeholder = {'Texting...'}
           placeholderTextColor = {'grey'}
           value = {chattexts[chat]['text']}
           onPressOut={(e)=>{}}
           />
          

        </View>

        <View style={[{flex:1}]}>
        <FlashList
        ref={(ref) => {listRef1 = ref }}
        data={data} // JSON.parse(JSON.stringify(chats[chat])).reverse()
        renderItem={renderItem2}
        keyExtractor={item => item.id}
        onEndReached={renderer}
        onEndReachedThreshold={3}
        estimatedItemSize={20}
        inverted={true}
        keyboardShouldPersistTaps='always' 
        />
        </View>
        </View>
        </Animated.View> 
      </Animated.View>
    )

}

export default TheChat;