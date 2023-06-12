import { LitElement, html, css } from "lit-element";
import "./nehu-3.js";
class DataPage extends LitElement {
  static styles = css`
    #data {
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      border-radius: 30px;
      box-shadow: 1px 1px 12px #000;
      margin-top: 2.5px;
    }

    h1 {
      text-align: center;
      margin: 0 0 30px;
      padding: 0;
      color: black;
      font-family: monospace;
      font-size: 30px;
      font-weight: bold;
    }

    .card-list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-left: 40px;
      padding-right: 40px;
      padding: 10px;
    }

    .book {
      position: relative;
      border-radius: 10px;
      width: 350px;
      height: 500px;
      cursor: pointer;
      background-color: whitesmoke;
      -webkit-box-shadow: 1px 1px 12px #000;
      box-shadow: 1px 1px 12px #000;
      -webkit-transform: preserve-3d;
      -ms-transform: preserve-3d;
      transform: preserve-3d;
      -webkit-perspective: 2000px;
      perspective: 2000px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      color: black;
      margin-top: 80px;
      background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    }

    .back {
      padding-left: 50px;
    }

    .cover {
      top: 0px;
      position: absolute;
      background-color: lightgray;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transform-origin: 0;
      -ms-transform-origin: 0;
      transform-origin: 0;
      -webkit-box-shadow: 1px 1px 12px #000;
      box-shadow: 1px 1px 12px #000;
      padding-left: 20px;
      background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    }

    .book:hover .cover {
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transform: rotatey(-80deg);
      -ms-transform: rotatey(-80deg);
      transform: rotatey(-80deg);
    }

    p {
      font-size: 15px;
      //  font-weight: bold;
      font-family: monospace;
      font-style: italic;
    }

    h2,
    h3 {
      font-family: sans-serif;
    }

    #sara {
      padding-left: 40px;
      display: flex;
    }

    .btn,
    .btn1 {
      height: 40px;
      width: 70%;
      letter-spacing: 2px;
      font-size: 1rem;
      font-weight: bold;
      transition: 0.5s;
      margin-left: 20px;
      margin-right: 20px;
    }

    .btn:hover,
    .btn1:hover {
      cursor: pointer;
      color: black;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }

    #search-bar {
      display: flex;
      justify-content: center;
    }

    #search-input {
      margin-left: 530px;
      width: 250px;
      height: 25px;
      border: 2px solid #ccc;
      border-radius: 20px;
      font-size: 16px;
      padding: 5px;
      font-weight: bold;
      font-style: italic;
      font-family: monospace;
    }
    .clear {
      width: 90px;
      border: 2px solid #ccc;
      border-radius: 20px;
      font-size: 16px;
      padding: 5px;
      color: red;
      font-weight: bold;
      font-family: monospace;
      font-style: italic;
      cursor: pointer;
      height: 40px;
      margin-left: 10px;
    }
    #sort-bar {
      padding: 4px;
      margin-left: 200px;
      width: 150px;
      font-weight: bold;
      font-style: italic;
      font-family: monospace;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 0.25s, opacity 0.25s 0s;
    }

    .overlay.active {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    }

    .close-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      padding-right: 20px;
    }
    .bar {
      display: flex;
    }
  `;

  static get properties() {
    return {
      employees: { type: Array },
      filteredEmployees: { type: Array },
      editingUser: { type: Number },
      sortOption: { type: String },
    };
  }

  constructor() {
    super();
    this.employees = JSON.parse(localStorage.getItem("employees")) || [];
    this.filteredEmployees = [...this.employees];
    this.editingUser = null;
    this.sortOption = "default";
  }

