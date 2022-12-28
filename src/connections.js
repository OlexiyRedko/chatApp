import io from 'socket.io-client'
import EncryptedStorage from 'react-native-encrypted-storage';
import RNFetchBlob from 'rn-fetch-blob'
var RNFS = require('react-native-fs');


// "http://46.219.35.254:3000/"
const URL = "http://46.219.35.254:3000/"
const socket = io(URL)


const connect2 = async (loginObj, func) =>{
    socket.on("new", (msg)=>{console.log(msg)})
    socket.emit("login", loginObj)
    socket.on("loginback", (msg)=>{func(msg)})
  }

const fakeconnect2 = async (func) =>{
  func("1")
}

const user_info = async (id)=>{
  console.log(id)
  const q = 'users/getinfo/'+id
  const token = "Bearer "+ await get_token()
  try{
    const response = await fetch(URL+q, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:  token
      },
    });
    const js = await response.json()
    const code = response.status
    if(code == 200){      
      img(js.photoURL)
      return(js)
    }else{
      return 0 
    }
    
  }catch(err){
    console.log("here" + err)
  }
}

const img = async (picture) =>{
  const q = 'users/getpicture/'+picture
  console.log(q)
  const token = "Bearer "+ await get_token()
  const {config, fs} = RNFetchBlob
  let PictDir =  fs.dirs.PictureDir
  let options = {
    fileCashe: true,
    addAndroidDownloads:{
      useDownloadManager:true,
      notification: true,
      path: PictDir + "/Ncity/"+picture,
      description:'img'
    }
  }
    try{
      if(await RNFS.exists(PictDir + "/Ncity/"+picture)){
        console.log("exists!!!")
      }else{
        config(options).fetch('GET', URL+q, {Authorization:  token}).then(res =>{console.log(JSON.stringify(res))})
      }
    }catch(err){
      console.log(err)
    }
}


  const login = async (login, password, func) =>{
    const q = 'users/login'
    let data = JSON.stringify({
      email:login,
      password:password
      })
      try{
        const response = await fetch(URL+q, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: data
        });
        const js = await response.json()
        await store_token(js[1])
        return js
      }catch(err){
        console.log(err)
      }
  }

  const get_my_id = async () =>{
    const q = 'users/getall'
    const token = "Bearer "+ await get_token()
    console.log(token)
      try{
        const response = await fetch(URL+q, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:  token
          },
        });
        const js = await response.text()
        const code = response.status
        if(code == 200){
          return js
        }else{
          return 0 
        }
        
      }catch(err){
        console.log("here11" + err)
      }
  }

  const store_token = async(token) => {
    try {
      const item = JSON.stringify(token)
      await EncryptedStorage.setItem("token", item)
    } catch (error) {
      console.log(error)
    }
  }

  const get_token = async() => {
    try {   
      const responce = JSON.parse(await EncryptedStorage.getItem("token"))
      if (responce !== undefined) {
        return responce
      }else{
        return 0
      }
    } catch (error) {
      console.log(error)
      return -1
    }
  }

  const delete_token = async() => {
    try {
      await EncryptedStorage.removeItem("token")
    } catch (error) {
      console.log(error)
    }
  }

  export {connect2, login, fakeconnect2,  get_my_id, delete_token, user_info}