import { html, css, LitElement } from "lit";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/rating/rating.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("/path/to/shoelace/dist");

class EmployeeForm extends LitElement {
  static styles = css`
    * {
      // background-color: lightblue;
    }

    sl-input,
    label {
      font-weight: bold;
      font-style: italic;
      font-family: monospace;
    }

    sl-select,
    label {
      font-weight: bold;
      font-style: italic;
      font-family: monospace;
    }

    sl-select {
      width: 250px;
      padding: 5px;
    }
    sl-input {
      width: 250px;
      padding: 5px;
    }

    .error {
      color: red;
      font-size: 12px;
      //  margin-top: 5px;
      font-family: monospace;
      font-style: italic;
      font-weight: bold;
      position: fixed;
    }

    #nehu {
      flex-wrap: wrap;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      margin-left: 3rem;
      //   margin-right: 3rem;
      margin-top: -3rem;
      //  box-shadow: 0px 0px 15px currentcolor;
      padding: 40px;
      display: flex;
      line-height: 1rem;
    }
    .container {
      display: flex;
      justify-content: flex-start;
    }

    .form-group {
      line-height: 1rem;
      // margin-left: 20px;
      // margin-right: 20px;
    }
    .form-group1 {
      line-height: 1rem;
      margin-left: 150px;
      margin-right: 150px;
    }

    .next-btn {
      margin-left: 1rem;
      width: 25%;
      margin-top: 15px;
    }
    .previous-btn {
      margin-left: 1rem;
      width: 25%;
      margin-top: 1rem;
    }
    .submit-btn {
      margin-left: 1rem;
      width: 25%;
      margin-top: 1rem;
    }

    .title {
      font-size: 25px;
      color: royalblue;
      font-weight: 600;
      letter-spacing: -1px;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 30px;
      margin-left: 145px;
      margin-top: 2.5rem;
    }

    .title::before,
    .title::after {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      border-radius: 50%;
      left: 0px;
      background-color: royalblue;
    }

    .title::before {
      width: 18px;
      height: 18px;
      background-color: royalblue;
    }

    .title::after {
      width: 18px;
      height: 18px;
      animation: pulse 1s linear infinite;
    }

    @keyframes pulse {
      from {
        transform: scale(0.9);
        opacity: 1;
      }

      to {
        transform: scale(1.8);
        opacity: 0;
      }
    }
    img {
      margin-top: -70px;
      margin-right: 80px;
    }

    .error-field sl-input {
      --sl-input-border-color: red;
      --sl-input-box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.33);
    }

    .inline-validation sl-input[data-user-valid]::part(base),
    .inline-validation sl-select[data-user-valid]::part(base) {
      border-color: var(--sl-color-success-600);
    }

    .inline-validation sl-input:focus-within[data-user-valid]::part(base),
    .inline-validation sl-select:focus-within[data-user-valid]::part(base) {
      border-color: var(--sl-color-success-600);

      box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-color-success-300);
    }
  `;

  static properties = {
    employees: { type: Array },
    editingUserIndex: { type: Number },
    fullName: { type: String },
    fullNameError: { type: String },
    employeeCode: { type: String },
    employeeCodeError: { type: String },
    officialEmail: { type: String },
    officialEmailError: { type: String },
    personalEmail: { type: String },
    personalEmailError: { type: String },
    designation: { type: String },
    designationError: { type: String },
    department: { type: String },
    departmentError: { type: String },
    pcontactNumber: { type: String },
    pcontactNumberError: { type: String },
    scontactNumber: { type: String },
    scontactNumberError: { type: String },
    econtactNumber: { type: String },
    econtactNumberError: { type: String },
    caddressLine1: { type: String },
    caddressLine1Error: { type: String },
    caddressLine2: { type: String },
    clandmark: { type: String },
    clandmarkError: { type: String },
    ccity: { type: String },
    ccityError: { type: String },
    cstate: { type: String },
    cstateError: { type: String },
    ccountry: { type: String },
    ccountryError: { type: String },
    czipCode: { type: String },
    czipCodeError: { type: String },
    paddressLine1: { type: String },
    paddressLine1Error: { type: String },
    paddressLine2: { type: String },
    plandmark: { type: String },
    plandmarkError: { type: String },
    pcity: { type: String },
    pcityError: { type: String },
    pstate: { type: String },
    pstateError: { type: String },
    pcountry: { type: String },
    pcountryError: { type: String },
    pzipCode: { type: String },
    pzipCodeError: { type: String },

    errorMessages: { type: Object },
    currentPage: { type: Number },
    totalPages: { type: Number },
  };

