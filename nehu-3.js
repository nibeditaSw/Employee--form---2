import { html, css, LitElement } from 'lit';


class EmployeeForm extends LitElement {
  static styles = css`

  
  


  h1 {
    text-align: center;
    margin: 0 0 30px;
    padding: 0;
    color: navyblue;
    font-family: sans-serif;
  }


  /* form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radious: 50px 5px;
    width: 400px;
    padding: 50px;
    
   }*/

  

  #container {
    display: flex;
    min-height: 135vh;
    align-content: center;
    justify-content: center;
    background: linear-gradient(#141e30, #243b55);
    font-family: sans-serif;
    
    
    
    
    
    
    


  }

  #container div {
    background-color: rgba(0,0,0,.5);
    align-items: center;
    margin: 10px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    width: 300px;
    padding: 50px;
    


  }

  



  

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: white;
    font-size: 16px;
    

    
    

  }

  input[type="text"] {
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background-color: transparent; 
    color: #03e9f4;
    font-size: 14px;
    cursor: pointer;
    


  }



  input[type="email"] {
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background-color: transparent; 
    color: #03e9f4;
    font-size: 14px;
    cursor: pointer;
  }

  input[type="tel"] {
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background-color: transparent; 
    color: #03e9f4;
    font-size: 14px;
    cursor: pointer;
  }

  

  button[type="submit"] {

    position: absolute;
    bottom: -170px;
    display: inline-block;
    width: 25%;
    padding: 18px 25px;
    color: #03e9f4;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    min-height: 10vh;
    font-size: 1rem;
    font-weight: bold;
    transition: .5s;
    text-transform: uppercase;
    letter-spacing: 4px;
    cursor: pointer;
    
    
    

  } 

  button[type="submit"]:hover {
    background-color: #03e9f4;
    color: #050801;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
   -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

  } 




  

  

    
  `;



  static properties = {
    fullName: { type: String },
    employeeCode: { type: String },
    officialEmail: { type: String },
    personalEmail: { type: String },
    designation: { type: String },
    department: { type: String },
    primaryContact: { type: String },
    secondaryContact: { type: String },
    emergencyContact: { type: String },
    caddressLine1: { type: String },
    caddressLine2: { type: String },
    clandMark: { type: String },
    paddressLine1: { type: String },
    paddressLine2: { type: String },
    plandMark: { type: String },
    czipCode: { type: String },
    pzipCode: { type: String },
    ccity: { type: String }, 
    cstate: { type: String }, 
    ccountry: { type: String },
    pcity: { type: String }, 
    pstate: { type: String }, 
    pcountry: { type: String }, 

    errorMessages: { type: Object },
    
  };

  constructor() {
    super();
    this.fullName = '';
    this.employeeCode = '';
    this.officialEmail = '';
    this.personalEmail = '';
    this.designation = '';
    this.department = '';
    this.departments = ['Information Technology', 'Creative Services', 'Media Services', 'Marketing Science'];
    this.primaryContact = '';
    this.secondaryContact = '';
    this.emergencyContact = '';
    this.caddressLine1 = '';
    this.caddressLine2 = '';
    this.clandMark = '';
    this.czipCode = '';
    this.paddressLine1 = '';
    this.paddressLine2 = '';
    this.plandMark = '';
    this.pzipCode = '';
    this.ccity = '';
    this.cstate = '';
    this.ccountry = '';
    this.pcity = '';
    this.pstate = '';
    this.pcountry = '';
    
    this.errorMessages = {};
    
    
  }

