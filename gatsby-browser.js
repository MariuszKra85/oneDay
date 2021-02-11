/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const loadableReady = require('@loadable/component').loadableReady;

exports.replaceHydrateFunction = () => {
    return (element, container, callback) => {
      loadableReady(() => {
          ReactDOM.render(element, container, callback);
      });
    };
  };