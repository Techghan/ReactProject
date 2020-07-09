import React from 'react';
import './SideDrawer.css';
import {NavLink} from 'react-router-dom';

/*js for sidebar*/


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent = this.nextElementSibling;
   if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
   } else {
      dropdownContent.style.display = "block";
   }
})

}

const SideDrawer = props => {
    let drawerClasses ='side-drawer';
    if(props.show)
    {
        drawerClasses='side-drawer open';
    }

 return(
 <nav className={drawerClasses}>
    <ul className="text-white mt-2 pt-5 pb-5 ">
                     <li className="m-0 p-0"><NavLink className=" text-white" to="/Dashbord"><i class="fa fa-home "></i></NavLink></li>
                       <li className="m-0 p-0"> <NavLink to="/" className="text-white t"><i class="fa fa-users "></i> <small><b> User</b> </small> </NavLink> </li>                    
                        <li className="m-0 p-0 "><NavLink to="/Master" className="text-white"><small><b> Master</b> </small></NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/User" className="text-white"> <small><b>Users</b></small></NavLink></li>
                        <li className="m-0 p-0"><NavLink to="/Closeuser" className="text-white"> <small><b>Close Users</b></small></NavLink></li>
                        <li className="m-0 p-0"><NavLink  to="Blockmarket" className="text-white t"><small> <b>BlockMarket</b></small></NavLink></li>
                        <li className="m-0 p-0"><NavLink className=" text-white " to="/Master"> <small><b> Favorite</b> </small></NavLink></li>
                        <li className="m-0 p-0"><NavLink to="/Mymarketpl" className="text-white"><small><b> MyMarket</b></small> </NavLink></li>
                        <li className="m-0 p-0"><NavLink to="/Accinfo" className=" text-white"> <small><b>Account Info</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Cacstatement"className="text-white" > <small><b>Account Statement</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/NewSummery"className="text-white" > <small><b>Chip Summary</b> </small> </NavLink> </li>      
                        <li className="m-0 p-0"><NavLink to="/ClientPl" className=" text-white"> <small><b>Client P L</b></small></NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Marketpl" className=" text-white"><small><b> Market P L</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Sportpl"className= "text-white" ><small><b> Sport P L</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Userpl1"className="text-white" > <small><b>User P L</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Profitloss"className="text-white" > <small> <b>Profit & Loss</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Bethistory"className="text-white" ><small> <b>Bet History</b></small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Livegame" className="text-white"> <small> <b>Livegame</b> </small> </NavLink> </li>
                        <li className="m-0 p-0"><NavLink to="/Fancystack" className="text-white"> <small><b> Fancy Stack</b> </small></NavLink> </li>                            
                         <li className="m-0 p-0"><NavLink className=" text-white" to="/Master"><small><b>New TeenPatti </b> </small></NavLink></li>                                                          
                        <li className="m-0 p-0"><NavLink className=" text-white" to="/Master"><small><b> Live Games</b> </small></NavLink></li>                                                                                                  
                        </ul>
            
   {/* javascript for sidebar */}
   
                      
                   
          
   
    </nav>
    );
};

export default SideDrawer;

