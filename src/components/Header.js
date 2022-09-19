import React from "react";

const Header = () => (
  <aside className="section padding-bottom-0">
    <div className="container header">
      <div className="header__left">
        <a href="tel:+375296385810">A1&nbsp;+375 (29) 638-58-10</ a>
        <a href="tel:+375296385810">МТС&nbsp;+375 (29) 638-58-10</ a>
      </div>
      <div className="header__main">
        <span className="header__title">Юрист Светлана Циунель</span>
        <span className="header__adress">г. Минск, ул. Мельникайте 8</span>
      </div>
      <div className="header__right">
        <a className="header__email" href="mailto:info@info.com">email:&nbsp;info@info.com</a>
        <span className="header__worktime">Пн - Сб: 9.00 - 18.00</span>
      </div>
    </div>
  </aside>
);

export default Header;