  constructor() {
    super();
    this.employeeData = [];
    this.editingUserIndex = -1;

    this.fullName = "";
    this.fullNameError = "";

    this.employeeCode = "";
    this.employeeCodeError = "";

    this.officialEmail = "";
    this.officialEmailError = "";

    this.personalEmail = "";
    this.personalEmailError = "";

    this.designation = "";
    this.designationError = "";

    this.department = "";
    this.departmentError = "";

    this.pcontactNumber = "";
    this.pcontactNumberError = "";

    this.scontactNumber = "";
    this.scontactNumberError = "";

    this.econtactNumber = "";
    this.econtactNumberError = "";

    this.caddressLine1 = "";
    this.caddressLine1Error = "";

    this.caddressLine2 = "";

    this.clandmark = "";
    this.clandmarkError = "";

    this.ccity = "";
    this.ccityError = "";

    this.cstate = "";
    this.cstateError = "";

    this.ccountry = "";
    this.ccountryError = "";

    this.czipCode = "";
    this.czipCodeError = "";

    this.paddressLine1 = "";
    this.paddressLine1Error = "";

    this.paddressLine2 = "";

    this.plandmark = "";
    this.plandmarkError = "";

    this.pcity = "";
    this.pcityError = "";

    this.pstate = "";
    this.pstateError = "";

    this.pcountry = "";
    this.pcountryError = "";

    this.pzipCode = "";
    this.pzipCodeError = "";

    this.errorMessages = {};
    this.currentPage = 0; // Current page index
    this.totalPages = 3; // Total number of pages in the form
  }

  validateFullName(e) {
    const fullName = e.target.value;
    if (fullName.trim() === "") {
      this.fullNameError = "Full Name cannot be empty.";
    } else if (fullName.length > 40) {
      this.fullNameError = "Full Name cannot exceed 40 characters.";
    } else {
      this.fullNameError = "";
    }
    this.fullName = fullName;
  }

  validateEmployeeCode() {
    const regex = /^[A-Za-z]\d{6}$/;

    if (!regex.test(this.employeeCode)) {
      this.employeeCodeError = "It should 1 alphabet & 6 digits.";
    } else {
      this.employeeCodeError = "";
    }
  }

  validateOfficialEmail() {
    const regex = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

    if (!regex.test(this.officialEmail)) {
      this.officialEmailError = "It should like annalect.com.";
    } else {
      this.officialEmailError = "";
    }
  }

  validatePersonalEmail() {
    const regex = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

    if (!regex.test(this.personalEmail)) {
      this.personalEmailError = "It should like gmail.com.";
    } else {
      this.personalEmailError = "";
    }
  }

  validateDesignation() {
    if (this.designation === "") {
      this.designationError = "Please select a designation.";
    } else {
      this.designationError = "";
    }
  }

  validateDepartment() {
    if (this.department === "") {
      this.departmentError = "Please select a department.";
    } else {
      this.departmentError = "";
    }
  }

  validatePrimaryContactNumber() {
    const regex = /^\d{10}$/;

    if (!regex.test(this.pcontactNumber)) {
      this.pcontactNumberError = "It should be 10 digits.";
    } else {
      this.pcontactNumberError = "";
    }
  }

  validateSecondaryContactNumber() {
    const regex = /^\d{10}$/;

    if (!regex.test(this.scontactNumber)) {
      this.scontactNumberError = "It should be 10 digits.";
    } else {
      this.scontactNumberError = "";
    }
  }

  validateEmergencyContactNumber() {
    const regex = /^\d{10}$/;

    if (!regex.test(this.econtactNumber)) {
      this.econtactNumberError = "It should be 10 digits.";
    } else {
      this.econtactNumberError = "";
    }
  }

  validateAddressLine1() {
    const caddressLine1 = this.caddressLine1.trim();
    if (caddressLine1 === "") {
      this.caddressLine1Error = "Address Line 1 cannot be empty.";
    } else if (caddressLine1.length > 80) {
      this.caddressLine1Error = "Address Line 1 cannot exceed 80 characters.";
    } else {
      this.caddressLine1Error = "";
    }
  }

  validateLandmark() {
    const clandmark = this.clandmark.trim();
    if (clandmark === "") {
      this.clandmarkError = "Landmark cannot be empty.";
    } else if (clandmark.length > 50) {
      this.clandmarkError = "Landmark cannot exceed 50 characters.";
    } else {
      this.clandmarkError = "";
    }
  }

