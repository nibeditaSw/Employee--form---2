import { LitElement, html, css } from 'lit-element';

class EmployeeForm extends LitElement {
  static styles = css`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :host{
    display: flex;
    justify-content: center;
    align-items: center;
    height:  infinite;
    width: 100%;
    background-color: #262626FF;
    color: white;



  }

  h1 {
    text-align: center;
    margin: 0 0 30px;
    padding: 0;
    color: lightblue;
    font-family: monospace;
    font-size: 30px;
    font-weight: bold;
  }


  .card{
    display: flex;
    justify-content: space-around;
    align-items: left;
    flex-direction: column;
     height: 90%;
    width: infinite;
    margin: 70px;
     color: lightblue;
    font-size: 16px;
    background-color: transparent;
    font-family: monospace;
    border: 1px solid transparent;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    box-shadow: 1px 1px 20px #14EACFFF,
                1px 1px 40px #14EACFFF;    
    float: left;
    padding: 70px; 
    text-align: left;
    font-weight: bold;
    overflow: hidden;
    transition: transform .5s;


  }

  .card:hover {
    transform: translateY(-9px);

  }

  




  #sara{
    display: flex;
    

  }

  .btn1{
    background-color: rgba(0,0,0,.5);
    color: #03e9f4;
    height: 40px;
    width: 50%;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: bold;
    transition: .5s;
  

  }

  .btn1:hover {
    cursor: pointer;
    background-color: red;
    color: black;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  
    
  }

  .btn{
    background-color: rgba(0,0,0,.5);
    color: #03e9f4;
    height: 40px;
    width: 50%;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: bold;
    transition: .5s;
    
    
  

  }

  .btn:hover {
    cursor: pointer;
    background-color: lightgreen;
    color: black;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  
    
  }

  #search-bar{
    display: flex;
    justify-content: center;
    
}


  #search-input{
    width: 200px;
  border: 2px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  padding: 5px;
  font-weight: bold;
  font-style: italic;
  font-family: monospace;


 
  
}

.search{
  width: 40px;
  border: 2px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  padding: 5px;
  color: red;
  font-weight: bold;
  
 
}



  


  .nehu{
    display:flex;
    padding: 6px;
    color: #03e9f4;
    font-size: 14px;
    cursor: pointer;
   
     
    
  }

  

  .table-body{
    display: flex; 
    justify-content: space-around;
    align-items: left;
    flex-direction: column;
     height: 90%;
    width: infinite;
    margin: 80px;
     color: white;
    font-size: 16px;
    background-color: transparent;
    font-family: monospace;
    border: 1px solid transparent;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    box-shadow: 1px 1px 20px #14EACFFF,
                1px 1px 40px #14EACFFF;  
    float: left;
    padding: 40px; 
    text-align: left;
    line-height: 1.4;
    
  
  }


  #bubu{
    display: flex;

  }

  .btn2{
    background-color: rgba(0,0,0,.5);
    color: #03e9f4;
    height: 40px;
    width: 50%;
    //text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: bold;
    transition: .5s;
  

  }

  .btn2:hover {
    cursor: pointer;
    background-color: pink;
    color: black;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  
    
  }

  .btn3{
    background-color: rgba(0,0,0,.5);
    color: #03e9f4;
    height: 40px;
    width: 50%;
    //text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: bold;
    transition: .5s;
  

  }

  .btn3:hover {
    cursor: pointer;
    background-color: red;
    color: black;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  .employee-info {
    line-height: 1.6;
  }



  
 








  `;




  static get properties() {
    return {
      employees: { type: Array },
      filteredEmployees: { type: Array }
    };
  }

  constructor() {
    super();
    this.employees = JSON.parse(localStorage.getItem("employees")) || [];
    this.filteredEmployees = [...this.employees];
    this.editingUser = null;

  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      emp => emp.fullName.toLowerCase().includes(query) || emp.employeeCode.toLowerCase().includes(query)
    );
  }

  
