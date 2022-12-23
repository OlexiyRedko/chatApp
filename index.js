/**
 * @format
 */
 import React, { useEffect, useRef, useState} from 'react'
import {AppRegistry} from 'react-native';
import MainApp from './src/MainApp';
import Scr1 from './src/Screen1';
import Login from './src/Login'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainApp);

