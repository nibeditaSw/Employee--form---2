import { LitElement, html, css } from 'lit-element';

class EmployeeForm extends LitElement {
  static styles = css`
    



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
  }



  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      emp => emp.fullName.toLowerCase().includes(query) || emp.employeeCode.toLowerCase().includes(query)

    );

  }

  handleEdit(employee) {
    const updatedName = prompt('Enter the updated name:');
    if (updatedName) {
      employee.fullName = updatedName;
      this.updateLocalStorageAndRefresh();
    }
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

      <div id="search-bar">
        <label for="search-input">Search:</label>
        <input type="text" placeholder="Search.." id="search-input" @input="${this.handleSearch}" />
        <!-- <button @click="${this.handleSearch}">Search</button> -->
      </div>

      <div id="data">
        <h1>Employee Data List</h1>
        <ol>
          ${this.filteredEmployees.map(item => html`
            <li>
            <div class="employee-info">
            <p>Full Name: ${item.fullName}</p>
            <p>Employee Code: ${item.employeeCode}</p>
            <p>Official Email Address: ${item.officialEmail}</p>
            <p>Personal Email Address: ${item.personalEmail}</p>
            <p>Designation: ${item.designation}</p>
            <p>Department: ${item.department}</p>
            
            <button @click="${() => this.handleEdit(item)}">Edit</button>
            <button @click="${() => this.handleDelete(item)}">Delete</button>
          </div>
            </li>
          `)}
        </ol>
      </div>
    `;
  }
}

customElements.define('sara-1', EmployeeForm);