  render() {
    return html`
    <form @submit=${this.handleSubmit}>
    <h1>*Employee Form*</h1>
    <div id="container">
    <div>
    
    
    
    <label for="fullName">Full Name:*</label> 
        <input
          type="text"
          id="fullName"
          .value=${this.fullName}
          @input=${this.handleInputChange}
        />
        ${this.errorMessages.fullName ? html`<p>${this.errorMessages.fullName}</p>` : ''}
    
    

    <label for="employeeCode">Employee Code:*</label>
        <input
          type="text"
          id="employeeCode"
          .value=${this.employeeCode}
          @input=${this.handleInputChange}
          required
        pattern="[A-Za-z][0-9]{6}"
          
        />
        ${this.errorMessages.employeeCode ? html`<p>${this.errorMessages.employeeCode}</p>` : ''}
    

    
    <label for="officialEmail">Official Email:*</label>
        <input
          type="email"
          id="officialEmail"
          .value=${this.officialEmail}
          @input=${this.handleInputChange}
          required
          pattern="[a-zA-Z0-9._%+-]+@annalect\.com|outlook\.com"
        />
        ${this.errorMessages.officialEmail ? html`<p>${this.errorMessages.officialEmail}</p>` : ''}
     

    
    <label for="personalEmail">Personal Email:*</label>
        <input
          type="email"
          id="personalEmail"
          .value=${this.personalEmail}
          @input=${this.handleInputChange}
          required
          pattern="[a-zA-Z0-9._%+-]+@gmail\.com|yahoo\.com"
        />
        ${this.errorMessages.personalEmail ? html`<p>${this.errorMessages.personalEmail}</p>` : ''}
  

    <label for="primaryContact">Primary Contact:*</label>
    <input
      type="tel"
      id="primaryContact"
      .value=${this.primaryContact}
      @input=${this.handleInputChange}
      required
      pattern="[0-9]{10}"
    />
    ${this.errorMessages.primaryContact ? html`<p>${this.errorMessages.primaryContact}</p>` : ''}
    
    </div>

    
    <div>
    
    <label for="secondaryContact">Secondary Contact:*</label>
    <input
      type="tel"
      id="secondaryContact"
      .value=${this.secondaryContact}
      @input=${this.handleInputChange}
      required
      pattern="[0-9]{10}"
    />
    ${this.errorMessages.secondaryContact ? html`<p>${this.errorMessages.secondaryContact}</p>` : ''}
    
    

    <label for="emergencyContact">Emergency Contact:*</label>
    <input
      type="tel"
      id="emergencyContact"
      .value=${this.emergencyContact}
      @input=${this.handleInputChange}
      required
      pattern="[0-9]{10}"
    />
    ${this.errorMessages.emergencyContact ? html`<p>${this.errorMessages.emergencyContact}</p>` : ''}

    <label for="designation">Designation:*</label>
    <select id="designation" @change=${this.handleInputChange}>
      <option value="">Select designation</option>
      <option value="Lead Engineering">Lead Engineering</option>
      <option value="Manager">Manager</option>
      <option value="Senior Associate">Senior Associate</option>
      <option value="Junior Associate">Junior Associate</option>
      <option value="Graduate Trainee">Graduate Trainee</option>
    </select>
    ${this.errorMessages.designation ? html`<p>${this.errorMessages.designation}</p>` : ''}
    
    <br><br>

    
    <label for="department">Department:*</label>
        <select id="department" @change=${this.handleInputChange}>
          <option value="">Select department</option>
          ${this.departments.map(
            (dept) =>
              html`
                <option value=${dept}>${dept}</option>
              `)}
        </select>
        ${this.errorMessages.department ? html`<p>${this.errorMessages.department}</p>` : ''}



   
    <br> <br> <br>
    
    <label for="caddressLine1">Address Line 1:*</label>
        <input
          type="text"
          id="caddressLine1"
          .value=${this.caddressLine1}
          @input=${this.handleInputChange}
          required
          maxlength="80"
        />
        ${this.errorMessages.caddressLine1 ? html`<p>${this.errorMessages.caddressLine1}</p>` : ''}
  

        <label for="caddressLine2">Address Line 2:</label>
        <input
          type="text"
          id="caddressLine2"
          .value=${this.caddressLine2}
          @input=${this.handleInputChange}
        />

        </div>

<div>

        <label for="clandMark">Land Mark:*</label>
        <input
          type="text"
          id="clandMark"
          .value=${this.clandMark}
          @input=${this.handleInputChange}
          required
          maxlength="50"
        />
        ${this.errorMessages.clandMark ? html`<p>${this.errorMessages.clandMark}</p>` : ''}
  
  
        <label for="czipCode">Zip Code:*</label>
        <input
          type="text"
          id="czipCode"
          .value=${this.czipCode}
          @input=${this.handleInputChange}
          required
          pattern="[0-9]{6}"
        />
        ${this.errorMessages.czipCode ? html`<p>${this.errorMessages.czipCode}</p>` : ''}
        
        
        <label for="ccity">City:*</label>
        <select id="ccity" @change=${this.handleInputChange}>
          <option value="">Select a city</option>
          <option value="city1">Banglore</option>
          <option value="city2">Hyderabad</option>
          <option value="city3">Mumbai</option>
          <option value="city1">Delhi</option>
          <option value="city2">Chennai</option>
          <option value="city3">Kolkata</option>
          
        </select>
        ${this.errorMessages.ccity ? html`<p>${this.errorMessages.ccity}</p>` : ''}

        <br><br>

        <label for="cstate">State:*</label>
        <select id="cstate" @change=${this.handleInputChange}>
          <option value="">Select a state</option>
          <option value="city1">Karnataka</option>
          <option value="city2">Telangana</option>
          <option value="city3">Maharashtra</option>
          <option value="city1">Uttar Pradesh</option>
          <option value="city2">Tamil Nadu</option>
          <option value="city3">West Bengal</option>
          
          
        </select>
        ${this.errorMessages.cstate ? html`<p>${this.errorMessages.cstate}</p>` : ''}

        <br><br>
      
        <label for="ccountry">Country:*</label>
        <select id="ccountry" @change=${this.handleInputChange}>
          <option value="">Select a Country</option>
          <option value="city1">India</option>
          <option value="city2">US</option>
          <option value="city3">UK</option>
          
        </select>
        ${this.errorMessages.ccountry ? html`<p>${this.errorMessages.ccountry}</p>` : ''}



      
      <br><br><br>
    
        <label for="paddressLine1"> Permanent Address Line 1:*</label>
        <input
          type="text"
          id="paddressLine1"
          .value=${this.paddressLine1}
          @input=${this.handleInputChange}
          required
          maxlength="80"
        />
        ${this.errorMessages.paddressLine1 ? html`<p>${this.errorMessages.paddressLine1}</p>` : ''}
  
        </div>


      <div>
        <label for="paddressLine2">Permanent Address Line 2:</label>
        <input
          type="text"
          id="paddressLine2"
          .value=${this.paddressLine2}
          @input=${this.handleInputChange}
        />

        <label for="plandMark">Permanent Land Mark:*</label>
        <input
          type="text"
          id="plandMark"
          .value=${this.plandMark}
          @input=${this.handleInputChange}
          required
          maxlength="80"
        />
        ${this.errorMessages.plandMark ? html`<p>${this.errorMessages.plandMark}</p>` : ''}
  
  
        <label for="pzipCode">Permanent Zip Code:*</label>
        <input
          type="text"
          id="pzipCode"
          .value=${this.pzipCode}
          @input=${this.handleInputChange}
          required
          pattern="[0-9]{6}"
        />
        ${this.errorMessages.pzipCode ? html`<p>${this.errorMessages.pzipCode}</p>` : ''}

        
        <label for="pcity">Permanent City:*</label>
        <select id="pcity" @change=${this.handleInputChange}>
        <option value="">Select a city</option>
        <option value="city1">Banglore</option>
        <option value="city2">Hyderabad</option>
        <option value="city3">Mumbai</option>
        <option value="city1">Delhi</option>
        <option value="city2">Chennai</option>
        <option value="city3">Kolkata</option>
          
        </select>
        ${this.errorMessages.pcity ? html`<p>${this.errorMessages.pcity}</p>` : ''}

        <br><br>

        <label for="pstate">Permanent State:*</label>
        <select id="pstate" @change=${this.handleInputChange}>
        <option value="">Select a state</option>
        <option value="city1">Karnataka</option>
        <option value="city2">Telangana</option>
        <option value="city3">Maharashtra</option>
        <option value="city1">Uttar Pradesh</option>
        <option value="city2">Tamil Nadu</option>
        <option value="city3">West Bengal</option>
        </select>
        ${this.errorMessages.pstate ? html`<p>${this.errorMessages.pstate}</p>` : ''}

        <br><br>
      
        <label for="pcountry">Permanent Country:*</label>
        <select id="pcountry" @change=${this.handleInputChange}>
        <option value="">Select a Country</option>
        <option value="city1">India</option>
        <option value="city2">US</option>
        <option value="city3">UK</option>
          
        </select>
        ${this.errorMessages.pcountry ? html`<p>${this.errorMessages.pcountry}</p>` : ''}


        </div>


    




        
        <button type="submit">Submit</button>
        
    </form>
      
    `;
  }

  
  





