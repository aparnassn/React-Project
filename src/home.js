import { useState } from "react";
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate =useNavigate()
    return(
        <div>

<ul className="nav justify-content-end" style={{backgroundColor:"darkblue",height:70}}>
        <Button variant="outline-light"style={{width:135,height:50}} onClick={()=>navigate("/login")}>Register/Signin
        </Button>&emsp;

        <Button variant="outline-light" style={{width:145,height:50}} onClick={()=>navigate("/form")}>UserRegisteration
         </Button>&emsp;

         <Button variant="outline-light" style={{width:135,height:50}} onClick={()=>navigate("/note")}>To-Do-List
        </Button>&emsp;

      </ul>
      <div className="container">
        <div className="row">
        <div className="col-sm-4">
            <div className="card" >
               <img src="https://etimg.etb2bimg.com/thumb/msid-92801511,imgsize-107760,width-1200,height=765,overlay-ethr/industry/tcs-workforce-crosses-6-lakh-milestone-20-of-the-workforce-now-working-from-office.jpg" style={{width:415, height:250}}></img>
                <div className="card-body">
                <h5 className="card-title">TCS</h5>
                <p className="card-text">Tata Consultancy Services Limited (TCS) is an Indian multinational information technology (IT) services and
                    consulting company headquartered in Mumbai.[6][7] It is a part of the Tata Group and operates in 150 locations across 46 countries.[8] 
                    In September 2023, it was reported that TCS had over 616,000 employees worldwide.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card" >
                <img class="card-img-top" src="https://m.economictimes.com/thumb/msid-81764646,width-1200,height-900,resizemode-4,imgsize-89701/cognizant.jpg" style={{width:415, height:300}}/>
                <div className="card-body">
                <h5 className="card-title">Cognizant</h5>
                <p className="card-text">Cognizant is an American multinational information technology services and consulting company. It is headquartered in Teaneck, New Jersey, U.S. Cognizant is part of the NASDAQ-100 and trades under CTSH. 
                    It was founded as an in-house technology unit of Dun & Bradstreet in 1994,[6] and started serving external clients in 1996.[6]</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
        </div>
        <div className="col-sm-4">
            <div className="card" >
                <img class="card-img-top" src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/04/07/Photos/Processed/Wipro-kx8F--621x414@LiveMint.jpg" style={{width:415, height:300}}/>
                <div className="card-body">
                <h5 className="card-title">Wipro</h5>
                <p className="card-text">Wipro (stylized in lower case as wipro) is an Indian multinational corporation that provides information technology, consultant and business process services. It is one of the leading Big Tech companies.
                    [4] Wipro's capabilities range across cloud computing, computer security, digital transformation, artificial intelligence, robotics, data analytics,
                    and other technology consulting services to customers in 167 countries.[5]</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
    <div className="row">
    
        <div className="col-sm-4">
          <div className="card"   >
              
              <div className="card-body">
              <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTum9TXGeb15yynyxwNle7n81ILUjm6ooz5kA&s" style={{width:415, height:300}}/>
                <h5 className="card-title">Tech Mahindra</h5>
                <p className="card-text">Tech Mahindra is an Indian multinational information technology services and consulting company. Part of the Mahindra Group, the company is headquartered in Pune and has its
                    registered office in Mumbai. Tech Mahindra is a US$6.0 billion company[5][6] with over 148,000 employees across 90 countries.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </div>
        <div className="col-sm-4">
          <div className="card" >
          <img class="card-img-top" src="https://media.glassdoor.com/lst2x/18/02/dd/4d/accenture.jpg" style={{width:415, height:300}}/>
              
              <div className="card-body">
              
                <h5 className="card-title">Accenture</h5>
                <p className="card-text">Accenture plc is an Irish-American
                 professional services company based in Dublin, specializing in information technology (IT) services and consulting. 
                 A Fortune Global 500 company, it reported revenues of $64.1 billion in 2023.
                 Accenture's current clients include 91 of the Fortune Global 100 and more than three-quarters of the
                  Fortune Global 500. As of 2022, Accenture is considered the largest consulting firm in the world
                   by number of employees.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
        </div>
        <div className="col-sm-4">
          <div className="card"  >
              <img class="card-img-top" src="https://images.assettype.com/fortuneindia%2F2023-05%2Fdb5dced1-2a2b-420e-970d-9f89e2b79928%2FGettyImages_1235096233.jpg?w=1250&q=60" style={{width:415, height:300}}/>
              <div class="card-body">
                <h5 class="card-title">Capgemini</h5>
                <p class="card-text">Capgemini SE is a French multinational information technology (IT) services and consulting company, headquartered in Paris, France.[3]</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </div>
      </div>
      </div>
      </div>
        
    )
}

export default Home;