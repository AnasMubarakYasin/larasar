import zroute, { RouteParamsWithQueryOverload } from 'ziggy-js';
const response = await fetch('/api/ziggy');
const routes = await response.json();
export default routes;
export function route(name: string, params?: RouteParamsWithQueryOverload) {
    return zroute(name, params, undefined, routes)
}
