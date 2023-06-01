
import { LitElement, html, css } from 'lit-element';
import "./nehu-3.js";
class DataPage extends LitElement {
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
    //color: black;
    font-size: 16px;
    background-color: transparent;
    font-family: monospace;
    border: 1px solid transparent;
    border-radius: 20px;
    // padding: 5px;
    text-align: center;
    cursor: pointer;
    box-shadow: 1px 1px 20px #14EACFFF,
                1px 1px 40px #14EACFFF;
    //animation: anime 1s linear infinite;     
    float: left;
    padding: 70px; 
    text-align: left;
    //font-weight: bold;
    overflow: hidden;
    transition: transform .5s;

  }

  .card:hover {
    transform: translateY(-9px);

  }

  




  // .card:nth-child(1){
  //   animation-delay: 0.2s;
  // }

  
  // .card:nth-child(2){
  //   animation-delay: 0.4s;
  // }

  // @keyframes anime{
  //   0%{
  //     filter: hue-rotate(0deg);
  //   }
  //   100%{
  //     filter: hue-rotate(360deg);
  //   }
  // }


  #sara{
    display: flex;
    

  }

  .btn1{
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
    //text-transform: uppercase;
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
  //box-sizing: border-box;
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
  //box-sizing: border-box;
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
   // margin-bottom: 30px;
    //width: 100%;
    // border: none;
    // border-bottom: 1px solid #fff;
    // outline: none;
    //background-color: transparent; 
    color: #03e9f4;
    font-size: 14px;
    cursor: pointer;
    //margin: 5px;
    
    
    
  }

  // .nehu h1{
  //   font-size:1em;
  //   margin-left: 90px;
  // }

  .table-body{
    display: flex; 
    justify-content: space-around;
    align-items: left;
    flex-direction: column;
     height: 90%;
    width: infinite;
    margin: 80px;
     color: white;
    //color: black;
    font-size: 16px;
    background-color: transparent;
    font-family: monospace;
    border: 1px solid transparent;
    border-radius: 20px;
    // padding: 5px;
    text-align: center;
    cursor: pointer;
    box-shadow: 1px 1px 20px #14EACFFF,
                1px 1px 40px #14EACFFF;
    //animation: anime 1s linear infinite;     
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
    line-height: 1.4;
  }



  //edit form fields
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

 
  .edit-form {
    max-width: 600px; 
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }








  `;




  static get properties() {
    return {
      employees: { type: Array },
      filteredEmployees: { type: Array },
      editingUser: { type: Object },
  
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

  


  

 

  // updateLocalStorageAndRefresh() {
  //   localStorage.setItem("employees", JSON.stringify(this.employees));
  //   this.filteredEmployees = [...this.employees];
  // }
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
      ${this.employees.map((item,index) => html`
      
        <div class="card">
          <div class="employee-info">
            <p><strong>Full Name:</strong> ${item.fullName}</p>
            <p><strong>Employee Code:</strong> ${item.employeeCode}</p>
            <p><strong>Official Email Address:</strong> ${item.officialEmail}</p>
            <p><strong>Personal Email Address:</strong> ${item.personalEmail}</p>
            <p><strong>Designation:</strong> ${item.designation}</p>
            <p><strong>Department:</strong> ${item.department}</p>
          
          <p><strong>Primary Number:</strong> ${item.primaryContact}</p>
          <p><strong>Secondary Number:</strong> ${item.secondaryContact}</p>
          <p><strong>Emergency Number:</strong> ${item.emergencyContact}</p>
          <p><strong>Correspondence Address Line 1:</strong> ${item.caddressLine1}</p>
          <p><strong>Correspondence Address Line 2:</strong> ${item.caddressLine2}</p>
          <p><strong>Correspondence Landmark:</strong> ${item.clandMark}</p>
          
          <p><strong>Correspondence City:</strong> ${item.ccity}</p>
          <p><strong>Correspondence State:</strong> ${item.cstate}</p>
          <p><strong>Correspondence Country:</strong> ${item.ccountry}</p>
          <p><strong>Correspondence Zip:</strong> ${item.czipCode}</p>
          <p><strong>Permanent Address Line 1:</strong> ${item.paddressLine1}</p>
          <p><strong>Permanent Address Line 2:</strong> ${item.paddressLine2}</p>
          <p><strong>Permanent Landmark:</strong> ${item.plandMark}</p>
          <p><strong>Permanent City:</strong> ${item.pcity}</p>
          <p><strong>Permanent State:</strong> ${item.pstate}</p>
          <p><strong>Permanent Country:</strong> ${item.pcountry}</p>
          <p><strong>Permanent Zip:</strong> ${item.pzipCode}</p>
          </div>
          <br><br>
          <div id="sara">
          
          <button class="btn" @click="${() => this.editUser(index)}">Edit</button>
            
         
          
          <button class="btn1" @click="${() => this.deleteUser(index)}">Delete</button>
          </div>
        </div>
        ${this.editingUser === index
           ? html`
           <div class="overlay">
           <div class="edit-form"> 
          <nehu-3
          .employees=${this.employees}
          .editingUserIndex=${index}
          @save-form=${this.handleSaveForm}
        ></nehu-3>

        </div>
        </div>
   
            ` : ''}
      `)}
    </div>
  </div>
  
    `;
  }
  editUser(index) {
    this.editingUser = index;
  }

  deleteUser(index) {
    const deletedUserName = this.employees[index].fullName;
    if (confirm(`Are you sure, you want to delete ${deletedUserName}?`)) {
      this.employees.splice(index, 1);
      localStorage.setItem("employees", JSON.stringify(this.employees));
      this.requestUpdate();
    }
  }


  handleSaveForm(event) {
    const { employees, index } = event.detail;
    if (index !== -1) {
      
      this.employees[index] = employees;
    } else {
     
      this.employees.push(employees);
    }
    localStorage.setItem("employees", JSON.stringify(this.employees));
    this.editingUser = null;
    this.requestUpdate();
  }
  
  
  

  
}

customElements.define('sara-1', DataPage );