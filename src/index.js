import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import addReactNDevTools from 'reactn-devtools';
addReactNDevTools();

import { App } from './app'

import './styles/index.scss'

ReactDOM.render(
  <App/>,
  document.getElementById('App')
)
