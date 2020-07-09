import React from 'react';
import { NavLink } from 'react-router-dom';

function User(){
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
         <span class="lable-user-name p-1">
          Users Listing
         </span>
         <select class="user-select"  onchange="perPage(this.value)">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
         </select>
         <input type="hidden" name="ajaxUrl" id="ajaxUrl" value="userList"/>
         <form class="usersech user-mobile" id="formSubmit" method="post"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/>
            <input type="hidden" name="getUserType" id="getUserType" value="4"/>
            <input type="hidden" name="parentID" id="parentID" value=""/>
            <input type="hidden" name="formSubmit" value="1"/>
            <input type="hidden" name="perpage" id="perpage"/>
            <input type="text" name="mstruserid" id="mstruserid" placeholder="Search here" value=""/>
            <button class="fa fa-search text-white" id="submit_form_button" data-attr="submit"></button>
         </form>
         <select class="user-mobile custom-user-select" id="useraction">
            <option value="">Select Action</option>
            <option value="lgnusrlckbtng-0">Lock Betting</option>
            <option value="lgnusrlckbtng-1">Open Betting</option>
            <option value="mstrlock-0">Lock User</option>
            <option value="mstrlock-1">Unlock User</option>
            <option value="lgnusrCloseAc-0">Close User Account</option>
                     </select>
         <button class="btn btn-warning ml-1 pb-0 pt-1 btn-sm" onclick="setAction()" >
         ACTION
         </button>
                        </div>
   </div>
   <div class="clearfix"></div>
   <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
            <div id="divLoading"></div>

               <div class="custom-scroll appendAjaxTbl">
                  <table class="table table-sm jambo_table bulk_action" id="datatabless">
                     <thead >
                        <tr class="headings ">
                           <th>S.No.</th>
                           <th>User ID
                              <NavLink to="http://park9.bet/userList/4/145315?sort=asc&type=userId"
                              class="glyphicon glyphicon-arrow-up"> </NavLink>
                              <NavLink to="http://park9.bet/userList/4/145315?sort=desc&type=userId"
                                 class="glyphicon glyphicon-arrow-down"></NavLink>
                           </th>
                           <th>Website</th>
                           <th>Master</th>                           <th>Winnings
                              <NavLink to="http://park9.bet/userList/4/145315?sort=asc&type=win"
                                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                              <NavLink to="http://park9.bet/userList/4/145315?sort=desc&type=win"
                                 class="glyphicon glyphicon-arrow-down"></NavLink>
                           </th>
                           <th>Credit Limits
                              <NavLink to="http://park9.bet/userList/4/145315?sort=asc&type=crLimit"
                                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                              <NavLink to="http://park9.bet/userList/4/145315?sort=desc&type=crLimit"
                                 class="glyphicon glyphicon-arrow-down"></NavLink>
                           </th>
                           <th>Exposure
                              <NavLink to="http://park9.bet/userList/4/145315?sort=asc&type=exposure"
                                 class="glyphicon glyphicon-arrow-up"> </NavLink>
                              <NavLink to="http://park9.bet/userList/4/145315?sort=desc&type=exposure"
                                 class="glyphicon glyphicon-arrow-down"></NavLink>
                           </th>
                           <th>Balance</th>
                            <th>M.comm</th> <th>S.comm</th>                                                                                 <th>
								View More
                           </th>
                         
                                                   </tr>
                     </thead>
                     <tbody>
                                                <tr id="user_row_152262">
                           <td>1                              <input type="checkbox" value="152262"
                                 class="select-users mt-1"/>
                           </td>
                           <td class=" ">
                              <span class="m-bg">
                              pari12345(pari12345)                              </span>
                           </td>
                           <td>park9.bet</td>
                           <td>parik</td>                           <td class=" ">0 </td>
                           <td class=" ">20000 </td>
                           <td class=" "><NavLink class="btn btn-success btn-sm" to=" http://park9.bet/report/openbethistory?user_id=152262&Usertype=4"> 0.00</NavLink>
                           </td>
                           <td class=" ">20000 </td>
                           <td class=" ">0.00</td><td class=" ">0.00</td>                  
                                             <td class="last">
							<span class="dropdown">
							  <NavLink to="#" class="dropdown-toggle btn btn-sm   px-1  py-0 mt-1 btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span class="caret"></span></NavLink>
							  <ul class="dropdown-menu">
								<li>
																</li>
								<li> <NavLink class=""
                                    to=" http://park9.bet/CacStatement/152262">
                                 <span>Statement</span> </NavLink></li>
								<li><NavLink class=""
                                    to=" http://park9.bet/report/profitloss/152262">
                                 <span>Profit Loss</span> </NavLink></li>
								<li>
								  
                                 <NavLink class="" to="javascript:;"
                                    title="View Account Info"
                                    onclick="view_account('152262');"><span>View Info</span></NavLink>
                                  
								</li>
																<li> <NavLink class="" to="javascript:;"
                                    title="Change Password"
                                    onclick="view_change_passs('152262');"><span>Change Password</span></NavLink></li>
								<li> <NavLink class="" to="javascript:;"
                                    title="Free Chip In Out"
                                    onclick="free_chips_in_out('152262','D');"><span>Free Chip Deposit</span></NavLink></li>
								<li>
									 <NavLink class="" to="javascript:;"
                                    title="Free Chip In Out"
                                    onclick="free_chips_in_out('152262','W');"><span>Free Chip Withdrawal</span></NavLink>
								</li>
							  </ul>
							</span>
                           </td>
                                                   </tr>
                                                <tr id="user_row_145441">
                           <td>2                              <input type="checkbox" value="145441"
                                 class="select-users mt-1"/>
                           </td>
                           <td class=" ">
                              <span class="m-bg">
                              rahul2610(Rahul)                              </span>
                           </td>
                           <td>park9.bet</td>
                           <td>sameer</td>                           <td class=" ">0 </td>
                           <td class=" ">0 </td>
                           <td class=" "><NavLink class="btn btn-success btn-sm" to=" http://park9.bet/report/openbethistory?user_id=145441&Usertype=4"> 0.00</NavLink>
                           </td>
                           <td class=" ">0 </td>
                           <td class=" ">0.00</td><td class=" ">0.00</td>                  
                                             <td class="last">
							<span class="dropdown">
							  <NavLink to="#" class="dropdown-toggle btn btn-sm   px-1  py-0 mt-1 btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span class="caret"></span></NavLink>
							  <ul class="dropdown-menu">
								<li>
																</li>
								<li> <NavLink class=""
                                    to=" http://park9.bet/CacStatement/145441">
                                 <span>Statement</span> </NavLink></li>
								<li><NavLink class=""
                                    to=" http://park9.bet/report/profitloss/145441">
                                 <span>Profit Loss</span> </NavLink></li>
								<li>
								  
                                 <NavLink class="" to="javascript:;"
                                    title="View Account Info"
                                    onclick="view_account('145441');"><span>View Info</span></NavLink>
                                  
								</li>
																<li> <NavLink class="" to="javascript:;"
                                    title="Change Password"
                                    onclick="view_change_passs('145441');"><span>Change Password</span></NavLink></li>
								<li> <NavLink class="" to="javascript:;"
                                    title="Free Chip In Out"
                                    onclick="free_chips_in_out('145441','D');"><span>Free Chip Deposit</span></NavLink></li>
								<li>
									 <NavLink class="" to="javascript:;"
                                    title="Free Chip In Out"
                                    onclick="free_chips_in_out('145441','W');"><span>Free Chip Withdrawal</span></NavLink>
								</li>
							  </ul>
							</span>
                           </td>
                                                   </tr>
                                             </tbody>
                     <tfoot>
                       <tr><td colspan="5"></td><td colspan="9">Total Balance: 20000</td></tr>
                     </tfoot>
                  </table>
                  <p class="pull-left">Showing 1 to 2 of 2 entries </p>
                  <p id="paginateClick" class="pull-right pagination-row dataTables_paginate paging_simple_numbers"></p>
               </div>
         </div>
       </div>
      </div>
     </div>
    </div>
   
   );
  }

export default User;
  