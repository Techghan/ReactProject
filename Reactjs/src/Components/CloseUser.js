import React from 'react';
import {NavLink} from 'react-router-dom'
function Closeuser()
{
 return(

      <div class="mt-2 body">
                   <div class="" id="sticky">
              <div class="ajax-call-hide">
     
  </div>
  <div id="userModal" class="modal fade" role="dialog">
     <div class="modal-dialog">
        <div class="modal-content">
        </div>
     </div>
  </div>
  <div class="right_col" role="main">
     <div class="col-md-12">
        <div class="title_new_at">
           Closed Users
           <form class="usersech user-mobile" id="userListForm">
              <input type="hidden" name="formSubmit" value="1"/>
              <input type="hidden" name="perpage" id="perpage" value=""/>
              <input type="text" name="mstruserid" id="mstruserid" placeholder="Search here"  value=""/>
              <button class="fa fa-search"></button>
           </form>
        </div>
     </div>
     <div class="clearfix"></div>
     <div class="row">
        <div class="popup_col_6">
            <div class="tab_bets m-0 p-0 get-mchlist">
                <ul id="betsalltab" class="nav  nav-pills">
                  <li class="active pt-2 pl-0 pb-2">
                        <NavLink to="http://park9.bet/closeusers/3"><small>Master</small></NavLink>
                    </li>
                                                        <li class="pt-2 pl-0 pb-1">
                        <NavLink to="http://park9.bet/closeusers/4"><small>Users</small></NavLink>
                    </li>
                  </ul>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
           <div class="x_panel userwidth1">
              <div class="row detailtop deskaction" style={{margin:0}}>
                 <div class="lastdetail">
                                      <span class="detailinfo"><b>Se</b> : Close settlement</span>
                    <span class="detailinfo"><b>S</b> : Statement</span>
                    <span class="detailinfo"><b>PL</b> : Profit Loss</span>
                    <span class="detailinfo"><b>I</b> : View Info</span>
                     <span class="detailinfo"><b>P-R</b> : Partnerhsip</span>
                    <span class="detailinfo"><b>P</b> : Change Password</span>
                    <span class="detailinfo"><b>D-W</b> : Free Chip In Out</span>
                    <span class="detailinfo"><b>C</b> : Close Account</span>
                 </div>
              </div>
              <div id="divLoading"></div>
       {/* <!--Loading class -->  */}     
              <div class="x_content">
                 <div class="" id="contentreplace">
                    <table class="table table-striped table-sm jambo_table bulk_action" id="datatabless">
                       <thead>
                          <tr class="headings">
                             <th>S.No.</th>
                             <th>User ID</th>
                             <th>Website</th>
                             <th>Credit Limit</th><th>Credit given</th><th> Hyper</th><th>Super Master</th>                           <th>Balance
                                 <NavLink to="http://park9.bet/userList/3/?sort=asc&type=bal"
                                class="glyphicon glyphicon-arrow-up"> </NavLink>
                                <NavLink to="http://park9.bet/userList/3/?sort=desc&type=bal"
                                   class="glyphicon glyphicon-arrow-down"></NavLink>
                             </th>
                             <th>Partnership <NavLink
                                to="http://park9.bet/userList/3/?sort=asc&type=par"
                                class="glyphicon glyphicon-arrow-up"> </NavLink>
                                <NavLink to="http://park9.bet/userList/3/?sort=desc&type=par"
                                   class="glyphicon glyphicon-arrow-down"></NavLink>
                             </th>
                              <th>M.comm</th> <th>S.comm</th>                           <td></td>
                             <th class="deskaction">
                                <span>A</span>                              <span>S</span>
                                <span>PL</span>
                                                              <span>I</span>
                                                              <span>P-R</span>
                                <span>P</span>
                                <span>D-W</span>
                             </th>
                             <th class="mobaction">Action</th>
                                                     </tr>
                       </thead>
                       <tbody>
                          <tr><th colspan = '6'>No record found</th></tr>                     </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
  <div id="lockunlockModal" class="modal fade" role="dialog">
     <div class="modal-dialog">
        <div class="modal-content">
           <div class="popup_form">
              <div class="title_popup">
                 <span> User Setting</span> 
                 <button type="button" class="close" data-dismiss="modal"  >
                    <div class="close_new"><i class="fa fa-times-circle"></i> </div>
                 </button>
              </div>
              <div class="content_popup">
                 <div class="popup_form_row">
                    <div class="popup_col_12">
                       <label class="col-sm-12 control-label m-t-xs">
                          <p></p>
                       </label>
                       <input type="hidden" id="updUserSerial" />
                       <input type="hidden" id="updUserVal" />
                       <input type="hidden" id="updUserType" />
                    </div>
                    <div class="popup_col_12">
                       <button type="button" class="blue_button" onclick="updateUserSett()" >Yes</button>
                       <button type="button" class="red_button" data-dismiss="modal">Close</button>
                              </div>
                           </div>
                          </div>
                     </div>
                 </div>
              </div>
           </div> 
       </div>  
      </div>
         
    );
    }
 
    export default Closeuser;
  
   
