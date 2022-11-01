import React, { useEffect, useRef, useState} from 'react';
import {  StyleSheet, Text, View, Button, PermissionsAndroid, FlatList, Image, TouchableOpacity, SafeAreaView, Animated, Dimensions, BackHandler, PanResponder} from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
import Geolocation from '@react-native-community/geolocation';
import { FlashList } from '@shopify/flash-list';
import xtype from 'xtypejs'
const chats = require('./chats.js')

// Geolocation.setRNConfiguration({
//     skipPermissionRequests: false,
//     locationProvider:'auto'
//   })








 const App = (props) => {
  const backAction = () => {
    
    if(indw==1){
      changewidthback()
      setindw(0)
    }else if(indw==2){
      changewidth()
      setindw(1)
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
    return () => backHandler.remove();
  });
  

  const [data, setdata] = useState([
    {
      id: '1',
      title: 'IO-02 Node.Js chat',
      img: require('./img/chat_icons/1.jpg'),
    },
    {
      id: '2',
      title: 'TouchMe squad',
      img: require('./img/chat_icons/2.jpg'),
    },
    {
      id: '3',
      title: 'Фашик Донецкий',
      img: require('./img/chat_icons/3.jpg'),
    },
    {
      id: '4',
      title: 'Група 2.0',
      img: require('./img/chat_icons/4.jpg'),
    },
    {
      id: '5',
      title: 'Danial Yarshov',
      img: require('./img/chat_icons/5.jpg'),
    },
    {
      id: '6',
      title: 'Перший   Україномовний Шітпост',
      img: require('./img/chat_icons/6.jpg'),
    },
    {
      id: '7',
      title: 'atrthread',
      img: require('./img/chat_icons/7.jpg'),
    },
    {
      id: '8',
      title: 'reddit/shitthread',
      img: require('./img/chat_icons/8.jpg'),
    },
    {
      id: '9',
      title: 'Work, like really...',
      img: require('./img/chat_icons/9.jpg'),
    },
    {
      id: '10',
      title: 'Some Horny Chat (SHCat)',
      img: require('./img/chat_icons/11.jpg'),
    },
    {
      id: '11',
      title: 'Кошька просит мемов покушать',
      img: require('./img/chat_icons/12.jpg'),
    },
    {
      id: '12',
      title: 'Third Item',
    },
    {
      id: '13',
      title: 'Third Item',
    },
    {
      id: '14',
      title: 'Third Item',
    },
    {
      id: '15',
      title: 'Third Item',
    },
    {
      id: '16',
      title: 'Third Item',
    },
    {
      id: '17',
      title: 'Third Item',
    },
    {
      id: '18',
      title: 'Third Item',
    },
    {
      id: '19',
      title: 'Third Item',
    },
    {
      id: '20',
      title: 'Third Item',
    },

  ]); 
  const panResponder = useRef(
    
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gest) => gest.dx,
      onMoveShouldSetPanResponderCapture: (evt, gest) => gest.dx,
      onPanResponderMove:(evt, gest)=>{
        const activetouches = evt.nativeEvent.changedTouches.length;
        if (activetouches === 1){

          if(JSON.stringify(gest.dx)-0>290){
            slide.setValue( 290)
          }else if(JSON.stringify(gest.dx)-0<-90){
            slide.setValue( -90)
          }else{
            slide.setValue(JSON.stringify(gest.dx)-0)
          }
          
          if(JSON.stringify(side)==0 || JSON.stringify(side)==1){
            if(JSON.stringify(slide)-0>20){
              side.setValue(1)
              if(JSON.stringify(indwAnim)-0==1){
                Animated.parallel([
                  Animated.timing(open1, {
                    toValue: -windowWidth+(windowWidth*15/100)+(JSON.stringify(slide)-20),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open2, {
                    toValue: windowWidth-(windowWidth*20/100)-(JSON.stringify(slide)-20),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open3, {
                    toValue: -windowWidth+(windowWidth*15/100)+(JSON.stringify(slide)-20),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                ])
              }else if(JSON.stringify(indwAnim)-0==2){
                Animated.parallel([
                  Animated.timing(open1, {
                    toValue: -windowWidth+(JSON.stringify(slide)-20),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open2, {
                    toValue: windowWidth-(windowWidth*20/100)-(JSON.stringify(slide)-20),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                  Animated.timing(open3, {
                    toValue: -windowWidth+(JSON.stringify(slide)-20),
                    duration: 0,
                    useNativeDriver: true
                  }).start(),
                ])
              }
            }else{if(JSON.stringify(indwAnim)-0==1){
              open()
            }else if(JSON.stringify(indwAnim)-0==2){
              openwider()
            }}   
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
              o2pen()
            }
            console.log(JSON.stringify(slide))
            
          }
          
        }
      },
      onPanResponderEnd:(evt, gest)=>{
        if(JSON.stringify(slide)-0>80){
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
  const [indw, setindw] = useState(0)
  const [chat, setchat] = useState(0)
  const [bgcolor, setbgcolor] = useState('#b3d6b8')
  const [scroll, enablescroll] = useState(true)
  const open1 = useRef(new Animated.Value(0)).current;
  const open2 = useRef(new Animated.Value(0)).current;
  const open3 = useRef(new Animated.Value(0)).current;
  const open4 = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;
  const indwAnim = useRef(new Animated.Value(0)).current;
  const side = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  
  
  const addobject = ()=>{
    array = []
    for(var i = 1; i < 200; i++){
      array.push({
        id: data.length+i,
        title: data.length+i + ' Item',
      })
    }
    setdata([...data,  ...array])
  }




const nothing = ()=>{
}


const Item = ({ item }) => (
  <TouchableOpacity  style={styles.item} onPress={() => openchat(item.id)}>
    <Text style={styles.label}numberOfLines={1} >{item.title} </Text>
    <Animated.View style={[styles.container3, itemwidth3]}>
    <Image source={item.img} style={styles.image1} resizeMode="stretch"></Image>
    </Animated.View>
    
    
  </TouchableOpacity >
);

const renderItem = ({ item }) => (
  <Item item={item} />
);

const Item2 = ({ item }) => (
    <View  style={selectStyle(item)} >
    <Text style={styles.label}>{item.msg} </Text>
    </View >
);

const renderItem2 = ({ item }) => (
  <Item2 item={item} />
);

openchat=(chatid)=>{
  setchat(chatid-1)
  open()
}

selectStyle = (item) => {
  if(item.userid == 1){
    return(styles.mymsg)
  }else{
    return(styles.msg)
  }}

open=()=>{
  setindw(1)
  indwAnim.setValue(1)
  changewidth()
}
o2pen=()=>{
  setindw(1)
  indwAnim.setValue(1)
  changewidth3()
}
close=()=>{
  setindw(0)
  indwAnim.setValue(0)
  changewidthback()
}
openwider=()=>{
  setindw(2)
  indwAnim.setValue(2)
  changewidth2()
}

const changewidth = () =>{
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
      toValue: windowWidth-(windowWidth*20/100),
      duration: 100,
      useNativeDriver: true
    }).start(),
  ])
  setbgcolor('#213144')
}

const changewidth3 = () =>{
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
      toValue: windowWidth-(windowWidth*20/100),
      duration: 0,
      useNativeDriver: true
    }).start(),
  ])
  setbgcolor('#213144')
}

const changewidth2 = () =>{
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
      toValue: -windowWidth,
      duration: 100,
      useNativeDriver: true
    }).start(),
  ])
  setbgcolor('#213144')
}

