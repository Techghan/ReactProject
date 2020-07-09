import React from 'react';
import { NavLink } from 'react-router-dom';

function Profiloss(){
    return(
        
              <div class=" mt-2 body">
	             <div class="" id="sticky">
            <div class="right_col" role="main" >
	<div class="col-md-12">
			<div class="title_new_at">   Profit Loss Listing<select  onchange="perPage(this.value)">
			<option value="10" selected>10</option>
			<option value="25" >25</option>
			<option value="50" >50</option>
			<option value="100" >100</option>
			</select>
			</div> 
	</div>
	<div class="col-md-12">			
	 <div class="filter_page data-background">
	 		<input type="hidden" name="ajaxUrl" id="ajaxUrl" value="Cprofitloss"/>
			<form method="get" id="formSubmit"  class="form-horizontal form-label-left input_mask"> 
		    <div className="row m-0">
			
				<div class="col-md-3 col-xs-6">
					<input type="hidden" name="user_id" value="145315"/>
					<input type="hidden" name="perpage" id="perpage" value="10"/>
					<select class="form-control"  name="sportid">
						<option value ="5" selected>All</option>
						<option value ="4" >Cricket</option>
						<option value ="1" >Soccer</option>
						<option value ="2" >Tennis</option>
						<option value ="11" >Live teenpatti</option>
						<option value ="12" >Live Casino</option>
						<option value ="0" >Fancy</option>
					</select>
			</div>
			<div class="col-md-2 col-xs-6">
				<input type="text" name="from_date" value="2020-06-30" id="from-date" class="form-control  col-sm-12 has-feedback-left" placeholder="From date" autocomplete="off"  />
			</div>
			<div class="col-md-2 col-xs-6">
					<input type="text" name="to_date" value="2020-06-30" id="to-date" class="form-control  col-sm-12 has-feedback-left" placeholder="To date" autocomplete="off"  />
			</div>
				<div class="col-md-2 col-xs-6">
					<input type="text" class="form-control" placeholder="Via event name" name="searchTerm" value=""/>
				</div>
				<div class="col-md-3 col-xs-12">
					<button type="submit" class="blue_button mr-1" id="submit_form_button" value="filter" data-attr="submit">Filter</button>
					<NavLink to="http://park9.bet/Cprofitloss" class="red_button">Clear</NavLink>
				</div>
			 </div>	
			 </form> 
		</div>	
		</div>	
              <div class="col-md-12 col-sm-12 col-xs-12">
                  <div id="divLoading"> </div>
                  
                 
                  {/*   <!--Loading class -->*/}
                  	<div class="custom-scroll appendAjaxTbl data-background">
                  		
												<table class="table table-sm jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
							<th class="">S.No. </th>
							<th class="">Event Name </th>
							<th class="">Market </th>
							<th class="">P_L </th>
							<th class="">Commission </th>
							<th class="">Created On </th>
							<th class="">Action </th>
                          </tr>
                        </thead>
                        <tbody>
						<tr><th colspan = '8'>No record found</th></tr>                         </tbody>
                      </table>
					  <table class="table table-sm jambo_table bulk_action">
                        <thead>
                          <tr class=" ">
							<th class="">(Total P & L ) 0</th>
							<th class="">(Total Commition)  0</th>
						</tr>	
						</thead>
                      </table>
					   <p>Showing 1 to 0 of 0 entries </p>  <p id="paginateClick" class="pagination-row dataTables_paginate paging_simple_numbers"> </p>
                         </div>
                    </div>
                   </div>
                </div>
             </div>
            
    );
}
export default Profiloss;