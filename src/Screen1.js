import React, { useEffect, useRef, useState} from 'react'
import { StatusBar, Keyboard, Text, View, Button, PermissionsAndroid,  TouchableOpacity, SafeAreaView, Animated, Dimensions, BackHandler, PanResponder, ScrollView, Image, DrawerLayoutAndroid} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Geolocation from '@react-native-community/geolocation';
import { FlashList } from '@shopify/flash-list';
import xtype from 'xtypejs'
const listOfChats = require('./listOfChats.js')
const chats = require('./chats.js')
const users = require('./users.js')
const styles = require('./styles.js')
import Header from './header'
import Chatlist from './chatlist.tsx'
import TheChat from './thechat';
import NavigationView from './navigationView';
import ProfileNavigation from './profileNavigsator';
import { delete_token, user_info} from './connections';
// Geolocation.setRNConfiguration({
//     skipPermissionRequests: false,
//     locationProvider:'auto'
//   })
const RNFS = require('react-native-fs');













 const Scr1 = (user, setUser) => {
  (async()=>{
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
  })()
  
  const backAction = () => {
    if(drawerstate==1){
      closeDrawer()
    }else if(drawerstate2==1){
      closeDrawer2()
    }else if(indw==1){
      closemsg()
      setindw(0)
    }else if(indw==2){
      // openmid()
      // setindw(1)
      closemsg()
      setindw(0)
    }else{
      BackHandler.exitApp()
    }
    
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  });
  const [data, setdata] = useState(listOfChats); 
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gest) => {if(gest.dx<-20 || gest.dx>20){return(true)}},
      // onMoveShouldSetPanResponderCapture: (evt, gest) => {if(gest.dx<-40 || gest.dx>40){return(true)}},
      onPanResponderMove:(evt, gest)=>{
        const activetouches = evt.nativeEvent.changedTouches.length;
        if (activetouches === 1){
          if(JSON.stringify(gest.dx)-0>290){
            slide.setValue( 290)
          }else if(JSON.stringify(gest.dx)-0<-50){
            slide.setValue( -50)
          }else{
            slide.setValue(JSON.stringify(gest.dx)-0)
          }
          if(JSON.stringify(side)==1 && JSON.stringify(slide)-0<0){
            slide.setValue(0)
          }
          if(JSON.stringify(side)==0 || JSON.stringify(side)==1){
            if(JSON.stringify(slide)-0>=0){
              side.setValue(1)
              if(JSON.stringify(indwAnim)-0==1){
                Animated.parallel([
                  Animated.timing(open1, {
                    toValue: -windowWidth+(windowWidth*15/100)+(JSON.stringify(slide)-0),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open2, {
                    toValue: windowWidth-(windowWidth*20/100)-(JSON.stringify(slide)-0),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open3, {
                    toValue: -windowWidth+(windowWidth*15/100)+(JSON.stringify(slide)-0),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                ])
              }else if(JSON.stringify(indwAnim)-0==2){
                Animated.parallel([
                  Animated.timing(open1, {
                    toValue: -windowWidth+(JSON.stringify(slide)-0),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open2, {
                    toValue: windowWidth-(windowWidth*20/100)-(JSON.stringify(slide)-0),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open3, {
                    toValue: -windowWidth+(JSON.stringify(slide)-0),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                ])
              }
            }  
          }
          if(JSON.stringify(indwAnim)-0==1 && (JSON.stringify(side)==0 || JSON.stringify(side)==2)){
            if(JSON.stringify(slide)-0<-1){
              side.setValue(2)
            Animated.parallel([
              Animated.timing(open1, {
                toValue: -windowWidth+(windowWidth*15/100)+(JSON.stringify(slide)-0),
                duration: 0,
                useNativeDriver: true
              }).start(),
              Animated.timing(open3, {
                toValue: -windowWidth+(windowWidth*15/100)+(JSON.stringify(slide)-0),
                duration: 0,
                useNativeDriver: true
              }).start(),
            ])
            }else{
              openfast()
            } 
          }
        }
      },
      onPanResponderEnd:(evt, gest)=>{
        if(JSON.stringify(slide)-0>90 && JSON.stringify(side)-0==1){
          close()
          side.setValue(0)
        }else if((JSON.stringify(slide)-0<40 && JSON.stringify(indwAnim)-0==2) || (JSON.stringify(slide)-0<-40 && JSON.stringify(indwAnim)-0==1)){
          openwider()
          side.setValue(0)
        }else if((JSON.stringify(slide)-0>40 && JSON.stringify(indwAnim)-0==2) || (JSON.stringify(slide)-0>-40 && JSON.stringify(indwAnim)-0==1)){
          open()
          side.setValue(0)
        }
      }
    })
  ).current;
  const [rel, srel] = useState(0)
  const [infobg, setInfobg] = useState('#2d425f')
  const [indw, setindw] = useState(0)
  const [indp, setindp] = useState(0)
  const [chat, setchat] = useState(0)
  const [renderingUser, setRUser] = useState(0)
  const [bgcolor, setbgcolor] = useState('#b3d6b8')
  const open1 = useRef(new Animated.Value(0)).current;
  const open2 = useRef(new Animated.Value(0)).current;
  const open3 = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;
  const indwAnim = useRef(new Animated.Value(0)).current;
  const side = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const open4 = useRef(new Animated.Value(windowWidth-(windowWidth*15/100))).current;
  const pMove = useRef(new Animated.Value(-windowHeight+50)).current;
  const pHeight = useRef(new Animated.Value(0)).current;
  const [myUserId, setUserId] = useState(1)
  const [drawerstate, setDrawerState] = useState(0)
  const [drawerstate2, setDrawer2State] = useState(0)
  const [resp, setresp] = useState("")
  let drawer
  const [drawer2, setDrawer2] = useState(undefined)
  let imgheader
  if(indw==0){imgheader=require('./img/menu.png')}
  const openDrawer =()=>{
    drawer.openDrawer()
    setDrawerState(1)
  }
  const closeDrawer =()=>{
    drawer.closeDrawer()
    setDrawerState(0)
  }
  const openDrawer2 =()=>{
    drawer2.openDrawer()
    setDrawer2State(1)
    dr2=1
  }
  const closeDrawer2 =()=>{
    drawer2.closeDrawer()
    setDrawer2State(0)
    dr2=0
  }

  const buttonback = () =>{
    if(indp==1){
      openprofile()
    }else if(indw==0){
      openDrawer()
    }else{
      close()
    }
  }
  const reloadw = () =>{
    if(rel == 0){
      srel(1)
    }else{
      srel(0)
    }
  }
  const addobject = ()=>{
    array = []
    for(var i = 1; i < 200; i++){
      array.push({
        id: data.length+i,
        title: data.length+i + ' Item',
      })
      chats.push([
        {
            id:1,
            userid:1,
            msg:"hello, nice to meet you",
            time:"12:45"
        }, 
      ])
    }
    setdata([...data,  ...array])
  }
  const nothing = async ()=>{
  };
  const openchat=(chatid)=>
  {
    setchat(chatid-1)
    open()
  }
  const open=()=>{
    setindw(1)
    indwAnim.setValue(1)
    openmid()
  }
  const openfast=()=>{
    setindw(1)
    indwAnim.setValue(1)
    openmidfaster()
  }
  const close=()=>{
    Keyboard.dismiss()
    setindw(0)
    indwAnim.setValue(0)
    closemsg()
  }
  const openwider=()=>{
    setindw(2)
    indwAnim.setValue(2)
    openfull()
  }
  const openmid = () =>{
    Animated.parallel([
      Animated.timing(open1, {
        toValue: -windowWidth+(windowWidth*15/100),
        duration: 100,
        useNativeDriver: true
      }).start(),
      Animated.timing(open2, {
        toValue: windowWidth-(windowWidth*20/100),
        duration: 100,
        useNativeDriver: true
      }).start(),
      Animated.timing(open3, {
        toValue: -windowWidth+(windowWidth*15/100),
        duration: 100,
        useNativeDriver: true
      }).start(),
      Animated.timing(open4, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }).start(),
    ])
    setbgcolor('#213144')
  }
  const openmidfaster = () =>{
    Animated.parallel([
      Animated.timing(open1, {
        toValue: -windowWidth+(windowWidth*15/100),
        duration: 0,
        useNativeDriver: true
      }).start(),
      Animated.timing(open2, {
        toValue: windowWidth-(windowWidth*20/100),
        duration: 0,
        useNativeDriver: true
      }).start(),
      Animated.timing(open3, {
        toValue: -windowWidth+(windowWidth*15/100),
        duration: 0,
        useNativeDriver: true
      }).start(),
      Animated.timing(open4, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false
      }).start(),
    ])
    setbgcolor('#213144')
  }
  const openfull = () =>{
    Animated.parallel([
      Animated.timing(open1, {
        toValue: -windowWidth,
        duration: 100,
        useNativeDriver: true
      }).start(),
      Animated.timing(open3, {
        toValue: -windowWidth,
        duration: 100,
        useNativeDriver: true
      }).start(),
      Animated.timing(open4, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false
      }).start(),
    ])
    
    setbgcolor('#213144')
  }
  const closemsg = () =>{
    Animated.parallel([
      Animated.timing(open1, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true
      }).start(),
      Animated.timing(open2, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true
      }).start(),
      Animated.timing(open3, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start(),
    ])
    
    setbgcolor('#b3d6b8')
  }
  const sliderwidth=open4.interpolate({
    inputRange:[0, 1],
    outputRange:[windowWidth-(windowWidth*15/100), windowWidth]
  })



  const openprofile = (userid) =>{
    if(drawerstate2==1){
      setInfobg('#2d425f')
      closeDrawer2()
    }else{
      setRUser(userid)
      setInfobg('transparent')
      openDrawer2()
    }
    
  }

  const pHeight2 = pHeight.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  })
  const profileHeight = {
    transform: [{ translateY: pMove }],
  }
  const profileHeight2 = {
    height: pHeight2,
  }

  const returnFile = async (file)=>{
    return 
  }

  const navigationView = () => (
    <NavigationView closeNavi={closeDrawer} userid={user} profileFunction={() =>{closeDrawer(); openprofile(user)}} logout={async()=>{await delete_token(); setUser(0)}}/>
  );
  const navigationView2 = () => (
    <ProfileNavigation closeNavi={closeDrawer2} renderingUser={renderingUser}/>
  );

  return (
    
    <View style={[styles.container, {backgroundColor: bgcolor}]} >
      <StatusBar
        
        backgroundColor={'transparent'} 
        translucent={true}/>
      <DrawerLayoutAndroid
                      ref={(ref) => {setDrawer2(ref)}}
                      drawerWidth={windowWidth}
                      drawerPosition={'right'}
                      renderNavigationView={navigationView2}
                      onDrawerClose={()=>{setDrawer2State(0)}}
                      onDrawerOpen={()=>{setDrawer2State(1)}}
                      keyboardDismissMode='on-drag'
                      drawerLockMode={'locked-open'}
                    > 
      
        
      <DrawerLayoutAndroid
      ref={(ref) => {drawer = ref}}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={navigationView}
      onDrawerClose={()=>setDrawerState(0)}
      onDrawerOpen={()=>setDrawerState(1)}
      
    >
      <View style = {[styles.container,{flexDirection: 'column-reverse',}]}>
        <View style = {[styles.container2,{flexDirection: 'column-reverse',}]}>
                <View style = {[styles.container2, {transform: [{ translateY: 0 }],}]}>

                      <Chatlist bgColor={bgcolor} width={open1} position={open2} data={data} renderer={addobject} opener={openchat} />
                      
                      <TheChat
                      data ={JSON.parse(JSON.stringify(chats[chat])).reverse()}
                      inputRef = {(ref) => {inputref = ref}}
                      panResponder ={panResponder}
                      chat = {chat} 
                      reloadw = {reloadw} 
                      position = {open3} 
                      width = {sliderwidth}
                      openprof = {openprofile}
                      myUser = {user}/>
                         
                </View>
                


          </View>
          <Header button1={buttonback} img={imgheader} >
              <View style={[{flex:1}]}></View>
              <TouchableOpacity style={[{ marginTop: 5,
                                          marginBottom: 8,
                                          height:20,
                                          marginLeft:'5%',
                                          marginRight:'5%',}]} 
                                          onPress={()=>{
                                            user_info(user)
                                            // setresp('0')
                                            }}>
              <Image source={require('./img/search.png')} style={[{height:'100%', width:40}]} resizeMode="contain"></Image>
              </TouchableOpacity>
              <Text>{user}</Text>
          </Header>
      </View>  
          </DrawerLayoutAndroid>
          
      </DrawerLayoutAndroid>
        
        
  </View>
  
  );
}