  validateCity() {
    if (this.ccity === "") {
      this.ccityError = "Please select a City.";
    } else {
      this.ccityError = "";
    }
  }

  validateState() {
    if (this.cstate === "") {
      this.cstateError = "Please select a State.";
    } else {
      this.cstateError = "";
    }
  }

  validateCountry() {
    if (this.ccountry === "") {
      this.ccountryError = "Please select a Country.";
    } else {
      this.ccountryError = "";
    }
  }

  validateZipCode() {
    const regex = /^\d{6}$/;

    if (!regex.test(this.czipCode)) {
      this.czipCodeError = "Invalid zip code. It should be 6 digits only.";
    } else {
      this.czipCodeError = "";
    }
  }

  validatePermanentAddressLine1() {
    const paddressLine1 = this.paddressLine1.trim();
    if (paddressLine1 === "") {
      this.paddressLine1Error = "Address Line 1 cannot be empty.";
    } else if (paddressLine1.length > 80) {
      this.paddressLine1Error = "Address Line 1 cannot exceed 80 characters.";
    } else {
      this.paddressLine1Error = "";
    }
  }

  validatePermanentLandmark() {
    const plandmark = this.plandmark.trim();
    if (plandmark === "") {
      this.plandmarkError = "Landmark cannot be empty.";
    } else if (plandmark.length > 50) {
      this.plandmarkError = "Landmark cannot exceed 50 characters.";
    } else {
      this.plandmarkError = "";
    }
  }

  validatePermanentCity() {
    if (this.pcity === "") {
      this.pcityError = "Please select a City.";
    } else {
      this.pcityError = "";
    }
  }

  validatePermanentState() {
    if (this.pstate === "") {
      this.pstateError = "Please select a State.";
    } else {
      this.pstateError = "";
    }
  }

  validatePermanentCountry() {
    if (this.pcountry === "") {
      this.pcountryError = "Please select a Country.";
    } else {
      this.pcountryError = "";
    }
  }

  validatePermanentZipCode() {
    const regex = /^\d{6}$/;

    if (!regex.test(this.pzipCode)) {
      this.pzipCodeError = "Invalid zip code. It should be 6 digits only.";
    } else {
      this.pzipCodeError = "";
    }
  }

  handleInputChange(event) {
    this.employeeCode = event.target.value;
    this.validateEmployeeCode();
  }

  handleOfficialEmailChange(event) {
    this.officialEmail = event.target.value;
    this.validateOfficialEmail();
  }

  handlePersonalEmailChange(event) {
    this.personalEmail = event.target.value;
    this.validatePersonalEmail();
  }

  handleDesignationChange(event) {
    this.designation = event.target.value;
    this.validateDesignation();
  }

  handleDepartmentChange(event) {
    this.department = event.target.value;
    this.validateDepartment();
  }

  handlePrimaryContactNumberChange(event) {
    this.pcontactNumber = event.target.value;
    this.validatePrimaryContactNumber();
  }

  handleSecondaryContactNumberChange(event) {
    this.scontactNumber = event.target.value;
    this.validateSecondaryContactNumber();
  }

  handleEmergencyContactNumberChange(event) {
    this.econtactNumber = event.target.value;
    this.validateEmergencyContactNumber();
  }

  handleAddressLine1Change(event) {
    this.caddressLine1 = event.target.value;
    this.validateAddressLine1();
  }

  handleAddressLine2Change(event) {
    this.caddressLine2 = event.target.value;
  }

  handleLandmarkChange(event) {
    this.clandmark = event.target.value;
    this.validateLandmark();
  }

  handleCityChange(event) {
    this.ccity = event.target.value;
    this.validateCity();
  }

  handleStateChange(event) {
    this.cstate = event.target.value;
    this.validateState();
  }

  handleCountryChange(event) {
    this.ccountry = event.target.value;
    this.validateCountry();
  }

  handleZipCodeChange(event) {
    this.czipCode = event.target.value;
    this.validateZipCode();
  }

  handlePermanentAddressLine1Change(event) {
    this.paddressLine1 = event.target.value;
    this.validatePermanentAddressLine1();
  }

  handlePermanentAddressLine2Change(event) {
    this.paddressLine2 = event.target.value;
  }

  handlePermanentLandmarkChange(event) {
    this.plandmark = event.target.value;
    this.validatePermanentLandmark();
  }

  handlePermanentCityChange(event) {
    this.pcity = event.target.value;
    this.validatePermanentCity();
  }

  handlePermanentStateChange(event) {
    this.pstate = event.target.value;
    this.validatePermanentState();
  }

