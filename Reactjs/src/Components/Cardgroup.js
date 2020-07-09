import React from 'react';
import { Card, Accordion, Image, CardGroup} from 'react-bootstrap';
function Cardgroup(){
    return(
     <div className=" "> 

<Accordion defaultActiveKey="1"  className="mt-1 ml-0 mr-1 p-0">
                    
                    <Card className="mt-1 ml-0  border  rounded">
                                <Accordion.Toggle className="color1 d-flex ml-0 pr-0 color" eventKey="1" >
                                
                                    <p className="ml-0 col-sm-6 mb-0  mr-auto pl-0 text-white p-2 cont1"  >Top Casino Games</p>
                                    <span className="fa fa-sort-desc fa-sm ml-0 col-sm-6 mb-0 pt-2 mr-0 pl-0 text-white cont1"></span>
                            
                                </Accordion.Toggle>    
                                <Accordion.Collapse show eventKey="1">
                                <Card.Body className="m-0 p-0">  
                                    {/* //////////////////////////// */}
                                    <CardGroup className="my-2  col-sm-12 ml-0 d-flex ">
     <Card   className="mr-1  cont rounded shadow"  >
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/live-games.png" alt="test" height="90px" />
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
    );
} 
export default Cardgroup;