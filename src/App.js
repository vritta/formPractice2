import React from "react";
import { useState } from "react";
const App = () => {

  const [formData,setFormData] = useState({firstName:"",lastName:"",
  email:"",country:"India",streetAddress:"",city:"",state:"",postalcode:"",
  comments:false ,candidates:false ,offers:false ,pushNotifications:""})

  function changeHandler(event){
    if(event.target.type==="checkbox")console.log(event.target.checked);
    const {name,value,checked,type} = event.target;
    setFormData((prev)=>{
      return {...prev, [name]: type==="checkbox"? checked: value}
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }
  // event.target.type==="checkbox"?  [event.target.checked]="true":
  return(
  <div className="h-full w-full flex bg-slate-400"> 
  <div className="flex flex-col h-full w-full items-center mt-2">
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input type="text" id="firstName" name="firstName"
       placeholder="Ayu" value={formData.firstName} className="outline" onChange={changeHandler}/>
      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input type="text" id="lastName" name="lastName" 
      placeholder="Tripathi" value={formData.lastName} className="outline" onChange={changeHandler}/> 
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" name="email" 
      placeholder="ayu@gmail.com" value={formData.email} className="outline" onChange={changeHandler}/>  
      <br />
      <label htmlFor="country">Country</label>
      <br />
      <select name="country" id="country" value={formData.country} className="outline" onChange={changeHandler}> 
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>  
      <br/>
      <label htmlFor="streetAddress">Street Address</label>
      <br />
      <input type="text" id="streetAddress" name="streetAddress" placeholder="B-25C" 
      value={formData.streetAddress} className="outline" onChange={changeHandler}/>  
      <br />
      <label htmlFor="city">City</label>
      <br />
      <input type="text" id="city" name="city" placeholder="Patna" 
      value={formData.city} className="outline" onChange={changeHandler}/>  
      <br />
      <label htmlFor="state">State / Province</label>
      <br />
      <input type="text" id="state" name="state" placeholder="Bihar"
      value={formData.state} className="outline"onChange={changeHandler}/>  
      <br />
      <label htmlFor="postalcode">Postal Code</label>
      <br />
      <input type="text" id="postalcode" name="postalcode" placeholder="110077"
      value={formData.postalcode} className="outline" onChange={changeHandler}/>  
      <br /><br />
      <fieldset>
        <legend>By Email</legend>
        <div className="flex">
          <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changeHandler}/>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" id="candidates" name="candidates" checked={formData.candidates} onChange={changeHandler}/>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changeHandler}/>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>
      </fieldset>
      <br /><br />
      
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler}/>
        <label htmlFor="pushEverything">Everything</label>
        <br />
        <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email" onChange={changeHandler}/>
        <label htmlFor="pushEmail">Same as email</label>
        <br />
        <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notifications" onChange={changeHandler}/>
        <label htmlFor="pushNothing">No Push Notifications</label>
      </fieldset>
      
      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
      Save
      </button>

    </form>
  </div>
  </div>
  );
};

export default App;
