import io from 'socket.io-client'

const URL = "http://10.3.64.241:3000/"
const socket = io(URL)

const connect2 = async (loginObj, func) =>{
    socket.on("new", (msg)=>{console.log(msg)})
    socket.emit("login", loginObj)
    socket.on("loginback", (msg)=>{func(msg)})
  }
const fakeconnect2 = async (loginObj, func) =>{
  func("1")
}


  const login = async (login, password, func) =>{
    const q = 'users/login'
    console.log(login, password)
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
        console.log(js)
        return js
      }catch(err){
        console.log(err)
      }
  }

  export {connect2, login, fakeconnect2}