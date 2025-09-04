import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div class="sub-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <ul class="info">
                <li><i class="fa fa-envelope"></i> info@company.com</li>
                <li><i class="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul class="social-links">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
      <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        
                        <a href="index.html" class="logo">
                            <h1>Villa</h1>
                        </a>
                        
                        
                        <ul class="nav">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/students">Subjects</Link></li>
                          <li><Link to="/demoeffect">DemoEffect</Link></li>
                          <li><a href="contact.html">Contact Us</a></li>
                          <li><a href="#"><i class="fa fa-calendar"></i> Schedule a visit</a></li>
                      </ul>   
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        
                    </nav>
                </div>
            </div>
        </div>
      </header>

      <Outlet />


      <footer>
        <div class="container">
          <div class="col-lg-8">
            <p>Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. 
            
            Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout