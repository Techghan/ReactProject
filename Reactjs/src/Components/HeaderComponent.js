import React,{Component} from 'react';
//import Main from './MainComponent';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop'

class App extends Component{
         state={
           SideDraweropen:false
         };


  drawerToggleClickHandler =() => {
    this.setState((prevState) =>{
      return{ SideDraweropen:!prevState.SideDraweropen};
    });
  };

  backdropClickHandler=() => {

    this.setState({SideDraweropen:false})
  }

  render(){
    let backdrop;
   if(this.state.SideDraweropen){
     backdrop= <Backdrop click={this.backdropClickHandler}/>
   }
    return (
      <div style={{height:'100%'}}>
          <Toolbar drawerClickHandler= {this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.SideDraweropen}/>
          {backdrop}
          <main style={{marginTop:'90px'}}>
          <div className="marquee color  fiex bg-dark">
        <marquee> <i class="fa fa-bell-o"></i> welcome <i class="fa fa-bell-o"></i> </marquee>
         </div>
                 </main>
               </div>
              )
            }
          }
 export default App;