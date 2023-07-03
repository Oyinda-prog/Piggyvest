import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {ReactErrorOverlay}  from 'react-error-overlay'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
 )

// ReactErrorOverlay.wrap(ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <App />
//   </React.StrictMode>,
// ) )
{/* <button></button> */}

<script>

</script>