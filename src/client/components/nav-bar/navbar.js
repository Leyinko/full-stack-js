import { App, navigate, navigationState, routes } from '../../router/router';
import { fragmentDOM } from '../../utils/DOM';
import './navbar.css';

export const StartNavigation = () => {
  const nav = document.createElement('nav');
  nav.className = 'navigation-bar';
  routes.forEach((route) => nav.append(anchor(route.path)));
  App.prepend(nav), App.addEventListener('click', navigationState), navigate('/frontend');
};

export function anchor(path) {
  let template = `<a href="${path}">${path.at(1).toUpperCase() + path.slice(2)}</a>`;
  let anchor = fragmentDOM(template);
  return anchor;
}
