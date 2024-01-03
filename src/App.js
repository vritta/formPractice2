import React from "react";

const App = () => {
  return(
  <div className="flex flex-col items-center mt-2">
    <form action="">
      <label htmlFor="firstName">First Name</label>
      <br />
      <input type="text" id="firstName" name="firstName" placeholder="Ayu" className="outline"/>
      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input type="text" id="lastName" name="lastName" placeholder="Tripathi" className="outline"/> 
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" name="email" placeholder="ayu@gmail.com" className="outline"/>  
      <br />
      <label htmlFor="country">Country</label>
      <br />
      <select name="country" id="country" className="outline">
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>  
      <br/>
      <label htmlFor="streetAddress">Street Address</label>
      <br />
      <input type="text" id="streetAddress" name="streetAddress" placeholder="B-25C" className="outline"/>  
      <br />
      <label htmlFor="city">City</label>
      <br />
      <input type="text" id="city" name="city" placeholder="Patna" className="outline"/>  
      <br />
      <label htmlFor="state">State / Province</label>
      <br />
      <input type="text" id="state" name="state" placeholder="Bihar" className="outline"/>  
      <br />
      <label htmlFor="postalcode">Postal Code</label>
      <br />
      <input type="text" id="postalcode" name="postalcode" placeholder="110077" className="outline"/>  
      <br /><br />
      <fieldset>
        <legend>By Email</legend>
        <div className="flex">
          <input type="checkbox" id="comments" name="comments"/>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" id="candidates" name="candidates"/>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" id="offers" name="offers"/>
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

        <input type="radio" id="pushEverything" name="pushNotifications"/>
        <label htmlFor="pushEverything">Everything</label>
        <br />
        <input type="radio" id="pushEmail" name="pushNotifications"/>
        <label htmlFor="pushEmail">Same as email</label>
        <br />
        <input type="radio" id="pushNothing" name="pushNotifications"/>
        <label htmlFor="pushNothing">No Push Notifications</label>
      </fieldset>
      
      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
      Save
      </button>
      
    </form>
  </div>
  );
};

export default App;