editUser(user) {
  this.editingUser = user;
  this.requestUpdate();
}
cancelEdit(user) {
  localStorage.setItem("employees", JSON.stringify(this.employees));
  this.editingUser = null;
  this.requestUpdate();
}
saveUser(user) {
  localStorage.setItem("employees", JSON.stringify(this.employees));
  this.editingUser = null;
  this.requestUpdate();
}

  

  handleDelete(employee) {
    const confirmed = confirm(`Are you sure you want to delete ${employee.fullName}?`);
    if (confirmed) {
      const index = this.employees.indexOf(employee);
      if (index > -1) {
        this.employees.splice(index, 1);
        this.updateLocalStorageAndRefresh();
      }
    }
  }

  updateLocalStorageAndRefresh() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
    this.filteredEmployees = [...this.employees];
  }
  render() {
    return html`
    
    <div id="data">
    <h1>*Employee Data List*</h1>

    <div id="search-bar">
    <!--<label for="search-input">Search:</label>-->
    <input type="text" placeholder="Search.." id="search-input" @input="${this.handleSearch}"/>
    <button class="search" @click="${this.handleSearch}">X</button>
    
  </div>
  
    <div class="card-list">
      ${this.filteredEmployees.map(item => html`
      
        <div class="card">
          <div class="employee-info">
            <p>Full Name: ${item.fullName}</p>
            <p>Employee Code: ${item.employeeCode}</p>
            <p>Official Email Address: ${item.officialEmail}</p>
            <p>Personal Email Address: ${item.personalEmail}</p>
            <p>Designation: ${item.designation}</p>
            <p>Department: ${item.department}</p>
          
          <p>Primary Number: ${item.primaryContact}</p>
          <p>Secondary Number: ${item.secondaryContact}</p>
          <p>Emergency Number: ${item.emergencyContact}</p>
          <p>Correspondence Address Line 1: ${item.caddressLine1}</p>
          <p>Correspondence Address Line 2: ${item.caddressLine2}</p>
          <p>Correspondence Landmark: ${item.clandMark}</p>
          
          <p>Correspondence City: ${item.ccity}</p>
          <p>Correspondence State: ${item.cstate}</p>
          <p>Correspondence Country: ${item.ccountry}</p>
          <p>Correspondence Zip: ${item.czipCode}</p>
          <p>Permanent Address Line 1: ${item.paddressLine1}</p>
          <p>Permanent Address Line 2: ${item.paddressLine2}</p>
          <p>Permanent Landmark: ${item.plandMark}</p>
          <p>Permanent City: ${item.pcity}</p>
          <p>Permanent State: ${item.pstate}</p>
          <p>Permanent Country: ${item.pcountry}</p>
          <p>Permanent Zip: ${item.pzipCode}</p>
          </div>
          <br><br>
          <div id="sara">
          
          <button class="btn" @click="${() => this.editUser(item)}">Edit</button>
            
         
          
          <button class="btn1" @click="${() => this.handleDelete(item)}">Delete</button>
          </div>
        </div>
        ${this.editingUser === item ? html`
        <div class=table-body>
          <div class="nehu">
            
                <p><strong>Full Name:</strong><br><input type="text" .value="${item.fullName}" @input="${e => item.fullName = e.target.value}"></p>
                <p><strong>Emergency Number:</strong><br><input type="text" .value="${item.emergencyContact}" @input="${e => item.emergencyContact = e.target.value}"></p>
                
</div>
<div class="nehu">
                <p><strong>Employee Code:</strong><br><input type="text" .value="${item.employeeCode}" @input="${e => item.employeeCode = e.target.value}"></p>
                <p><strong>Correspondence Address 1:</strong><br><input type="text" .value="${item.caddressLine1}" @input="${e => item.caddressLine1 = e.target.value}"></p>
</div>
<div class="nehu">
                <p><strong>Official Email:</strong><br><input type="text" .value="${item.officialEmail}" @input="${e => item.officialEmail = e.target.value}"></p>
                 
                <p><strong>Correspondence Address 2:</strong><br><input type="text" .value="${item.caddressLine2}" @input="${e => item.caddressLine2 = e.target.value}"></p>
</div>
<div class="nehu">
      <p><strong>Personal Email:</strong><br><input type="text" .value="${item.personalEmail}" @input="${e => item.personalEmail = e.target.value}"></p>
      <p><strong>Correspondence Landmark:</strong><br><input type="text" .value="${item.clandMark}" @input="${e => item.clandMark = e.target.value}"></p>
</div>
<div class="nehu">
               
              <p><strong>Designation:</strong><br><input type="text" .value="${item.designation}" @input="${e => item.designation = e.target.value}"></p>
              <p><strong>Correspondence City:</strong><br><input type="text" .value="${item.ccity}" @input="${e => item.ccity = e.target.value}"></p>
</div>
<div class="nehu">
                <p><strong>Department:</strong><br><input type="text" .value="${item.department}" @input="${e => item.department = e.target.value}"></p>
                <p><strong>Correspondence State:</strong><br><input type="text" .value="${item.cstate}" @input="${e => item.cstate = e.target.value}"></p>
</div>
<div class="nehu">
                <p><strong>Primary Number:</strong><br><input type="text" .value="${item.primaryContact}" @input="${e => item.primaryContact = e.target.value}"></p>  
                <p><strong>Correspondence Country:</strong><br><input type="text" .value="${item.ccountry}" @input="${e => item.ccountry = e.target.value}"></p>
</div>
<div class="nehu">
                
                <p><strong>Secondary Number:</strong><br><input type="text" .value="${item.secondaryContact}" @input="${e => item.secondaryContact = e.target.value}"></p>
                <p><strong>Correspondence Zip:</strong><br><input type="text" .value="${item.czipCode}" @input="${e => item.czipCode = e.target.value}"></p>
                
          </div>
          <br>
            <div id="bubu">
            
                  <button class="btn2" @click="${() => this.saveUser(item)}" id="save">Save</button>
                  <button class="btn3" @click="${() => this.cancelEdit()}" id="cancel">Cancel</button>
            </div>
            </div>
              </div>  
            ` : ''}
      `)}
    </div>
  </div>
  
    `;
  }
  
  
  

  
}

customElements.define('sara-1', EmployeeForm);