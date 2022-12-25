import React, { useEffect, useRef, useState} from 'react'
import Scr1 from './Screen1'
import LoginScreen from './Login'
import {get_my_id} from './connections';

const MainApp = (props) => {
    const [user, setUser] = useState(0)
    const Scr0 = () => {return(LoginScreen(setUser))}
    const Scr11 = () => {return(Scr1(user, setUser))}
    const login = async()=>{
        try{
            setUser(await get_my_id())
        }catch(err){
            console.log(err)
        }
    }

    if(user==0){
        login()
        return(<Scr0/>)
    }else{
        return(<Scr11/>)
    }

}

export default MainApp;