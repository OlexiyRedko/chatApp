import React, { useEffect, useRef, useState} from 'react';
import {  StyleSheet, Text, View, Button, PermissionsAndroid, FlatList, Image, TouchableOpacity, SafeAreaView, Animated, Dimensions, BackHandler, PanResponder} from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
import Geolocation from '@react-native-community/geolocation';
import { FlashList } from '@shopify/flash-list';
import xtype from 'xtypejs'

// Geolocation.setRNConfiguration({
//     skipPermissionRequests: false,
//     locationProvider:'auto'
//   })








 const App = (props) => {
  const backAction = () => {
    changewidthback()
    if(indw==0){
      BackHandler.exitApp()
    }else{
      setindw(0)
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
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove:(evt, gest)=>{
        const activetouches = evt.nativeEvent.changedTouches.length;
        
        if (activetouches === 1){
          scroll.setValue(gest.dy)
          console.log(scroll)
          if((JSON.stringify(scroll)+0<1 && JSON.stringify(scroll)+0>-1) || JSON.stringify(needclose)-0>1){
            needclose.setValue(gest.dx)
            if(JSON.stringify(needclose)+0>250){
              slide.setValue( 250)
            }else if(JSON.stringify(needclose)+0<0){
              slide.setValue( 0)
            }else{
              slide.setValue(JSON.stringify(needclose)-0)
            }
            const len1=slide.interpolate({
              inputRange:[0, 250],
              outputRange:[1, 0]
            })
            if(JSON.stringify(len1)+0<1){
              Animated.timing(progress, {
                toValue: len1,
                duration: 0,
                useNativeDriver: true
              }).start()
            }
            
          }
          
        }
      },
      onPanResponderRelease:(evt, gest)=>{
        const len1=slide.interpolate({
              inputRange:[150, 250],
              outputRange:[1, 0]
            })
        if(JSON.stringify(len1)+0<1 && JSON.stringify(needclose)-0>1){
          needclose.setValue(0)
          close()
        }else{
          open()
        }
        
        
      }
    })
  ).current;
  const [indw, setindw] = useState(0)
  const [bgcolor, setbgcolor] = useState('#b3d6b8')
  const needclose = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;
  const scroll = useRef(new Animated.Value(0)).current;
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
  <TouchableOpacity  style={styles.item} onPress={open}>
    <Text style={styles.label}numberOfLines={1} >{item.title} </Text>
    <Animated.View style={[styles.container3, itemwidth3]}>
    <Image source={item.img} style={styles.image1} resizeMode="stretch"></Image>
    </Animated.View>
    
    
  </TouchableOpacity >
);

const renderItem = ({ item }) => (
  <Item item={item} />
);

open=()=>{
  setindw(1)
  changewidth()
}
close=()=>{
  setindw(0)
  changewidthback()
}

const changewidth = () =>{
  Animated.timing(progress, {
    toValue: 1,
    duration: 100,
    useNativeDriver: true
  }).start()
  setbgcolor('#213144')
}

const changewidthback = () =>{
  Animated.timing(progress, {
    toValue: 0,
    duration: 50,
    useNativeDriver: true
  }).start() 
  setbgcolor('#b3d6b8')
}

const progressAnim=progress.interpolate({
  inputRange:[0, 1],
  outputRange:[0, -windowWidth+(windowWidth*15/100)]
})
const anotherWidth=progress.interpolate({
  inputRange:[0, 1],
  outputRange:[0, -windowWidth+(windowWidth*15/100)]
})
const anotherWidth2=progress.interpolate({
  inputRange:[0, 1],
  outputRange:[0, windowWidth-(windowWidth*20/100)]
})

const itemwidth = {
  transform: [{ translateX: progressAnim }],
  // width: progressAnim,
  
}
const itemwidth2 = {
  transform: [{ translateX: anotherWidth }],
  // width: anotherWidth,
  
}
const itemwidth3 = {
  transform: [{ translateX: anotherWidth2 }],
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
        // style = {styles.flatlist}
        />
      </Animated.View>
      <Animated.View style={[styles.sider, itemwidth2]}
      {...panResponder.panHandlers}
      >
        <Text style={styles.labelheader}>some text</Text>
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
    minHeight: '5%',
    alignItems: 'flex-end',
  },
  sider: {
    backgroundColor: '#213144',
    width:'100%',
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