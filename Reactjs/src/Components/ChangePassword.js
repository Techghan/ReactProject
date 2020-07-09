import React from 'react';

function ChangePassword(){
 return(      
 
     
    <div class="mt-2 body">
     <div class="left-side-menu">
    	<div class="panel-group" id="accordion">
		     </div>		
            </div>
          <div class="main_container" id="sticky">
            <div class="right_col" role="main">
	           <div class="row">
			<div class="col-md-12">
				<div class="title_new_at">Change Password</div>			 
						   
				  </div>
				    <div class="col-md-12">
			  </div>
              <div class="col-md-12 col-sm-12 col-xs-12">              
                  <div id="divLoading"> </div>
               {/*  <!--Loading class --> */}  
					<form action="http://park9.bet/dashboard/change_password_action" class="form-horizontal form-label-left" method="post" accept-charset="utf-8"><input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/>
                      <input type="hidden" name="compute" value="fe6602731bf3d65605f0d8f6552a1c9f"/>
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="firstname">Old Password <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
					     <input type="password" name="old_password" value="" class="form-control col-md-7 col-xs-12" placeholder="Old Password" label="" required="required" autocomplete="off" />
                         
                        </div>
                      </div>
                      
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="firstname">New Password <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
					     <input type="password" name="newpassword" value="" class="form-control col-md-7 col-xs-12" placeholder="New Password" label="" required="required" autocomplete="off" />
                         
                        </div>
                      </div>
                      
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="firstname">Retype New Password <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
					     <input type="password" name="Renewpassword" value="" class="form-control col-md-7 col-xs-12" placeholder="Retype Password" label="" required="required" autocomplete="off"  />
                         
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
							 <button type="reset" class="btn btn-primary">Reset</button>
							  <button type="submit" class="btn btn-success">Submit</button>						
                        </div>
                      </div>
                    </form>						         
                  </div>
                </div>   
              </div>
            </div>        
          </div> 
        
        );
      }
 export default ChangePassword;
    