const changewidthback = () =>{
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
    Animated.timing(open4, {
      toValue: windowWidth-(windowWidth*20/100),
      duration: 100,
      useNativeDriver: true
    }).start(),
  ])
  
  setbgcolor('#b3d6b8')
}

const progressAnim=0
// progress.interpolate({
//   inputRange:[0, 1],
//   outputRange:[0, -windowWidth+(windowWidth*15/100)]
// })
const anotherWidth=0
// progress.interpolate({
//   inputRange:[0, 1],
//   outputRange:[0, -windowWidth+(windowWidth*15/100)]
// })
const anotherWidth2=0
// progress.interpolate({
//   inputRange:[0, 1],
//   outputRange:[0, windowWidth-(windowWidth*20/100)]
// })

const itemwidth = {
  transform: [{ translateX: open1 }],
  // width: progressAnim,
  
}
const itemwidth2 = {
  transform: [{ translateX: open3 }],
  width: '85%',
  
}
const itemwidth3 = {
  transform: [{ translateX: open2 }],
  // width: anotherWidth,
  
}

  
return (
  <SafeAreaView style={styles.container} screenOptions={{headerTransparent: true}}>   
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={close}>
          <Image source={require('./img/menu.png')} style={styles.image} resizeMode="stretch"></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={nothing}>
          <Image source={require('./img/search.png')} style={styles.image} resizeMode="stretch"></Image>
        </TouchableOpacity>
        <Text style={styles.labelheader}>{indw}</Text>
      </View>
      <View style = {styles.container2}>
      <Animated.View style={[styles.container1, itemwidth, {backgroundColor: bgcolor}]}>
        <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={addobject}
        onEndReachedThreshold={3}
        estimatedItemSize={20}
        />
      </Animated.View>
      <Animated.View style={[styles.sider, itemwidth2]}
      {...panResponder.panHandlers}
      >
        <FlatList
        data={chats[chat]}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
        // onEndReached={}
        onEndReachedThreshold={3}
        estimatedItemSize={20}
        // scrollEnabled={scroll}
        />
      </Animated.View>

      </View>
      
      
</SafeAreaView>
);
}


