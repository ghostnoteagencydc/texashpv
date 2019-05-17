import Submenu from './submenu'
import Head from 'next/head'

import './header.css'

class Header extends React.Component {
  render() {
    if (this.props.menudata) {
      const menu = {}
      this.props.menudata.forEach(function(item) {
        if (item.menu_item_parent == 0) {
          if (!menu['parentMenu']) {
            menu['parentMenu'] = [
              { id: item.ID, title: item.title, url: item.url }
            ]
            menu[item.ID] = []
          } else {
            menu['parentMenu'].push({
              id: item.ID,
              title: item.title,
              url: item.url
            })
            menu[item.ID] = []
          }
        } else {
          menu[item.menu_item_parent].push({ title: item.title, url: item.url })
        }
      })
      return (
        <header>
          <Head>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
              integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
              crossorigin="anonymous"
            />
          </Head>
          <h1>HPV Roundtable</h1>
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
            ))}
          </div>
        </header>
      )
    } else {
      return null
    }
  }
}

export default Header
