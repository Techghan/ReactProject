import React from 'react';
import { NavLink } from 'react-router-dom';
import DatePick from './Datepicker';
import {Input} from 'reactstrap';
function CacStatement () {
   return(
    <div className="mt-2">    
       <div class="body">
	      <div class="" id="sticky">
           <div class="right_col" role="main">
           <div class="row">
           <div class="col-md-12">
             <div class="title_new_at">Account Statement    
					<div class="pull-right"><button class="btn_common" onclick="goBack()">Back</button> </div>
			</div>
        </div>
        <div class="col-md-12">
                    </div>
         <div class="col-md-12">
		  <div class="filter_page mb-0 data-background">
         <form method="post" id="formSubmit" ><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/>
           <div class="col-md-12 custom-check">
            <input type="hidden" name="user_id" id="user_id" value="145315"/>
             <input type="hidden" name="ajaxUrl" id="ajaxUrl" value="CacStatement"/>
			<div class="form-group">
			  <input name="fltrselct" value="0" checked  type="radio" id="all"/>
			  <label for="all"><span>All</span></label>
			</div>
			<div class="form-group">
			  <input name="fltrselct" value="1"   type="radio" id="FreeChips"/>
			  <label for="FreeChips"><span>Free Chips</span></label>
			</div>
			<div class="form-group">
			  <input name="fltrselct" value="2"   type="radio" id="Settlement"/>
			  <label for="Settlement"><span>Settlement</span></label>
			</div>
			<div class="form-group">
			  <input name="fltrselct" value="3"   type="radio" id="Profitandloss"/>
			  <label for="Profitandloss"><span>Profit Loss</span></label>
			</div>
			<div class="form-group">
			  <input name="fltrselct" value="4"   type="radio" id="AccountStatement"/>
			  <label for="AccountStatement"><span>Statement</span></label>
			</div>
            </div>
                  <div class="block_2">            
            {/*             <input type={DatePick} class="form-control" placeholder="To Date" />
 <input type="text" name="fdate" id="datetimepicker1" value="" class="form-control" placeholder="From Date" autocomplete="off"/> */}
                 <DatePick/>     
            </div>
            <div class="block_2">            
               <DatePick/>   
            </div>
            <div class="block_2">
			        	<input type="text" name="searchTerm" id="searchTerm" class="form-control" placeholder="Search" autocomplete="off"/>
            </div>
            <div class="block_2 buttonacount">
				<button type="submit" name="submit" id="submit_form_button" class="blue_button mr-1 mb-0" data-attr="submit">Filter</button>
				<NavLink to="/index.php"  class="red_button">Clear</NavLink>
            </div>
        </form>
        </div>
        </div>
        <div class="col-md-12 mt-0 p-0 col-sm-12 col-xs-12">
            <div id="divLoading"> </div>
           {/*  <!--Loading class --> */}
            <div class="custom-scroll appendAjaxTbl" id="filterdata">

                <table class="table table-bordered  table_new_design table-sm" id = "datatablesss" > 
                    <thead>
                        <tr class="headings">
                            <th class="m-0"> S.No. </th>
                            <th class="">Date </th>
                            <th class="">Description </th>
                            <th class="rrig text-right">Credit </th>
                            <th class="rrig text-right">Debit </th>
                            <th class="rrig text-right">Balance </th>                        
                        </tr>
                    </thead>
                    <tbody>
                  <tr>
                            <td>1</td>
                            <td class=" ">2020-06-24 12:07:39</td>
                            <td class=" ">
																	Bablu61 Received From  Pa12345														</td>
                                                        <td class="text-right">10000 </td>
                            <td class=" text-right">0 </td> 					   
                                                            <td class="text-right">395000.00 </td>
                                                    </tr>
                                                <tr>
                            <td>2</td>
                            <td class=" ">2020-06-20 12:34:13</td>
                            <td class=" ">
																	Bablu61 Deposit In Raghu22														</td>
                                                        <td class="text-right">0 </td>
                            <td class="text-right">5000 </td> 					   
                                                            <td class=" text-right">385000.00 </td>
                                                    </tr>
                                                <tr>
                            <td>3</td>
                             <td class=" ">2020-06-20 12:33:22</td>
                             <td class=" ">	Bablu61 Deposit In Pa12345</td>
                             <td class=" text-right">0 </td>
                             <td class=" text-right">10000 </td> 					   
                             <td class=" text-right">390000.00 </td>
                                                    </tr>
                                                <tr>
                            <td>4</td>
                            <td class=" ">2020-06-18 21:41:05</td>
                            <td class=" ">	Bablu61 Deposit In Pa12345</td>
                             <td class=" text-right">0 </td>
                            <td class=" text-right">100000 </td> 					   
                             <td class="text-right">400000.00 </td>
                               </tr>
                               <tr>
                            <td>5</td>
                            <td class=" ">2020-04-22 20:08:28</td>
                            <td class=" ">Bablu61 Received From  Parent	</td>
                            <td class=" text-right">500000 </td>
                            <td class=" text-right">0 </td> 					   
                            <td class=" text-right">500000.00 </td>
                            </tr>
                    </tbody>
                </table>
                <p>Showing 1 to 5 of 5 entries </p>  <p id="paginateClick" class="pagination-row dataTables_paginate paging_simple_numbers"> </p>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div> 
           </div>  
          );
        }
export default CacStatement;



  
      