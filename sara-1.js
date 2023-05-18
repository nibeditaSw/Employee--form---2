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

              </div>
            </li>
          `)}
        </ol>
      </div>
    `;
  }
}

customElements.define('sara-1', EmployeeForm);