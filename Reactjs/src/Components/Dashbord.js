import React, {Component} from 'react';
import Cardgroup from './Cardgroup';
import { Card, Accordion, Image, CardGroup} from 'react-bootstrap';
//import {Img} from 'reactstrap';
import Acordion from './Acordion';
import '../App.css';
//import {Table, Image} from 'react-bootstrap';
import Frontpart from './Frontpart';

class Deshboard extends Component {
   constructor(){
      super()
      this.state={

      }
   } 

getfromData = _ => {
   fetch(' ')
   .then()
   .then 
   .catch(err => console.error(err))
  }

   render(){
        return(
           <div className="mt-0 " id="sticky">  
              <div className="ut" style={{marginTop:'0px',marginBottom:'0px'}}><h4><b>Live Games</b></h4></div>
                          {/* Accordion componet code here with css properties moblie*/}
                           <div className="lt"> 

                                <Accordion defaultActiveKey="1"  className="mt-0 ml-0 mr-1 p-0">
                                                    
                                                    <Card className="mt-1 ml-0  border  rounded">
                                                                <Accordion.Toggle className="color1 d-flex ml-0 pr-0 color" eventKey="1" >
                                                                
                                                                    <p className="ml-0 col-sm-6 mr-5 pl-0 text-white cont1 pr-5 "><span className="fa fa-trophy text-warning fa-sm"> </span></p>
                                                                    
                                                                </Accordion.Toggle>    
                                                                <Accordion.Collapse show eventKey="1">
                                                                <Card.Body className="m-0 p-0">  
                                                                    {/* //////////////////////////// */}
                                                                    <CardGroup className="my-2  col-sm-12 ml-0 d-flex ">
                                    <Card   className="mr-1  cont rounded shadow"  >
                                        <Image className="m-1 Imga" src="http://park9.bet/assets/images/games-img/live-games.png" alt="test" height="90px" />
                                            <Card.Body>
                                            </Card.Body>
                                        </Card>

                                        <Card  varient="top"   className="mr-1 cont shadow rounded">
                                          <Image className="m-1" src="http://park9.bet/assets/images/games-img/live-teenpatti.png" alt="hel" height="90px"/>
                                            <Card.Body>
                                                                                  
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card  className=" mr-0 cont  shadow rounded">              
                                          <Image className="m-1" src="http://park9.bet/assets/images/games-img/livebaccarat.png" alt="hel" height="90px"/>
                                            <Card.Body>

                                            
                                            </Card.Body>
                                        </Card>
                                  </CardGroup>        
                                    <CardGroup className="mb-2 mr-1 col-sm-12  d-flex">
                                    <Card   className=" mr-1 cont shadow rounded" >            
                                        <Image className="m-1" src="http://park9.bet/assets/images/games-img/dragon-tiger.png" alt="hel" height="90px"/>
                                            <Card.Body>
                                              
                                            </Card.Body>
                                        </Card>
                                        
                                    <Card  className=" mr-1 cont shadow rounded">
                                        <Image className="m-1" src="http://park9.bet/assets/images/games-img/ander-baher.png" alt="hel" height="90px"/>        
                                            <Card.Body>

                                            
                                            </Card.Body>
                                        </Card>
                                        

                                    <Card  className=" mr-0 cont shadow rounded">
                                        <Image className="m-1" src="http://park9.bet/assets/images/games-img/poker.png" alt="hel" height="90px"/>
                                            <Card.Body>

                                          
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>

                                <CardGroup className="mb-2 col-sm-12  d-flex">
                                    <Card  varient="top" className=" mr-1 cont  shadow  rounded">
                                        <Image className="m-1 p-0" src="http://park9.bet/assets/images/games-img/7updown.png" alt="hel" height="90px"/>
                                            <Card.Body>
                                            
                                            </Card.Body>
                                        </Card>
                                        

                                    <Card   className=" mr-1  cont shadow rounded" height="100px" >
                                        <Image className="m-1" src="http://park9.bet/assets/images/games-img/warli-matka.png" alt="hel" height="90px"/>
                                            
                                        </Card>
                                    <Card   className="mr-0 cont  shadow rounded">
                                        <Image className="m-1" src="http://park9.bet/assets/images/games-img/ezugi.png" alt="hel" height="90px"/>
                                            <Card.Body>
                                            </Card.Body>
                                        </Card>
                                        
                                      </CardGroup>          
                                                                {/* ////////////////////////// */}
                                                                </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                                      
                                                        </Accordion>  
                                                </div>   
           <div className="row w-100 p-0 bg-warning" style={{height:601}}>
              <div className="col-sm-2 At p-0 bg-light color">                    
               <Acordion/>     
                </div>
      <div className="col-sm-7  bg-white"> 
     <div className="container-fluid p-0 m-0">            
                 <Frontpart/>
                </div>
              </div>
                   <div className="col-sm-3 At m-0 w-100 p-0 bg-light">    
                    <Cardgroup/>
                </div>  
            </div>      
                </div>
                );
            }
        }

export default Deshboard;