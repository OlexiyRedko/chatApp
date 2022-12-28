import React, { useEffect, useRef, useState} from 'react'
import {user_info} from './connections';
import {openDatabase} from "react-native-sqlite-storage"

const db = openDatabase({
    name: "NCityDB"
})



const createTableUsers =()=>{
    db.transaction(tnx=>{
        tnx.executeSql(
            "CREATE TABLE IF NOT EXISTS users (id INTEGER, email TEXT, usertag TEXT, name1 TEXT, name2 TEXT, tags TEXT, photoURL TEXT, bio TEXT)",
            [],
            ()=>{ console.log("table users")},
            err =>{console.log(err)}
        )
    })
}

const addUser =(id, email, usertag, name1, name2, tags, photoURL, bio)=>{
    db.transaction(tnx=>{
        tnx.executeSql(
            "INSERT INTO users (id, email, usertag, name1, name2, tags, photoURL, bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [id, email, usertag, name1, name2, tags, photoURL, bio],
            ()=>{ console.log("table users")},
            err =>{console.log(err)}
        )
    })
}

const checkUser =(id, userOutput)=>{
    db.transaction(tnx=>{
        tnx.executeSql(
            "SELECT * FROM users WHERE id = ?",
            [id],
            (sqlTnx, res)=>{
                userOutput = res[0]
                 
                },
            err =>{console.log(err)}
        )
    })
}

const user = async (id)=>{
    createTableUsers()
    let searchingUser
    checkUser(id, searchingUser)
    console.log(searchingUser)
    if(!searchingUser){
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
    console.log(searchingUser)
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

export {user, userOnlyBD}