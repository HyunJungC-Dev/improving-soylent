import { classNames } from 'utils';
import styles from './Navigation.module.css';

type MenuType = {
  categorySrc: string;
  category: string;
  description: string;
};

type MenuProps = {
  id: string;
  dropdownList?: MenuType[];
  dropdownLinks?: string[];
};

type MenuItemType = {
  id: string;
  dropdown: boolean;
  dropdownList?: MenuType[];
  dropdownLinks?: string[];
  href: string;
  text: string;
};

type MenuItemProps = {
  key: string;
  menuItem: MenuItemType;
};

type NavigationProps = {
  menubarList: MenuItemType[];
  className?: string;
};

const suuid = require('short-uuid');

function Menu({ id, dropdownList, dropdownLinks }: MenuProps) {
  return (
    <section tabIndex={-1} className={styles.dropdownMenu}>
      <ul role="menu" className={classNames('resetList')(styles.dropdownList)}>
        {dropdownList?.map(dropdownItem => (
          <li key={suuid.generate()} role="menuitem">
            <a href={dropdownItem.category.replace(/ /gi, '-')} className={styles.dropdownItemLink}>
              <img
                src={dropdownItem.categorySrc}
                alt={dropdownItem.category}
                title={dropdownItem.category}
                role="presentation"
                width="220px"
                height="190px"
              ></img>
              <dfn className="resetDfn">{dropdownItem.category}</dfn>
              <p className="resetP">{dropdownItem.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <ul className={classNames('resetList')(styles.dropdownLinks)}>
        {dropdownLinks?.map(link => (
          <li key={suuid.generate()}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <>
      <li
        role="menuitem"
        aria-haspopup={!!menuItem.dropdown}
        className={
          menuItem.dropdown ? classNames(styles.menuItem)(styles.hasDropdownMenu) : styles.menuItem
        }
      >
        <a
          href={menuItem.href}
          className={
            menuItem.dropdown
              ? classNames(styles.menuItemLink)(styles.arrowUp)
              : styles.menuItemLink
          }
        >
          {menuItem.text}
        </a>
        {menuItem.dropdown && (
          <Menu
            id={menuItem.id}
            dropdownList={menuItem.dropdownList}
            dropdownLinks={menuItem.dropdownLinks}
          />
        )}
      </li>
    </>
  );
}

export function Navigation({ menubarList }: NavigationProps) {
  return (
    <>
      <ul role="menubar" className={classNames('resetList')(styles.menuBar)}>
        {menubarList.map(menuItem => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </>
  );
}
