import { App } from '../../router/router';
import { fragmentDOM } from '../../utils/DOM';
import { FetchAPI } from '../../utils/FetchAPI';
import './Backend.css';

export function Backend() {
  const HTMLPageTemplate = `
	<section id="fetch">
		<img src="/fetch.svg" class="logo" alt="Fetch logo"/>
		<h1>Ping</h1>
		<div id="pong">
			<input type="text" placeholder="/api/test/">
			<aside id="response-container"></aside>
		</div>
	</section>
	`;

  App.appendChild(fragmentDOM(HTMLPageTemplate)), CompHandlers();
}

const CompHandlers = () => {
  sayPong();
};

const sayPong = () => {
  const input = document.querySelector('#pong > input');
  const container = document.querySelector('#response-container');

  const getPong = async () => {
    if (/ping/i.test(input.value)) {
      await FetchAPI(`/api/test/${input.value}`, {}, 'GET').then((data) => fillContainer(data));
    } else {
      fillContainer('Try again');
    }
  };

  const fillContainer = (data) => {
    (container.innerHTML = `<h2>${data}</h2>`),
      setTimeout(() => (container.innerHTML = ''), 1500),
      (input.value = ''),
      input.blur();
  };

  input.addEventListener('keydown', (e) => e.key === 'Enter' && getPong());
};
