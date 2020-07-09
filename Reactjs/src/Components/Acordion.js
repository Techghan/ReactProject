import React from 'react';
import{Accordion, Card, } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
function Accrdion(){
    return(
        <div className="body">
             <Accordion className="mt-1 ml-2">
                        <Card className="border rounded" >
                            <Accordion.Toggle  className="color d-flex text-white ml-0 p-2" eventKey="4"> In-Play
                            <h5 className="ml-0 col-sm-2 mb-0 mr-auto pl-2 text-white"> </h5>
                            </Accordion.Toggle>
                        
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>play Following</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="mt-1  border rounded">
                            <Accordion.Toggle className="color d-flex ml-o pt-1 pb-2 text-white pr-0" eventKey="1">Crickets
                                <h5 className="ml-0 col-sm-2 mb-0 mr-auto pl-2 text-white"></h5>
                                <span className="fa fa-sort-desc fa-sm ml-0 col-sm-2 mb-0 pr-4 text-white"></span>
                            </Accordion.Toggle>    
                            <Accordion.Collapse eventKey="1">
                               <Card.Body>
                                            <ul className="tl p-0 m-0" id="cricket_child_menu">
                                                                    <li>
                                        <NavLink to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170914310', '29858932');">
                                        <i class="fa fa-angle-double-right"></i> Zurich Crickets CC v St Gallen CC 
                                        </NavLink>
                                      
                                        </li>
                                                                    <li>
                                        <NavLink to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170914314', '29858938');">
                                        <i class="fa fa-angle-double-right"></i> Winterthur CC v Zurich Crickets CC 
                                        </NavLink>
                                        </li>
                                                                </ul>    
                                   </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="mt-1  border rounded">
                            <Accordion.Toggle className="color d-flex ml-o pt-1 pb-2 text-white pr-0" eventKey="6">Tennis
                                <p className="ml-0 col-sm-2 mb-0 mr-auto pl-0 text-white"></p>
                                <span className="fa fa-sort-desc fa-sm ml-0 col-sm-2 mb-0 pr-4 text-white"></span>
                            </Accordion.Toggle>    
                            <Accordion.Collapse eventKey="2">
                            <Card.Body><ul id="tennis_child_menu">AusOpen </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="mt-1  border rounded">
                            <Accordion.Toggle className="color d-flex ml-o text-white pt-1 pb-2 pr-0" eventKey="3">Sccore
                                <p className="ml-0 col-sm-2 mb-0 mr-auto pl-0 text-white"></p>
                                <span className="fa fa-sort-desc fa-sm ml-0 col-sm-2 mb-0 pr-4 text-white"></span>
                            </Accordion.Toggle>    
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            <ul className="tl m-0 p-0" id="soccer_child_menu">
							                                
                                                            <li>
                                                               <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170841744', '29854274');">
                                                              <i class="fa fa-angle-double-right"></i>  Pardubice v Hradec Kralove 
                                                               </NavLink>
                                                            </li>
                                                                                            
                                                            <li>
                                                               <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170894307', '29859849');">
                                                              <i class="fa fa-angle-double-right"></i>  Exeter v Colchester 
                                                               </NavLink>
                                                               
                                                            </li>
                                                                                            
                                                            <li>
                                                               <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170849434', '29854617');">
                                                              <i class="fa fa-angle-double-right"></i>  Helsingborgs v Elfsborg 
                                                               </NavLink>
                                                               <ul id="list_of29854617"></ul>
                                                            </li>
                                                                                            
                                                            <li>
                                                               <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170623739', '29829853');">
                                                              <i class="fa fa-angle-double-right"></i>  Fiorentina v Brescia 
                                                               </NavLink>
                                                               <ul id="list_of29829853"></ul>
                                                            </li>
                                                                                            
                                                            <li>
                                                               <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170670622', '29835218');">
                                                              <i class="fa fa-angle-double-right"></i>  Man City v Burnley 
                                                               </NavLink>
                                                               <ul id="list_of29835218"></ul>
                                                            </li>
                                                                                            
                                                            <li>
                                                               <NavLink class="test" to="/" title="Match OODS" onclick="MarketSelection('1.170632504', '29830080');">
                                                              <i class="fa fa-angle-double-right"></i>  Bologna v Juventus 
                                                               </NavLink>
                                                               <ul id="list_of29830080"></ul>
                                                            </li>
                                                                </ul>


                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion> 

            </div>
    );
}
export default Accrdion;