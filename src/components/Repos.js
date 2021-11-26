import { LitElement, html, css } from 'lit';

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
      await fetch("https://production.github-public-events.koe.workers.dev/")
      .then((res) => res.json())
      .then(async (data) => {
        this.repos = data;
      });
    }
    static styles = css`
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        display: flex;
        margin-bottom: 2rem;
      }
      svg {
        width: 20px;
        height: 20px;
      }
      svg + div {
        padding-left: 1.2rem;
      }
      h4 {
        margin: 0 0 0.4rem 0;
      }
      a {
        color: #079bd9;
        text-decoration: none;
      }
    `;

    render() {
        if (!this.repos) {
          return html`<aside></aside>`;
        }
        return html`
          <ul>
            ${this.repos.map(
              (u) =>
                html`
                  <li>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-commit">
                      <path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
                    </svg>
                    <div>
                      <h4>${u.commit[0].message}</h4>
                      pushed commit
                      <a href=${(u.commit) ? u.commit[0].url.replace('api.','').replace('/repos','') : null }>
                        ${(u.commit) ? u.commit[0].sha.slice(0, 7) : null }
                      </a>
                      to ${u.name} 
                    </div>
                  </li>
                `
            )}
          </ul>
        `;
    }
}

customElements.define(tagName, Repos);
