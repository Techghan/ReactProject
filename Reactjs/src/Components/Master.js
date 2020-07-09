import React from 'react';
import { NavLink } from 'react-router-dom';

function Master()
 {
 return(
    <div class="mt-2 body">
    <div class="" id="sticky">

<div id="userModal" class="modal fade" role="dialog">
<div class="modal-dialog">
<div class="modal-content">
</div>
</div>
</div>
<div class="right_col" role="main">
<div class="col-md-12">
<div class="title_new_at">
<span class="lable-user-name p-0">
Master Listing
</span>
<select class="user-select text-dark" onchange="perPage(this.value)">
<option value="10">10</option>
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select>
<input type="hidden" name="ajaxUrl" id="ajaxUrl" value="userList"/>
<form class="usersech user-mobile" id="formSubmit" method="post"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/>
<input type="hidden" name="getUserType" id="getUserType" value="3"/>
<input type="hidden" name="parentID" id="parentID" value=""/>
<input type="hidden" name="formSubmit" value="1"/>
<input type="hidden" name="perpage" id="perpage"/>
<input type="text" name="mstruserid" id="mstruserid" placeholder="Search here" value=""/>
<button class="text-white fa fa-search fa-sm px-1 pt-1 ml-1" id="submit_form_button" data-attr="submit"></button>
</form>
<select class="user-mobile custom-user-select text-dark" id="useraction" >
<option value="">Select Action</option>
<option value="lgnusrlckbtng-0">Lock Betting</option>
<option value="lgnusrlckbtng-1">Open Betting</option>
<option value="mstrlock-0">Lock User</option>
<option value="mstrlock-1">Unlock User</option>
<option value="lgnusrCloseAc-0">Close User Account</option>
        </select>
<button class="btn btn-warning btn-sm ml-1 " onclick="setAction()" >
 <small> ACTION </small>
</button>
     <button class="btn btn-warning btn-sm ml-1 pt-1" onclick="addUser(145315,3)" >
   <small>  ADD USER  </small>
</button>
           </div>
</div>
<div class="clearfix"></div>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div id="divLoading"></div>

  <div class="custom-scroll appendAjaxTbl">
     <table class="table  jambo_table bulk_action table-sm" id="datatabless">
        <thead className="">
           <tr class="headings">
              <th className="">S.No.</th>
              <th>User ID <NavLink
                 to="http://park9.bet/userList/3/145315?sort=asc&type=userId"
                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                 <NavLink to="http://park9.bet/userList/3/145315?sort=desc&type=userId"
                    class="glyphicon glyphicon-arrow-down"></NavLink>
              </th>
              <th>Website</th>
              <th>Credit Limit</th><th>Credit given</th>                           <th>Balance <NavLink
                 to="http://park9.bet/userList/3/145315?sort=asc&type=bal"
                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                 <NavLink to="http://park9.bet/userList/3/145315?sort=desc&type=bal"
                    class="glyphicon glyphicon-arrow-down"></NavLink>
              </th>
              <th>Partnership <NavLink
                 to="http://park9.bet/userList/3/145315?sort=asc&type=par"
                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                 <NavLink to="http://park9.bet/userList/3/145315?sort=desc&type=par"
                    class="glyphicon glyphicon-arrow-down"></NavLink>
              </th>
              <th>Partnership Cacino <NavLink
                 to="http://park9.bet/userList/3/145315?sort=asc&type=par"
                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                 <NavLink to="http://park9.bet/userList/3/145315?sort=desc&type=par"
                    class="glyphicon glyphicon-arrow-down"></NavLink>
              </th>
              
              <th>Partnership TeenPatti<NavLink
                 to="http://park9.bet/userList/3/145315?sort=asc&type=par"
                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                 <NavLink to="http://park9.bet/userList/3/145315?sort=desc&type=par"
                    class="glyphicon glyphicon-arrow-down"></NavLink>
              </th>
              
              
              
               <th>M.comm</th> <th>S.comm</th>   
                  <th>View More </th>
                        </tr>
        </thead>
        <tbody>
          <tr id="user_row_152052">
 <td>1  <input type="checkbox" value="152052" class="select-users mt-1"/>
              </td>
              <td class="pb-0 ">
                 <span class="m-bg">
                                               <NavLink to="http://park9.bet/childList/152052/4"
                    title="View Child">        pa12345(parik)</NavLink>
                                               </span>
              </td>
              <td>park9.bet</td>
              <td>100000.00</td><td>20000.00</td><td class=" ">80000</td><td class=" ">0%</td><td class=" ">0%</td><td class=" ">0%</td><td class=" ">0.00</td><td class=" ">0.00</td>                  
                                <td class="last">
               <span class="dropdown">
                 <NavLink to="#" class="dropdown-toggle btn  btn-sm  px-1  py-0 mt-1 btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <small>View More </small><span class="caret"></span></NavLink>
                 <ul class="dropdown-menu">
                   <li>
                   <NavLink class="" to="javascript:;"
                       onclick="addUser(152052,4)"><span>Add User</span></NavLink>
                                                    </li>
                   <li> <NavLink class=""
                       to=" http://park9.bet/CacStatement/152052">
                    <span>Statement</span> </NavLink></li>
                   <li><NavLink class=""
                       to=" http://park9.bet/report/profitloss/152052">
                    <span>Profit Loss</span> </NavLink></li>
                   <li>
                     
                    <NavLink class="" to="javascript:;"
                       title="View Account Info"
                       onclick="view_account('152052');"><span>View Info</span></NavLink>
                     
                   </li>
                                                   <li> <NavLink class="" to="javascript:;"
                       title="Change Password"
                       onclick="view_change_passs('152052');"><span>Change Password</span></NavLink></li>
                   <li> <NavLink class="" to="javascript:;"
                       title="Free Chip In Out"
                       onclick="free_chips_in_out('152052','D');"><span>Free Chip Deposit</span></NavLink></li>
                   <li>
                        <NavLink class="" to="javascript:;"
                       title="Free Chip In Out"
                       onclick="free_chips_in_out('152052','W');"><span>Free Chip Withdrawal</span></NavLink>
                   </li>
                 </ul>
               </span>
              </td>
                                      </tr>
                                   <tr id="user_row_145440">
              <td>2                              <input type="checkbox" value="145440"
                    class="select-users mt-1"/>
              </td>
              <td class=" pb-0" >
                 <span class="m-bg">
                                               <NavLink to="http://park9.bet/childList/145440/4"
                    title="View Child">        Sameer11(sameer)</NavLink>
                                               </span>
              </td>
              <td>park9.bet</td>
              <td>0.00</td><td>0.00</td><td class=" ">0</td><td class=" ">0%</td><td class=" ">0%</td><td class=" ">0%</td><td class=" ">0.00</td><td class=" ">0.00</td>                  
                                <td class="last">
               <span class="dropdown">
                 <NavLink to="#" class="dropdown-toggle btn btn-sm px-1 mt-1 py-0 btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <small> View More</small> <span class="caret"></span></NavLink>
                 <ul class="dropdown-menu">
                   <li>
                                                    <NavLink class="" to="javascript:;"
                       onclick="addUser(145440,4)"><span>Add User</span></NavLink>
                                                    </li>
                   <li> <NavLink class=""
                       to=" http://park9.bet/CacStatement/145440">
                    <span>Statement</span> </NavLink></li>
                   <li><NavLink class=""
                       to=" http://park9.bet/report/profitloss/145440">
                    <span>Profit Loss</span> </NavLink></li>
                   <li>
                     
                    <NavLink class="" to="javascript:;"
                       title="View Account Info"
                       onclick="view_account('145440');"><span>View Info</span></NavLink>
                     
                   </li>
                                                   <li> <NavLink class="" to="javascript:;"
                       title="Change Password"
                       onclick="view_change_passs('145440');"><span>Change Password</span></NavLink></li>
                   <li> <NavLink class="" to="javascript:;"
                       title="Free Chip In Out"
                       onclick="free_chips_in_out('145440','D');"><span>Free Chip Deposit</span></NavLink></li>
                   <li>
                        <NavLink class="" to="javascript:;"
                       title="Free Chip In Out"
                       onclick="free_chips_in_out('145440','W');"><span>Free Chip Withdrawal</span></NavLink>
                   </li>
                 </ul>
               </span>
              </td>
                                      </tr>
                                   <tr id="user_row_145330">
              <td>3                       <input  type="checkbox" value="145330"
                    class="select-users mt-1"/>
              </td>
              <td class="pb-0" >
                 <span class="m-bg">
                                               <NavLink to="http://park9.bet/childList/145330/4"
                    title="View Child">        Raghu22(raghu)</NavLink>
                                               </span>
              </td>
              <td>park9.bet</td>
              <td>5000.00</td><td>0.00</td><td class=" ">5000</td><td class=" ">0%</td><td class=" ">0%</td><td class=" ">0%</td><td class=" ">0.00</td><td class=" ">0.00</td>                  
                                <td class="last">
               <span class="dropdown">
                 <NavLink to="#" class="dropdown-toggle btn btn-sm mt-1 py-0 px-1 btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <small> View More </small> <span class="caret"></span></NavLink>
                 <ul class="dropdown-menu">
                   <li>
                                                    <NavLink class="" to="javascript:;"
                       onclick="addUser(145330,4)"><span>Add User</span></NavLink>
                                                    </li>
                   <li> <NavLink class=""
                       to=" http://park9.bet/CacStatement/145330">
                    <span>Statement</span> </NavLink></li>
                   <li><NavLink class=""
                       to=" http://park9.bet/report/profitloss/145330">
                    <span>Profit Loss</span> </NavLink></li>
                   <li>
                     
                    <NavLink class="" to="javascript:;"
                       title="View Account Info"
                       onclick="view_account('145330');"><span>View Info</span></NavLink>
                     
                   </li>
                                                   <li> <NavLink class="" to="javascript:;"
                       title="Change Password"
                       onclick="view_change_passs('145330');"><span>Change Password</span></NavLink></li>
                   <li> <NavLink class="" to="javascript:;"
                       title="Free Chip In Out"
                       onclick="free_chips_in_out('145330','D');"><span>Free Chip Deposit</span></NavLink></li>
                   <li>
                        <NavLink class="" to="javascript:;"
                       title="Free Chip In Out"
                       onclick="free_chips_in_out('145330','W');"><span>Free Chip Withdrawal</span></NavLink>
                   </li>
                 </ul>
               </span>
              </td>
                                      </tr>
                                </tbody>
        <tfoot>
          <tr><td colspan="5"></td><td colspan="9">Total Balance: 85000</td></tr>
        </tfoot>
     </table>
     <p class="pull-left">Showing 1 to 3 of 3 entries </p>
     <p id="paginateClick" class="pull-right pagination-row dataTables_paginate paging_simple_numbers"></p>
  </div>
</div>
</div>
</div>
</div>
</div>
 );
 }
 export default Master;