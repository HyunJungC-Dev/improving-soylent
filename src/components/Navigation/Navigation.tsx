import { SkipToContent } from 'components';
import { classNames } from 'utils';
import styles from './Navigation.module.css';

type MenuProps = {
  category: string;
  description: string;
};

type MenuItemType = {
  id: string;
  dropdown: boolean;
  dropdownList?: MenuProps[];
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

function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <>
      <li role="menuitem" className={styles.menuItem}>
        <a href={menuItem.href} className={menuItem.dropdown ? styles.arrowUp : ''}>
          {menuItem.text}
        </a>
      </li>
    </>
  );
}

export function Navigation({ menubarList, className }: NavigationProps) {
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
