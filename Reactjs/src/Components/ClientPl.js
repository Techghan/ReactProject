import React from 'react';
import { NavLink } from 'react-router-dom';
function Clientpl(){
    return(
     

 <div class="mt-2 body">
	   <div class="" id="sticky">
    <div class="right_col" role="main">
	    <div class="col-md-12">
		<div class="title_new_at"> Client PL </div>
	    </div>
	    
	    <div class="col-md-12 col-sm-12 col-xs-12">
		<div class="clearfix data-background">
		
	
        <form method="post" class="form-horizontal form-label-left mb-1 " id="formSubmit"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/> 	
			<div className="row m-0 d-flex">	  
		    <div class="col-sm-3 mt-1">
			<input type="text" name="from_date" value="2020-06-30 00:00:00" id="from-date" class="form-control col-sm-12 has-feedback-left datetimepicker" placeholder="From date" autocomplete="off"/>
		    </div>
		    <div class="col-sm-3 mt-1">
			<input type="text" name="to_date" value="2020-06-30 23:59:59" id="to-date" class="form-control  col-sm-12 has-feedback-left datetimepicker" placeholder="To date" autocomplete="off"/>
		    </div>
		    <div class="col-sm-3 ml-0 mt-1">
				<button type="button" id="submit_form_button" class="blue_button mr-1" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
				<NavLink to="http://park9.bet/clientpl"  class="red_button"><i class="fa fa-eraser "></i> Clear</NavLink>
				<NavLink to="/" id="backbutton"  class="red_button pull-right"><i class="fa fa-eraser"></i> Back</NavLink>
			   {/* javascript:void(0); */}
			</div>
            </div>
		   </form>		   
		 </div>  
		<div class="">
		<div id="divLoading"> </div>   {/* <!--Loading class --> */}
		<div class="custom-scroll data-background appendAjaxTbl">
			
		    <table class="table table-sm jambo_table bulk_action full-table-clint" id ="datatable">
                <thead>	
				<tr class="headings">				
				<th class="">Username </th>
				<th class="">Hyper </th>				<th class="">Super Master </th>
				<th class="">Master </th>
				<th class="">Total </th>
				<th class="">Amount </th>
				<th class="">M-comm </th>
				<th class="">S-comm </th>
				<th class="">Net-Amount </th>	
				<th class=""> User PL</th>	
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

 export default Clientpl; 