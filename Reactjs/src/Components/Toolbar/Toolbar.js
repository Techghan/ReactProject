import React from 'react';
import{NavLink} from 'react-router-dom';
import './Toolbar.css';
//import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props =>(
   <header className="toolbar">
          <nav className="toolbar_navigation"> 
              <div className="toogle"> 
                  <DrawerToggleButton click={props.drawerClickHandler}/>
              </div>
              <div className="toolbar_logo"><a href="/"> 
              
              <div class="nav_title mr-auto  ml-0 mr-5 pl-0">
            <NavLink to="http://park9.bet/dashboard" class="site_title"> 
            <img className="m-0 pl-0" src="http://park9.bet/assets/uploads/park9bet.png?version=8885542525214758147741885" alt=""/> 
            </NavLink>
            </div> 
              
              </a> </div>
              <div className="spacer" />
              <div className="toolbar_navigation-items"> 
              <ul className="ul">
                     <li className="nav-item mt-2 p-0 "><NavLink className=" text-white" to="/Dashbord"><i class="fa fa-home "></i></NavLink></li>
                     <li className="nav-item dropdown mb-2 ml-1 mr-1 p-0 ">
                     <NavLink to="/" className="dropbtn mb-3 ml-1 nav-link mr-1 p-2"><i class="fa fa-users "></i> <small><b> User</b> </small> </NavLink>             
                       <ul class="dropdown-content">
                        <li><NavLink className="text-dark" to="/Master"><small> Master </small></NavLink> </li>
                        <li><NavLink className="text-dark" to="/User"> <small>Users</small></NavLink></li>
                        <li><NavLink className="text-dark" to="/Closeuser"> <small>Close Users </small></NavLink></li>
                     </ul>
                  </li>
               <li className="nav-item mr-2 ml-1 mt-2 p-0 "><NavLink  to="Blockmarket" className="text-white t"><small> <b>BlockMarket</b></small></NavLink></li>
                  <li className="nav-item mr-2 ml-1 mt-2 p-0"><NavLink className="endcooki text-white t" to="/Master"> <small><b> Favorite</b> </small></NavLink></li>
                  <li className="nav-item mr-2 ml-1 mt-2 p-0"><NavLink to="/Mymarketpl" className="text-white"><small><b> MyMarket</b></small> </NavLink></li>
                  <li className="nav-item dropdown ml-1 mt-2 mr-1 p-0">
                  <li className="dropbtn mr-2 ml-1 mb-3 text-white p-0"> <small><b>Report</b></small> </li>
                     <ul class="dropdown-content">
                        <li><NavLink className="text-dark" to="/Accinfo"> <small>Account Info </small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/Cacstatement"> <small>Account Statement </small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/NewSummery"> <small>Chip Summary </small> </NavLink> </li>      
                        <li><NavLink className="text-dark" to="/ClientPl"> <small>Client P L </small></NavLink> </li>
                        <li><NavLink className="text-dark" to="/Marketpl"><small> Market P L </small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/Sportpl"><small> Sport P L</small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/Userpl1"> <small>User P L</small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/Profitloss"> <small> Profit & Loss</small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/Bethistory"><small> Bet History</small> </NavLink> </li>
                              <li><NavLink className="text-dark" to="/Livegame"> <small>Livegame </small> </NavLink> </li>
                        <li><NavLink className="text-dark" to="/Fancystack"> <small>Fancy Stack </small></NavLink> </li>                            
                      </ul>
                   </li> 
                <li className="mr-4  ml-1 mt-2 p-0"><NavLink className="endcooki text-white" to="/Master"><small><b>New TeenPatti </b> </small></NavLink></li>                                                          
                <li className="mr-4 nav-item ml-1 mt-2 p-0"><NavLink className="endcooki text-white" to="/Master"><small><b> Live Games</b> </small></NavLink></li>                                                                                                  
                </ul>
              </div>
                <div className="sidemenu" style={{paddingBottom:'120px'} }>                                                                                                                                                                                         
          <div className="nav navbar-nav  text-white navbar-right">
         <div className="belance-top px-2 mx-1 my-1 v">Main: <span class="mWallet">395,000.00</span> </div>
         <div className="belance-top px-2 mx-1 mb-1 v">Exposure: <span class="liability">0.00</span> </div>
         <div className="belance-top px-2 mx-1 mb-1 v"><i class="fa fa-user-circle-o px-1"></i>Demo<span className="px-1 fa fa-angle-down"></span></div>       
         </div>  
                      
             </div>

          </nav>
     </header>
);

export default toolbar;