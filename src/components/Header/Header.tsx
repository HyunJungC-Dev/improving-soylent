import { Navigation, LogoLink } from 'components';
import { navigationList } from 'app/staticData';
import { ReactComponent as SvgIconLoginOrAccount } from 'assets/icons/loginOrAccount.svg';
import { ReactComponent as SvgIconCart } from 'assets/icons/cart.svg';

import styles from './Header.module.css';

type SVGLinkProps = {
  width: number;
  color?: string;
};

function CartLink({ width, color }: SVGLinkProps) {
  const height = ((width / 7) * 8).toFixed(2);
  return (
    <a href="/cart">
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
    <a href="/login">
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
  return (
    <>
      <aside className={styles.topBanner}>
        Free shipping to the continental U.S. on orders $25 and over!
      </aside>
      <header className={styles.header}>
        <div role="presentation" className={styles.forDropdownMenuLayer}>
          <LogoLink width={80} backgroundColor="white" />
          <Navigation menubarList={navigationList} />
          <LoginOrAccountLink width={20} />
          <CartLink width={20} />
        </div>
      </header>
    </>
  );
}
