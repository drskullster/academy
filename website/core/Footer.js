const React = require("react");

class Footer extends React.Component {
  render() {
    return <div className="languages">
          <a href="/academy/en/intro.html">EN</a>
          <a href="/academy/fr/intro.html">FR</a>
    </div>;
  }
}

module.exports = Footer;
