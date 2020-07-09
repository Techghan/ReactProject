import React from  'react';
import { NavLink } from 'react-router-dom';

function Sportpl(){
    return(
        
        <div class="mt-2 body">
	             <div class=" " id="sticky">
      
<div class="right_col" role="main">
	    <div class="col-md-12">
		<div class="title_new_at"> Sports PL 				
				</div>
	    </div>
	    <div class="col-md-12 col-sm-12 col-xs-12">
		<div class="clearfix data-background">
		<input type="hidden" name="ajaxUrl" id="ajaxUrl" value="sportpl"/>
		<form method="get" class="form-horizontal form-label-left input_mask" id="formSubmit">
			<input type="hidden" name="user_id" id="user_id" value=""/>
		    <div class="popup_col_2">
			<input type="text" name="from_date" value="2020-06-30 00:00:00" id="from-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="From date" autocomplete="off"/>
		    </div>
		    <div class="popup_col_2">
			<input type="text" name="to_date" value="2020-06-30 23:59:59" id="to-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="To date" autocomplete="off"/>
		    </div>
		    <div class="block_2 buttonacount">
				<button type="button"  id="submit_form_button" class="blue_button mr-1" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
				<NavLink to="http://park9.bet/sportpl"  class="red_button"><i class="fa fa-eraser"></i> Clear</NavLink>
				<NavLink to="" id="backbutton"  class="red_button pull-right"><i class="fa fa-eraser"></i> Back</NavLink>
			       {/* javascript:void(0); */}
			</div>
		 </form>
		 </div>  
		<div class="">
		<div id="divLoading"> </div> 
        {/* <!--Loading class --> */}
        
		<div class="custom-scroll data-background appendAjaxTbl">
		<h5>Filter criteria : From 2020-06-30 00:00:00 To 2020-06-30 23:59:59</h5>
		
		    <table class="table table-sm jambo_table bulk_action full-table-clint" id ="datatable">
                <thead>	
				<tr class="headings">	
				<th width="2%">S.No.</th>			
				<th>
					Master				</th>
				<th>Cricket</th>
				<th>Tennis</th>
				<th>Soccer</th>
								<th>Fancy</th>
				<th>Total Userpl</th>
				<th>Live Teenpatti</th>
				<th>Casino</th>
				<th>Live Game</th>
				</tr>				
                </thead>
                <tbody>
            		<tr><td colspan="6">No record found.</td></tr>
                 </tbody>
                    </table>
		    <div class="col-md-12" id="data-pagination"></div>
		</div>
	    </div>
	   </div>
     <div>
   </div>
  </div>   
 </div>
</div> 
    
    )
}
export default Sportpl;