export default Scr1;


//   gotLocation = (info)=>{
    
//     this.setState({
//       longitude: JSON.stringify(info.coords.longitude),
//       latitude: JSON.stringify(info.coords.latitude)
//      }); 
//      console.log(info.coords); 
//      console.log(this.state.longitude); 
//      console.log(this.state.latitude);
//   }
//   failedLocation = (err) =>{
//     console.log(err)
//   }
  

  
//   location = (ev) => {
//     Geolocation.getCurrentPosition(
//       this.gotLocation,
//       this.failedLocation,
//       {
//       timeout: 5000,
//       maximumAge: 10,
//       enableHighAccuracy: false
//       });
//   }

// noConectionError = () =>{this.setState({response:"NoConectionError"})}

  

  // sendData = async () =>{
  //   if(!this.state.latitude==0 && !this.state.longitude==0){
  //     const URL = "http://46.219.35.254:3000/sendPosition"
  //   let data = JSON.stringify({
  //     long:this.state.longitude,
  //     lat:this.state.latitude
  //   })
  //   try{
  //     const response = await fetch(URL, {
  //       method: 'POST',
  //       body: data
  //     });
  //     if(response.status != 200){this.noConectionError()}
  //     const responseText = await response.text();
  //     this.setState({response2:responseText})
  //   }catch(err){
  //     this.setState({response2:err.toString()})
  //     console.log(err)
  //   }
  //   }else{
  //     this.setState({response2:"first define your location"})
  //   }
    
  // }