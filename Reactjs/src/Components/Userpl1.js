import React from 'react';
import { NavLink } from 'react-router-dom';
function Userpl1(){
    return(
         <div>
             <div class="mt-2 body">
	             <div className="" id="sticky">
    <div class="right_col" role="main">
	    <div class="col-md-12">
		<div class="title_new_at m-0 pt-1 pb-0 "> User's PL 
		<div class="pull-right"><button class="btn btn-sm mb-1 btn-primary"  id="backbutton">Back</button></div>
		</div>
	    </div>
	    <div class="col-md-12 col-sm-12 col-xs-12">
	    <input type="hidden" name="ajaxUrl" id="ajaxUrl" value="report/userpl"/>
	    <form method="get" class="form-horizontal form-label-left input_mask userpl" id="formSubmit">
		<div class="clearfix data-background" >	
			 <div class="popup_col_2">
			<input type="text" name="from_date" value="2020-06-30 00:00:00" id="from-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="From date" autocomplete="off"  />
		    </div>
		    <div class="popup_col_2">
			<input type="text" name="to_date" value="2020-06-30 23:59:59" id="to-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="To date" autocomplete="off"  />
		    </div>

		    <div class="popup_col_1">
		    	<select name="filter_sport" class="form-control">
		    		<option value="cricket" cricket>Cricket</option>
		    		<option value="tennis" >Tennis</option>
		    		<option value="soccer" >Soccer</option>
		    		<option value="teenpatti" >Teenpatti</option>
		    		<option value="fancy" >Fancy</option>
		    	</select>
		    </div>
		    <div class="popup_col_1">
		    	<select name="filter_order" class="form-control">
		    		<option value="desc" >Top</option>
		    		<option value="asc" >Bottom</option>
		    	</select>
		    </div>
		    <div class="popup_col_1">
		    	<select name="filter_value" class="form-control">
		    		<option value="10" >10</option>
		    		<option value="25" >25</option>
		    		<option value="50" >50</option>
		    		<option value="100" >100</option>
		    	</select>
		    </div>
		    <div class="block_2 buttonacount">
				<button type="button" class="red_button mr-1" id="submit_form_button" value="filter" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
         <button type="button" class="red_button " ><i class="fa fa-eraser"></i> Clear </button>

			</div>
		 </div> 
		   					   
		<div class="p-0 m-0">
		<div id="betsalltab" class="tab_bets p-0 m-0">
			<div class="tl p-2 nav-pills match-lists">	
				<li><NavLink to="javascript:void(0);" dat-attr="m">Last Month</NavLink></li>
				<li><NavLink to="javascript:void(0);" dat-attr="w">Last Week</NavLink></li>
				<li><NavLink to="javascript:void(0);" dat-attr="y">Yesterday</NavLink></li>
				<li><NavLink to="javascript:void(0);" dat-attr="t">Today</NavLink></li>
			</div>
		</div>		 
		</div>	
		</form>

		<div id="divLoading"> </div>{/* <!--Loading class --> */}
		
		<div class="custom-scroll data-background appendAjaxTbl">
		<h5>Filter criteria : From <span class='span-from'>2020-06-30 00:00:00</span> To <span class='span-to'>2020-06-30 23:59:59</span>, 10 records in order of  cricket desc</h5>
		    <table class="table table-responsive jambo_table bulk_action full-table-clint">
                <thead>	
				<tr class="headings">
				<th width="5%">S.No.</th>				
				<th>Username</th>
				<th>Cricket</th>
				<th>Tennis</th>
				<th>Soccer</th>
				<th>Teenpatti</th>
				<th>Fancy</th>
				</tr>				
                </thead>
                <tbody>
                	<tr><td colspan="7">No record found.</td></tr>
                    </tbody>
       		    </table>
	    	<p class="pull-left">
	    				</p>
	        	</div>
	         </div>
           </div>
         </div>
       </div>
     </div> 
    );
 }
 export default Userpl1;