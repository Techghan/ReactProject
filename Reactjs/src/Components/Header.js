import React from 'react';
import {NavLink} from 'react-router-dom';
//import {Nav} from 'reactstrap';

function Header() {
    return(
    <div className="header-section" expand="ls">
      <div className="color top_nav  p-2 row col-sm-12">
          <div className="col-sm-2 pl-0 pr-5"> 
                           
         </div> 
        <div className="col-sm-8 pl-5 ">
         
        <nav class="navbar navbar-expand-lg navbar-light ">
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                     <li className="nav-item mt-2 p-0 "><NavLink className=" text-white" to="/Dashbord"><i class="fa fa-home "></i></NavLink></li>
                     <li className="nav-item dropdown mb-2 ml-1 mr-1 p-0 ">
                     <NavLink to="/" className="dropbtn mb-3 ml-1 nav-link mr-1 p-2"><i class="fa fa-users "></i> <small><b> User</b> </small> </NavLink>
                     <ul class="dropdown-content">
                        <li><NavLink to="/Master"><small> Master </small></NavLink> </li>
                        <li><NavLink to="/User"> <small>Users</small></NavLink></li>
                        <li><NavLink to="/Closeuser"> <small>Close Users </small></NavLink></li>
                     </ul>
                  </li>
               <li className="nav-item mr-2 ml-1 mt-2 p-0 "><NavLink  to="Blockmarket" className="text-white t"><small> <b>BlockMarket</b></small></NavLink></li>
                  <li className="nav-item mr-2 ml-1 mt-2 p-0"><NavLink className="endcooki text-white t" to="/Master"> <small><b> Favorite</b> </small></NavLink></li>
                  <li className="nav-item mr-2 ml-1 mt-2 p-0"><NavLink to="/Mymarketpl" className="text-white"><small><b> MyMarket</b></small> </NavLink></li>
                  <li className="nav-item dropdown ml-1 mt-2 mr-1 p-0">
                  <li className="dropbtn mr-2 ml-1 mb-3  p-0"> <small> <b>Report</b></small> </li>
                     <ul class="dropdown-content">
                        <li><NavLink to="/Accinfo"> <small>Account Info </small> </NavLink> </li>
                        <li><NavLink to="/Cacstatement"> <small>Account Statement </small> </NavLink> </li>
                        <li><NavLink to="/NewSummery"> <small>Chip Summary </small> </NavLink> </li>      
                        <li><NavLink to="/ClientPl"> <small>Client P L </small></NavLink> </li>
                        <li><NavLink to="/Marketpl"><small> Market P L </small> </NavLink> </li>
                        <li><NavLink to="/Sportpl"><small> Sport P L</small> </NavLink> </li>
                        <li><NavLink to="/Userpl1"> <small>User P L</small> </NavLink> </li>
                        <li><NavLink to="/Profitloss"> <small> Profit & Loss</small> </NavLink> </li>
                        <li><NavLink to="/Bethistory"><small> Bet History</small> </NavLink> </li>
                              <li><NavLink to="/Livegame"> <small>Livegame </small> </NavLink> </li>
                        <li><NavLink to="/Fancystack"> <small>Fancy Stack </small></NavLink> </li>                            
                      </ul>
                   </li> 
                <li className="mr-4 nav-item ml-1 mt-2 p-0"><NavLink className="endcooki text-white" to="/Master"><small><b>New TeenPatti </b> </small></NavLink></li>                                                          
                <li className="mr-4 nav-item ml-1 mt-2 p-0"><NavLink className="endcooki text-white" to="/Master"><small><b> Live Games</b> </small></NavLink></li>                                                          

                </ul>
  
  </div>
</nav>

         </div>   
           
      </div> 
   <div className="marquee color m-0  bg-dark">
        <marquee> <i class="fa fa-bell-o"></i> welcome <i class="fa fa-bell-o"></i> </marquee>
         </div>
          </div>             
    );
}
export default Header;