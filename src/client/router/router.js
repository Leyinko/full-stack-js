import { Frontend } from '../pages/Frontend/Frontend';
import { Backend } from '../pages/Backend/Backend';
import { Example } from '../pages/Example/Example';

window.addEventListener('popstate', router);

export const App = document.querySelector('#app');

export const routes = [
  {
    path: '/frontend',
    page: Frontend,
  },
  {
    path: '/backend',
    page: Backend,
  },

  // Uncomment to see Example page and Example Component template.
  // {
  //   path: '/enjoy',
  //   page: Example,
  // },
];

function router() {
  let path = window.location.pathname;
  let pageSelector = '#app > :last-of-type:not(nav)';

  document.querySelector('.actual-page')?.remove();

  const { page } = routes.find((route) => route.path === path) || {};
  page && page();

  document.querySelector(`${pageSelector}`).className = 'actual-page';
}

export function navigationState(e) {
  let href = e.target.getAttribute('href');
  if (href) e.target.tagName === 'A' ? (e.preventDefault(), navigate(href)) : window.open(href);
}

export const navigate = (path) => {
  const links = document.querySelectorAll('a');
  links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === path));
  window.history.pushState(null, null, window.location.origin + path);
  router();
};
