import { LitElement, html, css } from 'lit-element';

class EmployeeForm extends LitElement {
  static styles = css`
    

  `;


  static get properties() {
    return {
      employees: { type: Array }
    };
  }

  constructor() {
    super();
    this.employees = JSON.parse(localStorage.getItem("employees")) || [];
    
  }


 
  

  renderEmployeeDetails(employee) {
    
      return html`
        <div class="employee-info">

          <p>Full Name: ${employee.fullName}</p>
          <p>Employee Code: ${employee.employeeCode}</p>
          
          
          

          

        </div>


        
      `;
    }
  
  

  
  render() {
    return html`

    <div id="data">
    <h1>Employee Data List</h1>
    <ol>
      ${this.employees.map(item => html`
        <li>
          ${this.renderEmployeeDetails(item)}
        </li>
      `)}
    </ol>
  </div>
 `;

 }

}

customElements.define('sara-1', EmployeeForm);