  handlePermanentCountryChange(event) {
    this.pcountry = event.target.value;
    this.validatePermanentCountry();
  }

  handlePermanentZipCodeChange(event) {
    this.pzipCode = event.target.value;
    this.validatePermanentZipCode();
  }

  updated(changedProperties) {
    if (changedProperties.has("editingUserIndex")) {
      if (this.editingUserIndex !== -1) {
        const user = this.employees[this.editingUserIndex];
        if (user) {
          this.fullName = user.fullName;
          this.employeeCode = user.employeeCode;
          this.officialEmail = user.officialEmail;
          this.personalEmail = user.personalEmail;
          this.designation = user.designation;
          this.department = user.department;
          this.pcontactNumber = user.pcontactNumber;
          this.scontactNumber = user.scontactNumber;
          this.econtactNumber = user.econtactNumber;
          this.caddressLine1 = user.caddressLine1;
          this.caddressLine2 = user.caddressLine2;
          this.clandmark = user.clandmark;
          this.ccity = user.ccity;
          this.cstate = user.cstate;
          this.ccountry = user.ccountry;
          this.czipCode = user.czipCode;
          this.paddressLine1 = user.paddressLine1;
          this.paddressLine2 = user.paddressLine2;
          this.plandmark = user.plandmark;
          this.pcity = user.pcity;
          this.pstate = user.pstate;
          this.pcountry = user.pcountry;
          this.pzipCode = user.pzipCode;
        }
      } else {
        // this.resetForm();
      }
    }
  }

  handleNextClick() {
    // Validation code for the current page
    if (this.currentPage === 0) {
      // Page 1 validation
      if (this.fullName.trim() === "") {
        this.fullNameError = "Full Name cannot be empty.";
        return;
      } else if (this.fullName.length > 40) {
        this.fullNameError = "Full Name cannot exceed 40 characters.";
        return;
      }
      // Employee Code validation
      const employeeCodeRegex = /^[A-Za-z]\d{6}$/;
      if (!employeeCodeRegex.test(this.employeeCode)) {
        this.employeeCodeError = "This field is requied.";
        return;
      }
      // Official Email validation
      const officialEmailRegex =
        /^[A-Za-z0-9._%+-]+@(annalect\.com|outlook\.com)$/;
      if (!officialEmailRegex.test(this.officialEmail)) {
        this.officialEmailError = "This field is requied.";
        return;
      }
      // Personal Email validation
      const personalEmailRegex = /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
      if (!personalEmailRegex.test(this.personalEmail)) {
        this.personalEmailError = "This field is requied.";
        return;
      }
      // department validation
      if (this.department === "") {
        this.departmentError = "Please select a department.";
        return;
      }
      // designation validation
      if (this.designation.trim() === "") {
        this.designationError = "Please select a designation.";
        return;
      }
      // Primary Contact Number validation
      const pcontactNumberRegex = /^\d{10}$/;
      if (!pcontactNumberRegex.test(this.pcontactNumber)) {
        this.pcontactNumberError = "This field is requied. ";
        return;
      }
      // Secondary Contact Number validation
      const scontactNumberRegex = /^\d{10}$/;
      if (!scontactNumberRegex.test(this.scontactNumber)) {
        this.scontactNumberError = "This field is requied. ";
        return;
      }

      // Page 2 validation
    } else if (this.currentPage === 1) {
      // Emergency Contact Number validation
      const econtactNumberRegex = /^\d{10}$/;
      if (!econtactNumberRegex.test(this.econtactNumber)) {
        this.econtactNumberError = "This field is requied. ";
        return;
      }

      if (this.caddressLine1.trim() === "") {
        this.caddressLine1Error = "Address Line 1 cannot be empty.";
        return;
      }

      if (this.clandmark.trim() === "") {
        this.clandmarkError = "Landmark cannot be empty.";
        return;
      }

      if (this.ccity.trim() === "") {
        this.ccityError = "City cannot be empty.";
        return;
      }

      if (this.cstate.trim() === "") {
        this.cstateError = "State cannot be empty.";
        return;
      }

      if (this.ccountry.trim() === "") {
        this.ccountryError = "Country cannot be empty.";
        return;
      }

      const czipCodeRegex = /^\d{6}$/;
      if (!czipCodeRegex.test(this.czipCode)) {
        this.czipCodeError = "Invalid zip code. It should have 6 digits.";
        return;
      }
    }

    // If validation passes, go to the next page
    this.currentPage++;

    // If on the last page, reset the current page to 0
    if (this.currentPage === this.totalPages) {
      this.currentPage = 0;
    }
  }

