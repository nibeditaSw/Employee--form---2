import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  static get styles() {
    return css`
      nav {
        background: royalblue;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        font-family: monospace;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 1px 1px 12px #000;
        border-radius: 30px;
        
      }

      ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin: 0 1rem;
      }

      a {
        color: white;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <div>Annalect</div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="nav.html">DataList</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-1', Navbar);