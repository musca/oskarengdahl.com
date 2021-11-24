import { LitElement, html } from 'lit';

export const tagName = 'my-repos';

class Repos extends LitElement {
    static get properties() {
      return {
        repos: { type: Array },
        user: { type: String },
        num: { type: Number}
      }
    }

    constructor() {
      super();
    }
    async firstUpdated() {
      await fetch("https://api.github.com/users/musca/repos")
      .then((res) => res.json())
      .then(async (data) => {
        this.repos = data;
      });
    }

    render() {
        if (!this.repos) {
            return html`
                <h4>Loading... ${this.user}</h4>
            `;
        }
        return html`
          <ul>
            ${this.repos.map(
              (u) =>
                html`
                  <li>${u.name}, ${u.url}</li>
                `
            )}
          </ul>
        `;
    }
}

customElements.define(tagName, Repos);
