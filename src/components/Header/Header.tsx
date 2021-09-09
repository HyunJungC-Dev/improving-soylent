/* eslint-disable jsx-a11y/role-has-required-aria-props */
import { Navigation, LogoLink, A11yHidden } from 'components';
import { navigationList, countryList } from 'assets/staticData';
import { ReactComponent as SvgIconLoginOrAccount } from 'assets/icons/loginOrAccount.svg';
import { ReactComponent as SvgIconCart } from 'assets/icons/cart.svg';
import styles from './Header.module.css';

const short = require('short-uuid');

type SVGLinkProps = {
  width: number;
  color?: string;
};

type CountryItemProps = {
  countryInfo: {
    countryName: string;
    nationalFlagSrc: string;
  };
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

function CountryItem({ countryInfo }: CountryItemProps) {
  const { countryName, nationalFlagSrc } = countryInfo;
  return (
    <>
      <span>{countryName}</span>
      <img src={nationalFlagSrc} alt={countryName}></img>
    </>
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
          <LoginOrAccountLink width={HEADER_ICON_WIDTH} />
          <CartLink width={HEADER_ICON_WIDTH} />
        </div>
      </header>
    </>
  );
}
