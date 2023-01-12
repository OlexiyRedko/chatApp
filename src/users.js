import React, { useEffect, useRef, useState} from 'react'
import {user_info} from './connections';
import {openDatabase} from "react-native-sqlite-storage"

const db = openDatabase({
    name: "NCityDB"
})
let cachedUsers= {
    id0:{
        id: 0,
        email: "",
        usertag: "",
        name1: "",
        name2: "",
        tags: "",
        photoURL: "1.png",
        bio: ""
    },
}
const cacheUser= (user)=>{
    cachedUsers["id"+user.id]=user
}
const returncachedUser= (id)=>{
    if(cachedUsers["id"+id]!=undefined){
        return cachedUsers["id"+id]
    }{
    return 0}
}


const createTableUsers =()=>{
    db.transaction(tnx=>{
        tnx.executeSql(
            "CREATE TABLE IF NOT EXISTS users (id INTEGER, email TEXT, usertag TEXT, name1 TEXT, name2 TEXT, tags TEXT, photoURL TEXT, bio TEXT)",
            [],
            ()=>{},
            err =>{console.log(err)}
        )
    })
}

const addUser =(id, email, usertag, name1, name2, tags, photoURL, bio)=>{
    db.transaction(tnx=>{
        tnx.executeSql(
            "INSERT INTO users (id, email, usertag, name1, name2, tags, photoURL, bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [id, email, usertag, name1, name2, tags, photoURL, bio],
            ()=>{},
            err =>{console.log(err)}
        )
    })
}

const checkUser =(id, userOutput)=>{
    let responce = 0
    db.transaction(tnx=>{
        tnx.executeSql(
            "SELECT * FROM users WHERE id = ?",
            [id],
            async (sqlTnx, res)=>{
                if(res.rows.item(0)!=undefined){
                    responce = 1
                }
                cacheUser(res.rows.item(0))
                userOutput(res.rows.item(0))
                },
            err =>{console.log(err)}
        )
    })
    return responce
}

const user = async(id, setUser)=>{
    createTableUsers()
    const exists = checkUser(id, setUser)
    if(exists===0){
        const user = await user_info(id)
        addUser(user.id, user.email, user.usertag, user.name1, user.name2, user.tags, user.photoURL, user.bio)
        return user
    }else{
        return searchingUser
    }

}

const userOnlyBD = (id)=>{
    createTableUsers()
    let searchingUser
    checkUser(id, searchingUser)
    
    if(!searchingUser){
        return {
            id: id,
            email: "",
            usertag: "",
            name1: "",
            name2: "",
            tags: "",
            photoURL: "1.png",
            bio: ""
        }
    }else{
        return searchingUser
    }

}

const getUser=()=>{

}

export {user, userOnlyBD, cacheUser, returncachedUser}