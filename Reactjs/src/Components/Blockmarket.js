import React from 'react';
import { NavLink } from 'react-router-dom';
import{Table} from 'reactstrap';
function BlockMarket(){
  return(
       
         <div class="mt-2 body">
	       <div class="" id="sticky">
            <div class="right_col pb-5" role="main">
	         <div class="col-md-12 ">
            <div class="title_new_at py-1">
            <span class="lable-user-name">
			Sport Listing
            </span>
			<button class="btn btn-sm ml-1 py-0 px-1  btn-primary" onclick="goBack()">Back</button>
            </div>
            </div>
              <div class="col-md-12  ">
					<div class="clearfix"></div>
					<div class="table table-sm jambo_table bulk_action" id="contentreplace">
	      <Table class="table tabelcolor  tabelborder "  >
			<thead className="">
				<tr className="">
					<th scope="col">So.</th>
					<th scope="col">Name</th>
					<th scope="col">Action</th> 		 
				</tr>
			</thead>
			<tbody >	
                {/* <!--Criecket --> */}
						
				<tr>
					<td className="row ">1</td>
					<td><NavLink to="http://park9.bet/Adminmaster/match_list_block/4"><img src="http://park9.bet/assets/images/cricket-icon.png" alt="..."/> Cricket</NavLink></td>
					<td>
																				
						   
                             {/*  <!--img src="http://park9.bet/assets/images/pause_icon.png" style="margin-top:0px;"
							 onclick="saveSeries(4, '145315', '0', '0', '0', '2', '0');" / -->	 */}

							<label class='toggle-label'>
							 <input type='checkbox'    onclick="blockMarket(4, '145315', '0', '0', '0', '2', '0');"  class="ng-pristine ng-valid ng-touched"/>
								 <span class='back'>
									<span class='toggle'></span>
									<span class='label off'></span> 
									<span class='label on'></span>											
								</span>
							</label> 
							 
										 
					</td>	 
				</tr>
				<tr>
					<td className="row">2</td>
					<td>   <NavLink to="http://park9.bet/Adminmaster/match_list_block/2"><img src="http://park9.bet/assets/images/tenish-icon.png" alt="..."/> Tennis</NavLink>  </td>
					<td>
									{/*  <!--img src="" style="margin-top:0px;"
							 onclick="saveSeries(2, '', '0', '0', '0', '', '');" / -->	 */}											
						   

							 <label class='toggle-label'>
							 <input type='checkbox'  onclick="blockMarket(2, '145315', '0', '0', '0', '2', '0');"     class="ng-pristine ng-valid ng-touched"/>
								 <span class='back'>
									<span class='toggle'></span>
									<span class='label off'></span> 
									<span class='label on'></span>											
								</span>
							</label> 
							 
					
					</td>	 
				</tr>
				<tr>
					<td className="row">3</td>
					<td><NavLink to="http://park9.bet/Adminmaster/match_list_block/1"><img src="http://park9.bet/assets/images/soccer-icon.png" alt="..."/>  Soccer</NavLink></td>
					<td> 
					 
							<label class='toggle-label'>
								<input type='checkbox'  onclick="blockMarket(1, '145315', '0', '0', '0', '2', '0');"   class="ng-pristine ng-valid ng-touched"/>
								 <span class='back'>
									<span class='toggle'></span>
									<span class='label off'></span> 
									<span class='label on'></span>											
								</span>
							</label> 
					 
					</td>	 
				</tr>
			<tr>
					<td className="row">4</td>
					<td><NavLink to="http://park9.bet/Adminmaster/match_list_block/9"><img src="http://park9.bet/assets/images/soccer-icon.png" alt="..."/>  Teenpatti</NavLink></td>
					<td> 
					 
							<label class='toggle-label'>
								<input type='checkbox'  onclick="blockMarket(9, '145315', '0', '0', '0', '2', '0');"   class="ng-pristine p-2 ng-valid ng-touched"/>
								 <span class='back'>
									<span class='toggle'></span>
									<span class='label off'></span> 
									<span class='label on'></span>											
								</span>
							</label> 
					 
					</td>	 
				</tr>
						<tr>
					<td className="row">4</td>
					<td>Live Teenpatti</td>
					<td> 
					 
							<label class='toggle-label'>
								<input type='checkbox'  onclick="blockMarket(11, '145315', '0', '0', '0', '2', '0');"   class="ng-pristine ng-valid ng-touched"/>
								 <span class='back'>
									<span class='toggle'></span>
									<span class='label off'></span> 
									<span class='label on'></span>											
								</span>
							</label> 
					 
					</td>	 
				</tr>
									<tr>
				<td className="row">4</td>
				<td>Live Casino</td>
				<td> 
				 
						<label class='toggle-label'>
							<input type='checkbox'  onclick="blockMarket(12, '145315', '0', '0', '0', '2', '0');"   class="ng-pristine ng-valid ng-touched"/>
							 <span class='back'>
								<span class='toggle'></span>
								<span class='label off'></span> 
								<span class='label on'></span>											
							</span>
						</label> 
				 
				</td>	 
			</tr>
							<tr>
				<td className="row">4</td>
				<td>Live Game</td>
				<td> 
				 
						<label class='toggle-label'>
							<input type='checkbox'  onclick="blockMarket(13, '145315', '0', '0', '0', '2', '0');"   class="ng-pristine ng-valid ng-touched"/>
							 <span class='back'>
								<span class='toggle'></span>
								<span class='label off'></span> 
								<span class='label on'></span>											
							</span>
						</label> 
				 
			                 	</td>	 
		                    	</tr> 	     
		              	</tbody>		
	                 </Table>	     
                  	</div>
                	</div>
                  </div>
               </div>
              </div>
           
        );
  }

  export default BlockMarket;