  handlePreviousClick() {
    // Go to the previous page
    this.currentPage--;

    // If on the first page, loop back to the last page
    if (this.currentPage < 0) {
      this.currentPage = this.totalPages - 1;
    }
  }

  render() {
    return html`
      <form class="inline-validation" @submit=${this.handleSubmit} novalidate>
        ${this.currentPage === 0
          ? html`
              <p class="title">Register</p>
              <div class="container">
                <div id="nehu">
                  <div class="form-group">
                    <sl-field class=${this.fullNameError ? "error-field" : ""}>
                      <sl-input
                        pill
                        label="FullName"
                        type="text"
                        id="fullName"
                        .value=${this.fullName}
                        @input=${this.validateFullName}
                        required
                      >
                        <sl-icon name="person-fill" slot="prefix"></sl-icon>
                      </sl-input>
                      ${this.fullNameError
                        ? html`<div class="error">${this.fullNameError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.employeeCodeError ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Employee Code"
                        type="text"
                        id="employeeCode"
                        .value=${this.employeeCode}
                        @input=${this.handleInputChange}
                        required
                      ></sl-input>
                      ${this.employeeCodeError
                        ? html`<div class="error">
                            ${this.employeeCodeError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.officialEmailError ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Official Email"
                        type="email"
                        id="officialEmail"
                        .value=${this.officialEmail}
                        @input=${this.handleOfficialEmailChange}
                        required
                      ></sl-input>
                      ${this.officialEmailError
                        ? html`<div class="error">
                            ${this.officialEmailError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.personalEmailError ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Personal Email"
                        type="email"
                        id="personalEmail"
                        .value=${this.personalEmail}
                        @input=${this.handlePersonalEmailChange}
                        required
                      ></sl-input>
                      ${this.personalEmailError
                        ? html`<div class="error">
                            ${this.personalEmailError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.departmentError ? "error-field" : ""}
                    >
                      <sl-select
                        pill
                        clearable
                        value=""
                        label="Department"
                        id="department"
                        @sl-change="${this.handleDepartmentChange}"
                        required
                      >
                        <sl-option value="">Select department</sl-option>
                        <sl-option value="Information_Technology"
                          >Information Technology</sl-option
                        >
                        <sl-option value="Creative_Services"
                          >Creative Services</sl-option
                        >
                        <sl-option value="Media_Services"
                          >Media Services</sl-option
                        >
                        <sl-option value="Marketing_Science"
                          >Marketing Science</sl-option
                        >
                      </sl-select>
                      ${this.departmentError
                        ? html`<div class="error">${this.departmentError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.designationError ? "error-field" : ""}
                    >
                      <sl-select
                        pill
                        clearable
                        value=""
                        label="Designation"
                        id="designation"
                        @sl-change="${this.handleDesignationChange}"
                        required
                      >
                        <sl-option value="">Select designation</sl-option>
                        <sl-option value="Lead_Engineering"
                          >Lead Engineering</sl-option
                        >
                        <sl-option value="Manager">Manager</sl-option>
                        <sl-option value="Senior_Associate"
                          >Senior Associate</sl-option
                        >
                        <sl-option value="Junior_Associate"
                          >Junior Associate</sl-option
                        >
                        <sl-option value="Graduate_Trainee"
                          >Graduate Trainee</sl-option
                        >
                      </sl-select>
                      ${this.designationError
                        ? html`<div class="error">
                            ${this.designationError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.pcontactNumberError ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Primary Contact Number"
                        type="text"
                        id="pcontactNumber"
                        .value=${this.pcontactNumber}
                        @input=${this.handlePrimaryContactNumberChange}
                        required
                        maxlength="15"
                      ></sl-input>
                      ${this.pcontactNumberError
                        ? html`<div class="error">
                            ${this.pcontactNumberError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.scontactNumberError ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Secondary Contact Number"
                        type="text"
                        id="scontactNumber"
                        .value=${this.scontactNumber}
                        @input=${this.handleSecondaryContactNumberChange}
                        required
                        maxlength="15"
                      ></sl-input>
                      ${this.scontactNumberError
                        ? html`<div class="error">
                            ${this.scontactNumberError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>
                  ${this.currentPage < this.totalPages - 1
                    ? html`
                        <sl-button
                          variant="primary"
                          pill
                          type="button"
                          class="next-btn"
                          @click=${this.handleNextClick}
                        >
                          Next
                        </sl-button>
                      `
                    : ""}
                </div>
                <img src="nehu.webp" alt="" width="500" height="450" />
              </div>
            `
          : ""}
        ${this.currentPage === 1
          ? html`
              <p class="title">Register</p>
              <div class="container">
                <div id="nehu">
                  <div class="form-group">
                    <sl-field
                      class=${this.econtactNumberError ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Emergency Contact Number"
                        type="text"
                        id="econtactNumber"
                        .value=${this.econtactNumber}
                        @input=${this.handleEmergencyContactNumberChange}
                        required
                        maxlength="15"
                      ></sl-input>
                      ${this.econtactNumberError
                        ? html`<div class="error">
                            ${this.econtactNumberError}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field
                      class=${this.caddressLine1Error ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Correspondence Address 1"
                        id="caddress-line-1"
                        type="text"
                        .value="${this.caddressLine1}"
                        @input="${this.handleAddressLine1Change}"
                        required
                      ></sl-input>
                      ${this.caddressLine1Error
                        ? html`<div class="error">
                            ${this.caddressLine1Error}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-input
                      placeholder="Optional"
                      pill
                      label="Correspondence Address 2:"
                      id="caddress-line-2"
                      type="text"
                      .value="${this.caddressLine2}"
                      @input="${this.handleAddressLine2Change}"
                    ></sl-input>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.clandmarkError ? "error-field" : ""}>
                      <sl-input
                        pill
                        label="Correspondence Landmark"
                        id="clandmark"
                        type="text"
                        .value="${this.clandmark}"
                        @input="${this.handleLandmarkChange}"
                        required
                        maxlength="50"
                      ></sl-input>
                      ${this.clandmarkError
                        ? html`<div class="error">${this.clandmarkError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.ccityError ? "error-field" : ""}>
                      <sl-select
                        clearable
                        value=""
                        pill
                        label="Correspondence City"
                        id="ccity"
                        @sl-change="${this.handleCityChange}"
                        required
                      >
                        <sl-option value="">Select City</sl-option>
                        <sl-option value="Banglore">Banglore</sl-option>
                        <sl-option value="Hyderabad">Hyderabad</sl-option>
                        <sl-option value="Mumbai">Mumbai</sl-option>
                        <sl-option value="Delhi">Delhi</sl-option>
                        <sl-option value="Chennai">Chennai</sl-option>
                        <sl-option value="Kolkata">Kolkata</sl-option>
                      </sl-select>
                      ${this.ccityError
                        ? html`<div class="error">${this.ccityError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.cstateError ? "error-field" : ""}>
                      <sl-select
                        clearable
                        value=""
                        pill
                        label="Correspondence State"
                        id="cstate"
                        @sl-change="${this.handleStateChange}"
                        required
                      >
                        <sl-option value="">Select State</sl-option>
                        <sl-option value="Karnataka">Karnataka</sl-option>
                        <sl-option value="Telangana">Telangana</sl-option>
                        <sl-option value="Maharashtra">Maharashtra</sl-option>
                        <sl-option value="Uttar_Pradesh"
                          >Uttar Pradesh</sl-option
                        >
                        <sl-option value="Tamil_Nadu">Tamil Nadu</sl-option>
                        <sl-option value="West_Bengal">West Bengal</sl-option>
                      </sl-select>
                      ${this.cstateError
                        ? html`<div class="error">${this.cstateError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.ccountryError ? "error-field" : ""}>
                      <sl-select
                        clearable
                        value=""
                        pill
                        label="Correspondence Country"
                        id="ccountry"
                        @sl-change="${this.handleCountryChange}"
                        required
                      >
                        <sl-option value="">Select Country</sl-option>
                        <sl-option value="India">India</sl-option>
                        <sl-option value="US">US</sl-option>
                        <sl-option value="UK">UK</sl-option>
                      </sl-select>
                      ${this.ccountryError
                        ? html`<div class="error">${this.ccountryError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.czipCodeError ? "error-field" : ""}>
                      <sl-input
                        pill
                        label="Correspondence Zip Code"
                        id="czip-code"
                        type="text"
                        .value="${this.czipCode}"
                        @input="${this.handleZipCodeChange}"
                        required
                        pattern="[0-9]{6}"
                        minlength="6"
                        maxlength="6"
                      ></sl-input>
                      ${this.czipCodeError
                        ? html`<div class="error">${this.czipCodeError}</div>`
                        : ""}
                    </sl-field>
                  </div>
                  ${this.currentPage > 0
                    ? html`
                        <sl-button
                          variant="primary"
                          outline
                          pill
                          type="button"
                          class="previous-btn"
                          @click=${this.handlePreviousClick}
                        >
                          Previous
                        </sl-button>
                      `
                    : ""}
                  ${this.currentPage < this.totalPages - 1
                    ? html`
                        <sl-button
                          variant="primary"
                          pill
                          type="button"
                          class="next-btn"
                          @click=${this.handleNextClick}
                        >
                          Next
                        </sl-button>
                      `
                    : ""}
                </div>
                <img src="nehu.webp" alt="" width="500" height="450" />
              </div>
            `
          : ""}
        ${this.currentPage === 2
          ? html`
              <p class="title">Register</p>
              <div class="container">
                <div id="nehu">
                  <div class="form-group">
                    <sl-field
                      class=${this.paddressLine1Error ? "error-field" : ""}
                    >
                      <sl-input
                        pill
                        label="Permanent Address 1"
                        id="paddress-line-1"
                        type="text"
                        .value="${this.paddressLine1}"
                        @input="${this.handlePermanentAddressLine1Change}"
                        required
                      ></sl-input>
                      ${this.paddressLine1Error
                        ? html`<div class="error">
                            ${this.paddressLine1Error}
                          </div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-input
                      placeholder="Optional"
                      pill
                      label="Permanent Address 2:"
                      id="paddress-line-2"
                      type="text"
                      .value="${this.paddressLine2}"
                      @input="${this.handlePermanentAddressLine2Change}"
                    ></sl-input>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.plandmarkError ? "error-field" : ""}>
                      <sl-input
                        pill
                        label="Permanent Landmark"
                        id="plandmark"
                        type="text"
                        .value="${this.plandmark}"
                        @input="${this.handlePermanentLandmarkChange}"
                        required
                      ></sl-input>
                      ${this.plandmarkError
                        ? html`<div class="error">${this.plandmarkError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.pcityError ? "error-field" : ""}>
                      <sl-select
                        clearable
                        value=""
                        pill
                        label="Permanent City"
                        id="pcity"
                        @sl-change="${this.handlePermanentCityChange}"
                        required
                      >
                        <sl-option value="">Select City</sl-option>
                        <sl-option value="Banglore">Banglore</sl-option>
                        <sl-option value="Hyderabad">Hyderabad</sl-option>
                        <sl-option value="Mumbai">Mumbai</sl-option>
                        <sl-option value="Delhi">Delhi</sl-option>
                        <sl-option value="Chennai">Chennai</sl-option>
                        <sl-option value="Kolkata">Kolkata</sl-option>
                      </sl-select>
                      ${this.pcityError
                        ? html`<div class="error">${this.pcityError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.pstateError ? "error-field" : ""}>
                      <sl-select
                        clearable
                        value=""
                        pill
                        label="Permanent State"
                        id="pstate"
                        @sl-change="${this.handlePermanentStateChange}"
                        required
                      >
                        <sl-option value="">Select State</sl-option>
                        <sl-option value="Karnataka">Karnataka</sl-option>
                        <sl-option value="Telangana">Telangana</sl-option>
                        <sl-option value="Maharashtra">Maharashtra</sl-option>
                        <sl-option value="Uttar_Pradesh"
                          >Uttar Pradesh</sl-option
                        >
                        <sl-option value="Tamil_Nadu">Tamil Nadu</sl-option>
                        <sl-option value="West_Bengal">West Bengal</sl-option>
                      </sl-select>
                      ${this.pstateError
                        ? html`<div class="error">${this.pstateError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group">
                    <sl-field class=${this.pcountryError ? "error-field" : ""}>
                      <sl-select
                        clearable
                        value=""
                        pill
                        label="Permanent Country"
                        id="pcountry"
                        @sl-change="${this.handlePermanentCountryChange}"
                        required
                      >
                        <sl-option value="">Select Country</sl-option>
                        <sl-option value="India">India</sl-option>
                        <sl-option value="US">US</sl-option>
                        <sl-option value="UK">UK</sl-option>
                      </sl-select>
                      ${this.pcountryError
                        ? html`<div class="error">${this.pcountryError}</div>`
                        : ""}
                    </sl-field>
                  </div>

                  <div class="form-group1">
                    <sl-field class=${this.pzipCodeError ? "error-field" : ""}>
                      <sl-input
                        pill
                        label="Permanent Zip Code"
                        id="pzip-code"
                        type="text"
                        .value="${this.pzipCode}"
                        @input="${this.handlePermanentZipCodeChange}"
                        required
                        pattern="[0-9]{6}"
                        minlength="6"
                        maxlength="6"
                      ></sl-input>
                      ${this.pzipCodeError
                        ? html`<div class="error">${this.pzipCodeError}</div>`
                        : ""}
                    </sl-field>
                  </div>
                  ${this.currentPage > 0
                    ? html`
                        <sl-button
                          variant="primary"
                          outline
                          pill
                          type="button"
                          class="previous-btn"
                          @click=${this.handlePreviousClick}
                        >
                          Previous
                        </sl-button>
                      `
                    : ""}
                  ${this.currentPage === this.totalPages - 1
                    ? html`
                        <sl-button
                          variant="success"
                          type="submit"
                          pill
                          class="submit-btn"
                          >${this.editingUserIndex !== -1
                            ? "Save"
                            : "Submit"}</sl-button
                        >
                      `
                    : ""}
                </div>
                <img src="nehu.webp" alt="" width="500" height="450" />
              </div>
            `
          : ""}
      </form>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();

    const errorMessages = {};

    if (this.paddressLine1.trim() === "") {
      this.paddressLine1Error = "Address Line 1 cannot be empty.";
      return;
    }

    if (this.plandmark.trim() === "") {
      this.plandmarkError = "Landmark cannot be empty.";
      return;
    }

    if (this.pcity.trim() === "") {
      this.pcityError = "City cannot be empty.";
      return;
    }

    if (this.pstate.trim() === "") {
      this.pstateError = "State cannot be empty.";
      return;
    }

    if (this.pcountry.trim() === "") {
      this.pcountryError = "Country cannot be empty.";
      return;
    }

    const pzipCodeRegex = /^\d{6}$/;
    if (!pzipCodeRegex.test(this.pzipCode)) {
      this.pzipCodeError = "Invalid zip code. It should have 6 digits.";
      return;
    }

    if (Object.keys(errorMessages).length > 0) {
      this.fullNameError = errorMessages.fullName || "";
      this.employeeCodeError = errorMessages.employeeCode || "";
      this.officialEmailError = errorMessages.officialEmail || "";
      this.personalEmailError = errorMessages.personalEmail || "";
      this.designationError = errorMessages.designation || "";
      this.departmentError = errorMessages.department || "";
      this.pcontactNumberError = errorMessages.pcontactNumber || "";
      this.scontactNumberError = errorMessages.scontactNumber || "";
      this.econtactNumberError = errorMessages.econtactNumber || "";
      this.caddressLine1Error = errorMessages.caddressLine1 || "";
      this.clandmarkError = errorMessages.clandmark || "";
      this.ccityError = errorMessages.ccity || "";
      this.cstateError = errorMessages.cstate || "";
      this.ccountryError = errorMessages.ccountry || "";
      this.czipCodeError = errorMessages.czipCode || "";
      this.paddressLine1Error = errorMessages.paddressLine1 || "";
      this.plandmarkError = errorMessages.plandmark || "";
      this.pcityError = errorMessages.pcity || "";
      this.pstateError = errorMessages.pstate || "";
      this.pcountryError = errorMessages.pcountry || "";
      this.pzipCodeError = errorMessages.pzipCode || "";

      return;
    }

    // Store the data in local storage
    const employees = {
      fullName: this.fullName,
      employeeCode: this.employeeCode,
      officialEmail: this.officialEmail,
      personalEmail: this.personalEmail,
      designation: this.designation,
      department: this.department,
      pcontactNumber: this.pcontactNumber,
      scontactNumber: this.scontactNumber,
      econtactNumber: this.econtactNumber,

      caddressLine1: this.caddressLine1,
      caddressLine2: this.caddressLine2,
      clandmark: this.clandmark,
      ccity: this.ccity,
      cstate: this.cstate,
      ccountry: this.ccountry,
      czipCode: this.czipCode,

      paddressLine1: this.paddressLine1,
      paddressLine2: this.paddressLine2,
      plandmark: this.plandmark,
      pcity: this.pcity,
      pstate: this.pstate,
      pcountry: this.pcountry,
      pzipCode: this.pzipCode,
    };

    alert("Employee data submitted successfully!");

    const storedData = localStorage.getItem("employees");
    let employeeStore = storedData ? JSON.parse(storedData) : [];

    employeeStore.push(employees);

    localStorage.setItem("employees", JSON.stringify(employeeStore));

    window.location.reload();

    const event = new CustomEvent("save-form", {
      detail: { employees, index: this.editingUserIndex },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define("nehu-3", EmployeeForm);
