import React from 'react';
import { NavLink } from 'react-router-dom';

function Marketpl(){
    return(
        
        <div class="mt-2 body">
	      <div class="" id="sticky">
      <div class="right_col" role="main">
	    <div class="col-md-12">
		<div class=" color p-1 text-white row ">  Market PL </div>
	    </div>
	    
	    <div class="col-md-12 col-sm-12 col-xs-12">
		<div class="clearfix data-background">
		<input type="hidden" name="ajaxUrl" id="ajaxUrl" value="marketpl"/>
		<form method="post" class="form-horizontal form-label-left mr-0 input_mask" id="formSubmit"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/> 		  
		    <div class="popup_col_2 mr-0" >
			<input type="text" name="from_date" value="2020-06-30 00:00:00" id="from-date" class="form-control mr-0 col-sm-12  has-feedback-left datetimepicker" placeholder="From date" autocomplete="off"  />
		    </div>
		    <div class="popup_col_2 mx-0 pr-0">
			<input type="text" name="to_date" value="2020-06-30 11:46:46" id="to-date" class="form-control mr-0  col-sm-12 has-feedback-left datetimepicker" placeholder="To date" autocomplete="off"  />
		    </div>
		    <div class="block_2 buttonacount mr-0">
				<button type="button"   id="submit_form_button" class="blue_button mr-1" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
				<NavLink to="http://park9.bet/marketpl"  class="red_button"><i class="fa fa-eraser"></i> Clear</NavLink>
			</div>
		   </form>		</div>   
		<div class="">
		<div id="divLoading"> </div> {/* <!--Loading class --> */} 
		<div class="custom-scroll data-background appendAjaxTbl">
			
		    <table class="table table-sm jambo_table bulk_action" id = "Marketdatatable">
                <thead>		
			<tr>				
				<th class="">Date </th>
				<th class="">Market </th>
				<th class="">Hyper </th>		
                <th class="">Hyper </th>
				<th class="">Super Master </th>
				<th class="">Total </th>
				<th class="">Amount </th>
				<th class="">M-comm </th>
				<th class="">S-comm </th>
				<th class="">Net-Amount </th>			
			    </tr>
                </thead>
                <tbody>			     
		    <tr><th colspan = '10'>No record found</th></tr>	
			</tbody>
	
		    </table>
              </div>
         </div>
     </div> 	
	 		
</div>
	    </div>
        </div>
         
    );
}

export default Marketpl;