  handleSearch() {
    const query = this.shadowRoot
      .getElementById("search-input")
      .value.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (emp) =>
        emp.fullName.toLowerCase().includes(query) ||
        emp.employeeCode.toLowerCase().includes(query)
    );
    this.requestUpdate();
  }

  clearSearch() {
    this.shadowRoot.getElementById("search-input").value = "";
    this.filteredEmployees = [...this.employees];
    this.requestUpdate();
  }

  handleSort(event) {
    this.sortOption = event.target.value;
    this.sortEmployees();
  }

  sortEmployees() {
    if (this.sortOption === "default") {
      this.filteredEmployees = [...this.employees];
    } else if (this.sortOption === "name") {
      this.filteredEmployees = [...this.employees].sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
      );
    } else if (this.sortOption === "employeeCode") {
      this.filteredEmployees = [...this.employees].sort((a, b) =>
        a.employeeCode.localeCompare(b.employeeCode)
      );
    }

    this.requestUpdate();
  }

  render() {
    return html`
      <div id="data">
        <h1>*Employee Data List*</h1>
        <div class="bar">
          <div id="search-bar">
            <input
              type="text"
              placeholder="Search.."
              id="search-input"
              @input="${this.handleSearch}"
            />
            <button class="clear" @click="${this.clearSearch}">Clear</button>
          </div>

          <div id="sort-bar">
            <sl-select
              pill
              filled
              placeholder="Sort by:"
              id="sort-select"
              @sl-change="${this.handleSort}"
            >
              <sl-option value="default">Default</sl-option>
              <sl-option value="name">Name</sl-option>
              <sl-option value="employeeCode">Employee Code</sl-option>
            </sl-select>
          </div>
        </div>

        <div class="card-list">
          ${this.filteredEmployees.map(
            (item, index) => html`
              <div class="book">
                <div class="back">
                  <p>
                    <strong>Correspondence Landmark:</strong>
                    ${item.clandmark}
                  </p>
                  <p><strong>Correspondence City:</strong> ${item.ccity}</p>
                  <p><strong>Correspondence State:</strong> ${item.cstate}</p>
                  <p>
                    <strong>Correspondence Country:</strong> ${item.ccountry}
                  </p>
                  <p><strong>Correspondence Zip:</strong> ${item.czipCode}</p>
                  <p>
                    <strong>Permanent Address 1:</strong>
                    ${item.paddressLine1}
                  </p>
                  <p>
                    <strong>Permanent Address 2:</strong>
                    ${item.paddressLine2}
                  </p>
                  <p><strong>Permanent Landmark:</strong> ${item.plandmark}</p>
                  <p><strong>Permanent City:</strong> ${item.pcity}</p>
                  <p><strong>Permanent State:</strong> ${item.pstate}</p>
                  <p><strong>Permanent Country:</strong> ${item.pcountry}</p>
                  <p><strong>Permanent Zip:</strong> ${item.pzipCode}</p>
                </div>

                <div id="sara">
                  <sl-button
                    variant="success"
                    class="btn"
                    @click="${() => this.editUser(index)}"
                  >
                    Edit
                  </sl-button>
                  <sl-button
                    variant="danger"
                    class="btn1"
                    @click="${() => this.deleteUser(index)}"
                  >
                    Delete
                  </sl-button>
                </div>

                <div class="cover">
                  <h2><strong>Full Name:</strong> ${item.fullName}</h2>
                  <hr />
                  <p><strong>Employee Code:</strong> ${item.employeeCode}</p>
                  <p><strong>Official Email:</strong> ${item.officialEmail}</p>
                  <p><strong>Personal Email:</strong> ${item.personalEmail}</p>
                  <p><strong>Designation:</strong> ${item.designation}</p>
                  <p><strong>Department:</strong> ${item.department}</p>
                  <p><strong>Primary Number:</strong> ${item.pcontactNumber}</p>
                  <p>
                    <strong>Secondary Number:</strong> ${item.scontactNumber}
                  </p>
                  <p>
                    <strong>Emergency Number:</strong> ${item.econtactNumber}
                  </p>
                  <h3>Address Details</h3>
                  <hr />
                  <p>
                    <strong>Correspondence Address 1:</strong>
                    ${item.caddressLine1}
                  </p>
                  <p>
                    <strong>Correspondence Address 2:</strong>
                    ${item.caddressLine2}
                  </p>
                </div>
              </div>

              ${this.editingUser === index
                ? html`
                    <div id="myNav" class="overlay active">
                      <sl-button
                        variant="text"
                        size="large"
                        class="close-btn"
                        @click="${() => this.closeEditPage()}"
                        >Close</sl-button
                      >
                      <div class="table-body">
                        <nehu-3
                          .employees=${this.employees}
                          .editingUserIndex=${index}
                          @save-form=${this.handleSaveForm}
                        ></nehu-3>
                      </div>
                    </div>
                  `
                : ""}
            `
          )}
        </div>
      </div>
    `;
  }

  editUser(index) {
    this.editingUser = index;
    const myNav = this.shadowRoot.getElementById("myNav");
    myNav.classList.add("active");
  }

  closeEditPage() {
    this.editingUser = null;
    const myNav = this.shadowRoot.getElementById("myNav");
    myNav.classList.remove("active");
  }

  deleteUser(index) {
    const deletedUserName = this.employees[index].fullName;
    if (confirm(`Are you sure, you want to delete ${deletedUserName}?`)) {
      this.employees.splice(index, 1);
      localStorage.setItem("employees", JSON.stringify(this.employees));
      this.requestUpdate();
    }
    window.location.reload();
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

customElements.define("sara-1", DataPage);