const styles = StyleSheet.create({
  flatlist:{
    height:'100%',
  },
  container: {
      flex: 1,
      backgroundColor: '#b3d6b8',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
  },
  container1: {
    width: '100%',
    height: '100%',
  },
  container2: {
    flexDirection: 'row',
    height: '100%',
  },
  conatiner3:{
  },
  header: {
    backgroundColor: '#2d425f',
    alignItems: 'stretch',
    flexDirection: 'row',
    height: '5%',
    alignItems: 'flex-end',
  },
  sider: {
    backgroundColor: '#213144',
    height:'95%',
  },
  label: {
    flex:1,
    fontSize: 18,
    color: 'black',
    width: '75%',
    marginTop: 5,
    //backgroundColor: 'pink',
  },
  item: {
    backgroundColor: 'white',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 3,
    marginRight: 6,
    padding: 0,
    borderRadius: 5,
    minHeight: 64,
    flexDirection: 'row-reverse',

},
mymsg: {
  backgroundColor: 'green',
  marginTop: 1,
  marginBottom: 1,
  marginLeft: 3,
  marginRight: 6,
  padding: 0,
  borderRadius: 5,
  minHeight: 64,
  alignSelf: 'flex-end',

},
msg: {
  backgroundColor: 'blue',
  marginTop: 1,
  marginBottom: 1,
  marginLeft: 3,
  marginRight: 6,
  padding: 0,
  borderRadius: 5,
  minHeight: 64,
  alignSelf: 'flex-start',

},
  labelheader: {
    fontSize: 20,
    color: 'white',
    marginBottom: 4,
    
},
  button: {
    height: 18,
    width: 30,
    marginTop: 5,
    marginBottom: 8,
    marginLeft: '4%',
    marginRight: '45%',

},
button2: {
  height: 18,
  width: 18,
  marginTop: 5,
  marginBottom: 8,
  marginLeft: '0%',
  marginRight: '4%',

},
image: {
  width:'100%',
  height: '100%',
},
image1: {
  height: 60,
  width: 60,
  borderRadius: 5,
  marginTop: 2,
  marginBottom: 2,
  marginLeft: 2,
  marginRight: 5,
  padding: 2,
  borderWidth: 1,
  borderColor: '#ffd400',
},

});



export default App;


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

  // connect = async () =>{
  //   const URL = "http://46.219.35.254:3000/get"
  //   try{
  //     const response = await fetch(URL);
  //     if(response.status != 200){this.noConectionError()}
  //     const responseText = await response.text();
  //     this.setState({response:responseText})
  //   }catch(err){
  //     this.setState({response:err.toString()})
  //     console.log(err)
  //   }
  // }

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