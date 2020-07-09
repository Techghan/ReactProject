import React from 'react';
import {NavLink} from 'react-router-dom';

function NewSummery(){
    return(
        
           <div class="mt-2 body">
             <div class="" id="sticky">  

   <div className="row color p-1 mt-1 mb-4 text-white">chip Summery </div>
     

<div className="row ">

   <form method="post" class="form-horizontal col-sm-12 form-label-left input_mask" id="formSubmit"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/> 	
        	<div className="row">	  
		    <div className="col-sm-2 m-1">
			<input type="serch" name="from_date" placeholder="Serch" id="from-date" class="form-control  has-feedback-left datetimepicker"/>
		    </div>		
		    <div className="col-sm-4 nx-2">
				<button type="button" id="submit_form_button" class="blue_button m-1" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>
				<NavLink to="http://park9.bet/clientpl"  class="red_button"><i class="fa fa-eraser"></i> Clear</NavLink>
			   {/* javascript:void(0); */}
			</div>
        </div>
		   </form>	
    </div>


    <div className="row mt-5">
    <div className="right_col col-sm-6" role="main">
        <div class="row m-0">
       <div class="col-md-12">
               <div class="title_new_at bg-warning text-dark"> <b>Plus Account </b> </div>
         </div>
    <div class="col-md-12">
    </div>

     <div class="col-md-12 col-sm-12 col-xs-12">
        
         <div id="divLoading"> </div>

         {/*<!--Loading class --> */}
         
           <div class="table-scroll">
               
               
             <table class="table jambo_table table-sm bulk_action" id = " ">
               <thead>
                 <tr class="headings">
                    <th class> Name</th>
                   <th class="">Account</th>
                     <th class > Chips </th>                    
                   <th class=""> </th>
                
                   
                 </tr>
               </thead>
               <tbody>
                       <tr> 	
                       <td class="">Total </td>
                       <td class=" "> </td>
                       <td class=" "> </td>
                       <td class=" "> </td>
                   </tr>
                </tbody>
             </table>      
           </div>      
          </div>
       </div>
      </div> 
      <div class="right_col col-sm-6" role="main">
   <div class="row">
       <div class="col-md-12">
               <div class="title_new_at bg-warning text-dark">Minus Account</div>
         </div>
    <div class="col-md-12">
    </div>

     <div class="col-md-12 col-sm-12 col-xs-12">
        
         <div id="divLoading"> </div>

         {/*<!--Loading class --> */}
         
           <div class="table-scroll">
               
               
             <table class="table table-sm  jambo_table bulk_action" id = " ">
               <thead>
                 <tr class="headings">
                    
                   <th class="">Name </th>
                
                   <th class="">Account </th>
                   <th class="">Chips</th>
                   <th class="">  </th>                 
                 </tr>
               </thead>
               <tbody>
                       <tr> 	
                       <td class=""> </td>
                       <td class=" "> </td>
                       <td class=" "> </td>
                       <td class=" "> </td>                     
                      
                   </tr>
                </tbody>
             </table>      
           </div>      
          </div>
          
       </div>
      </div> 


            {/* <div class="right_col" role="main">
   </div><div id="chipData" ></div> */}
     </div>
     </div>
    
    </div> 
    );
}
export default NewSummery;