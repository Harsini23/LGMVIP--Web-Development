import React,{Component} from 'react';
import './Footer.css';
class Footer extends Component{
render(){
    
    return( <div>

            <div className='beforefooter'>
           
            <button id="myBtn" title="Go to top">Back to top</button>
            </div>

            <div className="footerbg" id="abtus">

            <fieldset>
            <legend><div  id="abtus">About us:</div>
            </legend><br/><br/>

           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br/>
            </fieldset><br/>
          
            <div className="box">  
            
            <ul classname="b1">
            <h5>Download Our App</h5>
                    <li>Available for Android and iOS</li>
                    <li>Privacy policy</li>
                    <li>Get to know us</li>
                </ul> 
            <ul classname="b1">
                <h5>Useful links</h5>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                    <li>Get to know us</li> 
            </ul> 
            <ul classname="b1">
                <h5>Social Media</h5>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
            </ul> 
            </div>

                
                <div class="bottom">
                <small class='website-rights'>Copyright © 2021 - Harsini S R - LGM internship task 2</small>
        
               </div>
    
            </div>
           

        </div>);
}


}
export default Footer;

