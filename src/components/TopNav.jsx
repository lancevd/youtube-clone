import React from 'react'
import { authentication } from './Signin/firebase'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const TopNav = () => {

    function SignIn() {
        // create a provider
        const provider = new GoogleAuthProvider
        signInWithPopup(authentication, provider)
        .then((res) => {
            console.log(res)
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    const navToggler = document.getElementById('nav-toggler')
    const collapseSidebar = document.getElementById('collapsed-sidebar')
    const expandSidebar = document.getElementById('expanded-sidebar')
    const sidebar = document.querySelector('aside');
    const mainDisplay =document.querySelector('.main-display');

    function toggleSidebar () {
        // Collapse Sidebar
        if (collapseSidebar.classList.contains('hidden')) {
            collapseSidebar.classList.remove('hidden')
            expandSidebar.classList.add('hidden')
            sidebar.style = 'grid-column: 1/2;';
            mainDisplay.style = 'grid-column: 2/-1'
        // Expand Sidebar
        } else if (expandSidebar.classList.contains('hidden')) {
            expandSidebar.classList.remove('hidden')
            collapseSidebar.classList.add('hidden')
            sidebar.style = 'grid-column: 1/4;'
            mainDisplay.style = 'grid-column: 4/-1'
        }
    }


// navToggler.addEventListener('click', toggleSidebar);


  return (
    <nav className="p-3 position-sticky">
        <div id="nav-bar" className="row justify-content-between align-items-center">
            <div id="navbar-left" className="col col-md-2 d-flex gap-4">
                <div onClick={toggleSidebar} className="d-none nav-icon d-lg-block" id="nav-toggler"><i className='bx bx-menu'></i></div>
                <div id="nav-logo"><i className='bx bxl-youtube'></i></div>        
            </div>
            <div id="navbar-center" className="col col-md-6 d-flex justify-content-center gap-3 align-items-center" >
                <div className="input-group d-none d-lg-flex">
                    <input type="text" id="nav-searchbar" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className='bx bx-search'></i></button>
                </div>
                <div id="nav-mic" className="d-none nav-icon d-lg-flex"><i className='bx bx-microphone'></i></div>
            </div>
            <div id="navbar-right" className="col col-md-2 d-flex gap-4 justify-content-end">
                <div id="icon-upload" className="d-none nav-icon d-lg-block"><i className='bx bx-upload'></i></div> 
                <div id="noti-bell" className="d-none nav-icon d-lg-block"><i className='bx bx-bell'></i></div>
                <div id="search-mobile" className="d-lg-none nav-icon"><i className='bx bx-search'></i></div>
                <div id="profile-pic" className="nav-icon" onClick={SignIn}><i className='bx bx-user'></i></div>
            </div>
            {/* <i className='bx bx-user'></i>
            <i className='bx bxl-facebook-square'></i> 
            <box-icon type='solid' name='hot'></box-icon>
             */}
            
        </div>
    </nav>
  )
}

export default TopNav