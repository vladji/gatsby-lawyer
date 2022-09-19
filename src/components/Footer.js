import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Link to="/" className="footer__logo site-logo-name">
            Юрист Светлана Циунель
          </Link>
          <div className="container footer__content">
            <a href="tel:+375296385810">A1&nbsp;+375 (29) 638-58-10</ a>
            <a href="tel:+375296385810">МТС&nbsp;+375 (29) 638-58-10</ a>
            <a href="mailto:info@info.com">email:&nbsp;info@info.com</a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
