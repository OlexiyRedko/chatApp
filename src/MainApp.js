import React, { useEffect, useRef, useState} from 'react'
import Scr1 from './Screen1'
import LoginScreen from './Login'

const MainApp = (props) => {
    const [user, setUser] = useState(0)
    const Scr0 = () => {return(LoginScreen(setUser))}
    const Scr11 = () => {return(Scr1(user))}

    if(user==0){
        return(<Scr0/>)
    }else{
        return(<Scr11/>)
    }

}

export default MainApp;