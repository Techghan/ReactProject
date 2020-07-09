import React from 'react';

function Accinfo(){
    return(
        <div className="mt-2">
        <div class="" id="sticky" >
        <div class="right_col row" role="main">
   
       <div class="col-md-12">
               <div class="title_new_at">  Account Info</div>
         </div>

     <div class="col-md-12 col-sm-12 col-xs-12">
        
         <div id="divLoading"> </div>

         {/*<!--Loading class --> */}
         
           <div class="table-scroll">           
             <table class="table table-sm jambo_table bulk_action" id = " ">
               <thead className="pb-1">
                 <tr class="headings pb-1">
                    
                   <th class="pb-1">Chips </th>
                
                   <th class="pb-1">Free Chips </th>
                   <th class="pb-1">Liability </th>
                   <th class="pb-1">Wallet </th>
                   <th class="pb-1">Up </th>
                   <th class="pb-1">Down </th>
                 </tr>
               </thead>
               <tbody className="pb-1 mb-1">
                       <tr> 	
                       <td class="">0.00 </td>
                       <td class=" ">395,000.00 </td>
                       <td class=" ">0.00 </td>
                       <td class=" ">395,000.00 </td>
                       
                       <td class=" ">0.00 </td>
                       <td class=" ">0.00 </td>
                   </tr>
                </tbody>
             </table>      
           </div>      
          </div>
       </div>
      
       </div>
    </div>
    );
}
export default Accinfo;