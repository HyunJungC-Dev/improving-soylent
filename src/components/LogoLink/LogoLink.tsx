import { ReactComponent as SvgIconLogo } from 'assets/icons/logo.svg';
import { A11yHidden } from 'components';
import React from 'react';
import styles from './LogoLink.module.css';

type LogoLinkProps = {
  width: number;
  color?: string;
  backgroundColor?: string;
};

export function LogoLink({ width, color, backgroundColor }: LogoLinkProps) {
  const svgStyle: React.CSSProperties = {
    backgroundColor
  };

  return (
    <>
      <a href="/" className={styles.logoLink}>
        <A11yHidden as="h1">soylent</A11yHidden>
        <SvgIconLogo
          aria-hidden="true"
          focusable="false"
          role="presentation"
          title="soylent"
          fill={color}
          style={svgStyle}
          width={width}
        />
      </a>
    </>
  );
}
