import Submenu from './submenu';

import './header.css';

class Header extends React.Component {
  render() {
    const menu = {};
    this.props.menudata.forEach(function (item) {
      if (item.menu_item_parent == 0) {
        if (!menu['parentMenu']) {
          menu['parentMenu'] = [{ id: item.ID, title: item.title, url: item.url }]
          menu[item.ID] = [];
        } else {
          menu['parentMenu'].push({ id: item.ID, title: item.title, url: item.url })
          menu[item.ID] = [];
        }
      } else {
        menu[item.menu_item_parent].push({ title: item.title, url: item.url });
      }
    })
    return (
      <header>
        <h1>Client Logo Here</h1>
        <div className="navmenu">
          {/* {parentMenu.map(menuitem => (
            <div>
              <span key={menuitem.id}>{console.log(menuitem)}{menuitem.title}</span>
              <Submenu item={menuitem} />
            </div>
          ))} */}
          {menu.parentMenu.map(menuitem => (
            <div key={menuitem.id} className="parentnav-item">
              <a href={menuitem.url}>{menuitem.title}</a>
              <Submenu data={menu[menuitem.id]} />
            </div>
          ))

          }
        </div>
      </header>
    );
  }
}

export default Header;
