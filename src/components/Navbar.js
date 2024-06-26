import React, {useState} from 'react'
// import PropTypes from 'prop-types' //impt


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="">Home</a>
        <a className="nav-link" href="">About</a>
      </div>
    </div>
    <div className="color-pallets mx-3">
      <button className='mx-3' onClick={() => props.setTheme('Theme 1', '#42669e','primary')} style={{borderRadius:'5px',
                      backgroundColor:'#42669e'  ,
                      color:'white'
                    }}>theme 1</button>
      <button className='mx-3' onClick={() => props.setTheme('Theme 2', '#0b4d40','success')} style={{borderRadius:'5px',
                      backgroundColor:'#0b4d40'  ,
                      color:'white'
                    }}>theme 2</button>
      <button className='mx-3' onClick={() => props.setTheme('Theme 3', '#3b1a09','warning')}  style={{borderRadius:'5px',
                      backgroundColor:'#3b1a09'  ,
                      color:'white'
                    }}>theme 3</button>
    </div>
    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} mode</label>
    </div>
  </div>
</nav>
    </>
  )
}
