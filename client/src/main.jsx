import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/index'
import { store } from './store/index'
import { Provider } from 'react-redux'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
