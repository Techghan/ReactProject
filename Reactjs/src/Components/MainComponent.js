import React,{Component} from 'react';
import Footer from './Footer';
import Marketpl from './Marketpl'
import Test from './Dashbord';
import Master from './Master';
import User from './User';
import Userpl1 from './Userpl1';
import Sportpl from './Sportpl';
import Profitloss from './Profitloss';
import NewSummery from './NewSummery';
import Mymarket from './Mymrket';
import Livegame from './LiveGame';
import FancyStack from './FancyStack';
import CloseUser from './CloseUser';
import ClientPl from './ClientPl';
import ChangePassword from './ChangePassword';
import Cacstatement from './Cacstatement';
import Blockmarket from './Blockmarket';
import Bethistory from './Bethistory';
import Accinfo from './Accinfo';
import Header from './HeaderComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
//import Clientpl from './ClientPl';

class Main extends Component{
    render(){
    return(
    <div className="Main"> 
      <Header/>
       <Switch>
         <Route path="/Master">
           <Master/>
           </Route> 
            <Route path="/Marketpl">
           <Marketpl/>
          </Route> 
          <Route path="/Dashbord">
             <Test/>      
          </Route>
          <Route path="/User">
             <User/>             
            </Route>
          <Route path="/Userpl1">
            <Userpl1/>
        </Route> 
       <Route path="/Sportpl">
          <Sportpl/>
       </Route>
      <Route path="/Profitloss">
         <Profitloss/>
         </Route>   
        <Route path="/NewSummery">
        <NewSummery/>
       </Route>
      <Route path="/Mymarketpl">
         <Mymarket/>
      </Route>    
      <Route path="/Livegame">
        <Livegame/>         
      </Route>
     <Route path="/FancyStack">
        < FancyStack/>
        </Route> 
       <Route path="/CloseUser">
       <CloseUser/>      
      </Route > 
        <Route path="/ClientPl">
        <ClientPl/>     
     </Route>  
   
      <Route path="/ChangePassword">
        <ChangePassword/>
      </Route> 
        <Route path="/Cacstatement">
          <Cacstatement/>
       </Route>
       <Route path="/Blockmarket">
         <Blockmarket/>
         </Route> 
         <Route path="/Bethistory">
        <Bethistory/>
         </Route>
        <Route path="/Accinfo">
          <Accinfo/>
           </Route>
         <Redirect to="/Dashbord" />   
       </Switch> 
       <Footer/>
    </div>
     );
    }
  }
export default Main;
