import { App } from './App';

export const getHtml = () => {
    const app = <App title="My Title" />;
    const appStr = ReactDOMServer.renderToString(app);
    return appStr;
};