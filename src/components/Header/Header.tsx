/* eslint-disable jsx-a11y/role-has-required-aria-props */
import { Navigation, LogoLink } from 'components';
import { navigationList } from 'assets/staticData';
import { ReactComponent as SvgIconLoginOrAccount } from 'assets/icons/loginOrAccount.svg';
import { ReactComponent as SvgIconCart } from 'assets/icons/cart.svg';
import { classNames } from 'utils';
import styles from './Header.module.css';

type SVGLinkProps = {
  width: number;
  color?: string;
};

function CartLink({ width, color }: SVGLinkProps) {
  const height = ((width / 7) * 8).toFixed(2);
  return (
    <a href="/cart" className={styles.svgIconLink}>
      <SvgIconCart
        aria-hidden="true"
        focusable="false"
        role="presentation"
        width={width}
        height={height}
        fill={color}
      />
    </a>
  );
}

function LoginOrAccountLink({ width, color }: SVGLinkProps) {
  const height = ((width / 7) * 8).toFixed(2);
  return (
    <a href="/login" className={styles.svgIconLink}>
      <SvgIconLoginOrAccount
        aria-hidden="true"
        focusable="false"
        role="presentation"
        width={width}
        height={height}
        fill={color}
      />
    </a>
  );
}

export function Header() {
  const LOGO_ICON_WIDTH = 80;
  const HEADER_ICON_WIDTH = 15;
  return (
    <>
      <aside className={styles.topBanner}>
        Free shipping to the continental U.S. on orders $25 and over!
      </aside>
      <header className={styles.header}>
        <div role="presentation" className={styles.forDropdownMenuLayer}>
          <LogoLink width={LOGO_ICON_WIDTH} backgroundColor="white" />
          <Navigation menubarList={navigationList} />
          <ul className={classNames('resetList')(styles.userMenu)}>
            <li className={classNames(styles.userMenuItem)(styles.storeLocatorLink)}>
              <a href="/">STORE LOCATOR</a>
            </li>
            <li className={styles.userMenuItem}>
              <LoginOrAccountLink width={HEADER_ICON_WIDTH} />
            </li>
            <li className={styles.userMenuItem}>
              <CartLink width={HEADER_ICON_WIDTH} />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
