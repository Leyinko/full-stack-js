import { App } from '../../router/router';
import { fragmentDOM } from '../../utils/DOM';
import './Example.css';

export function Example() {
  const HTMLPageTemplate = `
	<section id="example">
		<h1>Start your SPA Application !</h1>
	</section>
	`;

  App.appendChild(fragmentDOM(HTMLPageTemplate)), CompHandlers();
}

const CompHandlers = () => {};
