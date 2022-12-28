import React, { useEffect, useRef, useState} from 'react';
import {Keyboard, Animated, TouchableOpacity, Text, Image, View, TextInput} from 'react-native';
import { FlashList } from '@shopify/flash-list';
const styles = require('./styles.js');
let chattexts = [{text:""},]
import {user, userOnlyBD} from "./users.js"
const chats = require('./chats.js')


function TheChat({ data, renderer, panResponder, chat, position, width, openprof, myUser}) {
    let listRef1
    let inputRef1
    const [text, setText] = useState("")
    const [data2, setData2] = useState([{
      id: chats[chat].length-0+1,
      userid: myUser-0,
      msg: text,
      small:true,
      time: (new Date().getHours() +':'+new Date().getMinutes()),
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
      }])
    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
            inputRef1.blur();
        });
        return () => {
            keyboardHide.remove()
        }
      });
    useEffect(() => {
      setData2(JSON.parse(JSON.stringify(chats[chat])).reverse())
      console.log("changed")
      }, [chat]);

    const send = (chatid, msg) => {
        if(msg != ""){
          if(chats[chatid][chats[chatid].length-1].userid == myUser-0 && chats[chatid][chats[chatid].length-1].time == (new Date().getHours() +':'+new Date().getMinutes())){
            chats[chatid].push({
              id: chats[chatid].length-0+1,
              userid: myUser-0,
              msg: msg,
              small:true,
              time: (new Date().getHours() +':'+new Date().getMinutes()),
              date: new Date().getDate(),
              month: new Date().getMonth(),
              year: new Date().getFullYear()
              })
          setData2(arr => [{
            id: chats[chatid].length-0+1,
            userid: myUser-0,
            msg: msg,
            small:true,
            time: (new Date().getHours() +':'+new Date().getMinutes()),
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
            }, ...arr]) 
            console.log("here")
          }else{
            chats[chatid].push({
              id: chats[chatid].length-0+1,
              userid: myUser-0,
              msg: msg,
              time: (new Date().getHours() +':'+new Date().getMinutes()),
              date: new Date().getDate(),
              month: new Date().getMonth(),
              year: new Date().getFullYear()
              })
            setData2(arr => [{
              id: chats[chatid].length-0+1,
              userid: myUser-0,
              msg: msg,
              small:false,
              time: (new Date().getHours() +':'+new Date().getMinutes()),
              date: new Date().getDate(),
              month: new Date().getMonth(),
              year: new Date().getFullYear()
              }, ...arr]) 
              console.log("here2")
          } 
        }
      }



      


    
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
    
    const Item2 = ({ item }) =>
    {
      let curruser = userOnlyBD(item.userid)
      const [img, setImg] = useState("file:///storage/emulated/0/Pictures/Ncity/"+curruser.photoURL)
      const [username, setUsername] = useState(curruser.name1+curruser.name2)
      
      useEffect(()=>{set_all()},[])
      // {uri:'file:///storage/emulated/0/Pictures/Ncity/'+users[userid].img}
      const set_all = async () =>{
        curruser = await user(item.userid)
        setImg('file:///storage/emulated/0/Pictures/Ncity/'+curruser.photoURL)
        setUsername(curruser.name1+curruser.name2) 
      }
      

      return (
        <View  style={selectStyle(item)} >
          <View style = {[{flexDirection: 'row'}]}>
            <Text style={[{color: 'white', fontWeight: 'bold',}]}>{username} </Text>
            
          </View>
          <View style={selectStyle2(item)} >
              <TouchableOpacity onPress={() => openprof(item.userid)} >
                <Image source={{uri: img}} style={styles.userimage} resizeMode="stretch"></Image>
              </TouchableOpacity>
            <Text style={[styles.messagetext]}>{item.msg} </Text>
            <Text style={[{color: 'white', alignSelf:"flex-end", fontSize: 10, margin:5}]}>{item['time']} </Text>
          </View>
        </View >
    );
    } 
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
          // if(chattexts[chat]){
          //   send(chat, chattexts[chat]['text'])
          // }else{
          //   for(let i=chattexts.length; i<=chat; i++){
          //     chattexts.push({text:""})
          //   }
          //   send(chat, chattexts[chat]['text'])
          // }
          // chattexts[chat]['text'] = ""
          send(chat, text)
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
            setText(text)
            // try{
            //   chattexts[chat]['text']=text
            // }catch(err){
            //   for(let i=chattexts.length; i<=chat; i++){
            //     chattexts.push({text:""})
            //   }
            //   chattexts[chat]['text']=text
            // }
          }}
           placeholder = {'Texting...'}
           placeholderTextColor = {'grey'}
           value = {text}
           onPressOut={(e)=>{}}
           />
          

        </View>

        <View style={[{flex:1}]}>
        <FlashList
        ref={(ref) => {listRef1 = ref }}
        data={data2} // JSON.parse(JSON.stringify(chats[chat])).reverse()
        renderItem={renderItem2}
        keyExtractor={item => JSON.stringify(item.id)}
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