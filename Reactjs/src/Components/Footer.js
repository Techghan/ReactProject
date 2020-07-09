import React, { Component } from 'react';
class Footer extends Component{
    render(){
     return(
      <div className="foot mb-0 p-0 d-flex color">
     
       <div className="col-sm-1 text-white"><i className="fa fa-play-circle fa-lg ml-2 mr-5"> </i>  InPlay</div>
      <div className="col-sm-1 text-white"><i className="fa fa-pencil fa-lg ml-1 mr-5"> </i> Edit</div>
      <div className="col-sm-1 text-white"><i className="fa fa-home fa-lg ml-2 mr-5">  </i> Home</div>
      <div className="col-sm-1 text-white"><i className="fa fa-history fa-lg ml-3 mr-5">  </i> BetHistory</div>
      <div className="col-sm-1 text-white"><i className="fa fa-sign-out fa-lg ml-3 mr-5 ">  </i> LogOut</div>
  
    </div> 
     );
    }
}
export default Footer;