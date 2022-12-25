import io from 'socket.io-client'
import EncryptedStorage from 'react-native-encrypted-storage';


const URL = "http://10.3.64.241:3000/"
const socket = io(URL)


const connect2 = async (loginObj, func) =>{
    socket.on("new", (msg)=>{console.log(msg)})
    socket.emit("login", loginObj)
    socket.on("loginback", (msg)=>{func(msg)})
  }

const fakeconnect2 = async (func) =>{
  func("1")
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
        console.log("here" + err)
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

  export {connect2, login, fakeconnect2,  get_my_id, delete_token}