  handleInputChange(event) {
    const { id, value } = event.target;
    this[id] = value;
    this.errorMessages[id] = '';
  }
  
  handleSubmit(event) {
    event.preventDefault();
  
    const errorMessages = {};
  
    switch (true) {

      case !this.fullName:
        errorMessages.fullName = 'Full Name cannot be empty';
        break;

      case this.fullName.length > 40:
        errorMessages.fullName = 'Full Name cannot exceed 40 characters';
        break;

      case !this.employeeCode:
        errorMessages.employeeCode = 'Employee Code is required';
        break;

      case !this.officialEmail:
        errorMessages.officialEmail = 'Official Email is required';
        break;

      case !this.personalEmail:
        errorMessages.personalEmail = 'Personal Email is required';
        break;

      case !this.designation:
        errorMessages.designation = 'Designation is required';
        break;

      case !this.department:
        errorMessages.department = 'Department is required';
        break;

      case !this.primaryContact:
        errorMessages.primaryContact = 'Primary Contact is required';
        break;

      case !/^\d{10}$/.test(this.primaryContact):
        errorMessages.primaryContact = 'Primary Contact should be a 10-digit number';
        break;

      case !this.secondaryContact:
        errorMessages.secondaryContact = 'Secondary Contact is required';
        break;

      case !/^\d{10}$/.test(this.secondaryContact):
        errorMessages.secondaryContact = 'Secondary Contact should be a 10-digit number';
        break;

      case !this.emergencyContact:
        errorMessages.emergencyContact = 'Emergency Contact is required';
        break;

      case !/^\d{10}$/.test(this.emergencyContact):
        errorMessages.emergencyContact = 'Emergency Contact should be a 10-digit number';
        break;

      case !this.caddressLine1:
        errorMessages.caddressLine1 = 'Address Line 1 cannot be empty';
        break;

      case this.caddressLine1.length > 80:
        errorMessages.caddressLine1 = 'Address Line 1 cannot exceed 80 characters';
        break;

      case !this.clandMark:
        errorMessages.clandMark = 'Land Mark cannot be empty';
        break;

      case this.clandMark.length > 50:
        errorMessages.clandMark = 'Land Mark cannot exceed 50 characters';
        break;

      case !this.czipCode:
        errorMessages.czipCode = 'Zip Code is required';
        break;

      case !/^\d{6}$/.test(this.czipCode):
        errorMessages.czipCode = 'Zip Code should be a 6-digit number';
        break;

      case !this.ccity:
        errorMessages.ccity = 'City is required';
        break;

      case !this.cstate:
        errorMessages.cstate = 'State is required';
        break;

      case !this.ccountry:
        errorMessages.ccountry = 'Country is required';
        break;

      case !this.paddressLine1:
        errorMessages.paddressLine1 = 'Address Line 1 cannot be empty';
        break;

      case this.paddressLine1.length > 80:
        errorMessages.paddressLine1 = 'Address Line 1 cannot exceed 80 characters';
        break;

      case !this.plandMark:
        errorMessages.plandMark = 'Land Mark cannot be empty';
        break;

      case this.plandMark.length > 50:
        errorMessages.plandMark = 'Land Mark cannot exceed 50 characters';
        break;

      case !this.pzipCode:
        errorMessages.pzipCode = 'Zip Code is required';
        break;

      case !/^\d{6}$/.test(this.pzipCode):
        errorMessages.pzipCode = 'Zip Code should be a 6-digit number';
        break;

      case !this.pcity:
        errorMessages.pcity = 'City is required';
        break;

      case !this.pstate:
        errorMessages.pstate = 'State is required';
        break;
        
      case !this.pcountry:
        errorMessages.pcountry = 'Country is required';
        break;
      
    }
    

    if (Object.keys(errorMessages).length > 0) {
        this.errorMessages = errorMessages;
      } else {
     
        // Validation successful, proceed with storing data
        const employeeData = {
          fullName: this.fullName,
          employeeCode: this.employeeCode,
          officialEmail: this.officialEmail,
          personalEmail: this.personalEmail,
          designation: this.designation,
          department: this.department,
          primaryContact: this.primaryContact,
          secondaryContact: this.secondaryContact,
          emergencyContact: this.emergencyContact,
          caddressLine1: this.caddressLine1,
          caddressLine2: this.caddressLine2,
          clandMark: this.clandMark,
          czipCode: this.czipCode,
          paddressLine1: this.paddressLine1,
          paddressLine2: this.paddressLine2,
          plandMark: this.plandMark,
          pzipCode: this.pzipCode,
          ccity: this.ccity,
          cstate: this.cstate,
          ccountry: this.ccountry,
          pcity: this.pcity,
          pstate: this.pstate,
          pcountry: this.pcountry,
         
         
        };
      
        // Save data to local storage as JSON
        const storedData = JSON.parse(localStorage.getItem('employees')) || [];
        storedData.push(employeeData);
        localStorage.setItem('employees', JSON.stringify(storedData));
      
        // Reset form values
        this.fullName = '';
        this.employeeCode = '';
        this.officialEmail = '';
        this.personalEmail = '';
        this.designation = '';
        this.department = '';
        this.primaryContact = '';
        this.secondaryContact = '';
        this.emergencyContact = '';
        this.caddressLine1 = '';
        this.caddressLine2 = '';
        this.clandMark = '';
        this.czipCode = '';
        this.paddressLine1 = '';
        this.paddressLine2 = '';
        this.plandMark = '';
        this.pzipCode = '';
        this.ccity = '';
        this.cstate = '';
        this.ccountry = '';
        this.pcity = '';
        this.pstate = '';
        this.pcountry = '';
        
       
      
        // Clear error messages
        this.errorMessages = {};

        
    alert('Employee data submitted successfully!');

    
    window.location.reload();


    }
  }
}

customElements.define('nehu-3', EmployeeForm);