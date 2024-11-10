import { App } from '../../router/router';
import { thingsAre } from '../../things';
import { fragmentDOM } from '../../utils/DOM';
import './Frontend.css';

export function Frontend() {
  const HTMLPageTemplate = `
	<main id="home">
		<img src="../../vite-full-js.png" class="logo" alt="JavaScript logo" href="https://github.com/Leyinko/vite-full-js" target="_blank"/>
    <h1>Hello Vite Full JS !</h1>
    <div class="card">
      <button id="things" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
	</main>
	`;

  App.appendChild(fragmentDOM(HTMLPageTemplate)), CompHandlers();
}

const CompHandlers = () => {
  thingsAre(document.querySelector('#things'));
};
