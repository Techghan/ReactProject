import React from 'react';
import { NavLink } from 'react-router-dom';

function Bethistory(){   
	return(
         <div> 
              <div class="mt-2" id="sticky">
          
            <div class="right_col" role="main">
	        <div class="col-md-12">
    		<div class="title_new_at">   Bet History
		    <select  onchange="perPage(this.value)">
			<option value="10" selected>10</option>
			<option value="25" >25</option>
			<option value="50" >50</option>
			<option value="100" >100</option>
		    </select>
		</div>
	    </div>
	    <div class="col-md-12 ">
			    </div>
	    <div class="col-md-12 col-sm-12 col-xs-12">
		<div class="clearfix data-background">
		<input type="hidden" name="ajaxUrl" id="ajaxUrl" value="bethistory"/>
		<form method="post" id="formSubmit"  class="form-horizontal form-label-left input_mask"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/> 
			<input type="hidden" name="sportId" id="sportId" value="5"/>
		    <input type="hidden" name="perpage" id="perpage" value="10"/>
		    <div class="popup_col_2">
			<input type="text" name="from_date" value="2020-06-30" id="from-date" class="form-control  col-sm-12 has-feedback-left" placeholder="From date" autocomplete="off"/>
		    </div>
		    <div class="popup_col_2">
			<input type="text" name="to_date" value="2020-06-30" id="to-date" class="form-control col-sm-12 has-feedback-left" placeholder="To date" autocomplete="off"/>
		    </div>
		    <div class="popup_col_1">
			<input type="text" name="searchTerm" value="" id="mstruserid" maxlength="100" size="50" class="form-control" placeholder="Search"/>
		    </div>
		    <div class="popup_col_2">
						<select class="form-control"  name="betStatus">
			    <option value ="-1"  >Match/Unmatch</option>
			    <option value ="1" >Match</option>
			    <option value ="0" >Unmatch</option>
			</select>
		    </div>
		    <div class="popup_col_2">
				<select class="form-control"  name="pStatus">
			    <option value ="1" >Open</option>
			    <option value ="2" >Settled</option>
			    </select>
		    </div>
		    <div class="popup_col_3">
			<button type="button" name="submit" class="blue_button mr-1" id="submit_form_button" value="filter" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
			<NavLink to="http://park9.bet/report/bethistory"  class="red_button"><i class="fa fa-eraser"></i> Clear</NavLink>
		    </div>
            </form>	    </div>
	    </div>
	    <div class="col-sm-12">

			            <div className="color row">
                <div id="betsalltab" class="m-2 py-2  row p-1 px-2 col-sm-12  tl">
                	<div class="active col-sm-2  ">
                        <NavLink to="http://park9.bet/bethistory/5" dat-attr="5"> <b className="text-white">All </b></NavLink>
                    </div>
                    <div class="col-sm-2">
                        <NavLink to="http://park9.bet/bethistory/4" dat-attr="4"> <b className="text-white">Cricket</b> </NavLink>
                    </div>
                    <div class=" col-sm-2">
                        <NavLink to="http://park9.bet/bethistory/2" dat-attr="2"><b className="text-white"> Tennis </b></NavLink>
                    </div>
                    <div class="col-sm-2">
                        <NavLink to="http://park9.bet/bethistory/1" dat-attr="1"> <b className="text-white">Soccer</b></NavLink>
                    </div>                        
                    <div class="col-sm-2">
                        <NavLink to="http://park9.bet/bethistory/9" dat-attr="9"><b className="text-white">Teenpatti</b></NavLink>
                    </div>
                    <div class="col-sm-2">
                        <NavLink to="http://park9.bet/bethistory/0" dat-attr="0"><b className="text-white">Fancy</b></NavLink>
                    </div>
                </div>
            </div>

		</div>
	    <div class="col-md-12 col-sm-12 col-xs-12">
		<div id="divLoading"> </div>
        {/* <!--Loading class --> */}
		<div class="custom-scroll appendAjaxTbl">
		    <table class="table table-sm jambo_table bulk_action" id = "datatables">
                        <thead>
			    <tr class="headings">
				<th class="">S.No. </th>
				    				<th class="">Client</th>
				    				<th class="">Description </th>
				<th class="">Selection </th>
				<th class="">Type </th>
				<th class="">Odds </th>
				<th class="">Stack </th>
				<th class="">Date </th>
				<th class="">P_L </th>
				<th class="">Profit </th>
				<th class="">Liability </th>
				<th class="">Bet type</th>
				<th class="">Status </th>
				<th class="">IP </th>
								<th class="">Device</th>
								<th class="">ID </th>
			    </tr>
                        </thead>
                        <tbody>
			     
			    <tr><th colspan = '20'>No record found</th></tr>	
		    	</tbody>
		      </table>
	    	    <p>Showing 1 to 0 of 0 entries</p><p id="paginateClick" class="pagination-row dataTables_paginate paging_simple_numbers"></p>

			
	        	</div>
	        </div>
           </div>
        </div>
       </div>    
     );
  } 
export default Bethistory;