import React from 'react';
import { NavLink } from 'react-router-dom';

function FancyStack(){

 return(
     

    <div class=" mt-2 body">
        <div className="" id="sticky">
  
       <div class="right_col" role="main">
		<div class="col-md-12">
            <div class="title_new_at">Fancy Stack   
					<div class="pull-right"><button type="button" class="btn_common" id="backbutton">Back</button> </div>
			</div>
        </div>
		<div class="col-md-12 col-sm-12 col-xs-12">
	    <div class="clearfix data-background">
	    <input type="hidden" name="ajaxUrl" id="ajaxUrl" value="report/fancystack"/>
		<form method="get" class="form-horizontal form-label-left input_mask" id="formSubmit">				  
	       <div class="popup_col_2 mb-1 mt--0 ">
				<input type="text" name="from_date" value="2020-06-30 00:00:00" id="from-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="From date" autocomplete="off"/>
		    </div>
		    <div class="popup_col_2 mb-1">
				<input type="text" name="to_date" value="2020-06-30 23:59:59" id="to-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="To date" autocomplete="off"/>
		    </div>
		    <div class="block_4 mt-0  buttonacount">
				<button type="button" class="blue_button pt-1 pb-2 mr-1" id="submit_form_button" value="filter" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
				<NavLink to="http://park9.bet/report/fancystack "  class="mr-1 pt-1 pb-2  red_button"><i class="fa fa-eraser"></i> Clear</NavLink>
				<NavLink class="blue_button pt-1 pb-2" to="http://park9.bet/profitloss/0/0">View Match Bets</NavLink>
			</div>
		   </form>		 </div>
		</div>
	    <div class="col-md-12 ">
			    </div>	
	    
		<div id="divLoading"> </div>
        {/* <!--Loading class -->  */}
		<div class="col-md-12">
		<div class="custom-scroll appendAjaxTbl">
		    <table class="table  table-sm jambo_table bulk_action" id = "datatables">
            	<thead>
				    <tr class="headings">
						<th class="" width="5%">S.No. </th>
						<th width="70%">
							Master	</th>
						<th class="">Total Bet</th>
				    </tr>
                </thead>
                <tbody>   
			    <tr><th colspan = '3'>No record found</th></tr>	
			</tbody>
		    </table>
		    <p>Showing 1 to 0 of 0 entries </p><p id="paginateClick" class="pagination-row dataTables_paginate paging_simple_numbers"></p>
		</div>
	    </div>
      </div>
     </div>
    </div> 
    
  );
}
export default FancyStack;