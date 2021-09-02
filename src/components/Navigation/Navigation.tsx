import { SkipToContent } from 'components';
import { classNames } from 'utils';
import styles from './Navigation.module.css';

type MenuType = {
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

function Menu({ id, dropdownList, dropdownLinks }: MenuProps) {
  return (
    <section className={styles.dropdownMenu}>
      <ul role="menu" className="resetList">
        {dropdownList?.map(dropdownItem => (
          <li key={id + 'dropdownItem'} role="menuitem">
            <a href={dropdownItem.category.replace(/ /gi, '-')}>
              <img src="" alt="그림" title="" role="presentation"></img>
              <dfn className="resetDfn">{dropdownItem.category}</dfn>
              <p>{dropdownItem.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <ul className={classNames('resetList')(styles.dropdownLinks)}>
        {dropdownLinks?.map(link => (
          <li>
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
      <li role="menuitem" aria-haspopup={!!menuItem.dropdown} className={styles.menuItem}>
        <a href={menuItem.href} className={menuItem.dropdown ? styles.arrowUp : ''}>
          {menuItem.text}
        </a>
        {menuItem.dropdown && (
          <Menu
            id={menuItem.id + 'menuItem'}
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
      <SkipToContent targetId="main" text="SkipToContent" />
      <ul role="menubar" className={classNames('resetList')(styles.menuBar)}>
        {menubarList.map(menuItem => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </>
  );
}
