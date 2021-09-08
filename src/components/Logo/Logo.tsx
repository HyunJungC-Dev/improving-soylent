import { ReactComponent as SvgIconLogo } from 'assets/icons/logo.svg';
import { A11yHidden } from 'components';
import React from 'react';
import styles from './Logo.module.css';

type LogoProps = {
  width: number;
  color?: string;
  backgroundColor?: string;
};

export function Logo({ width, color, backgroundColor }: LogoProps) {
  const svgStyle: React.CSSProperties = {
    backgroundColor
  };

  return (
    <>
      <a href="/" className={styles.logoLink}>
        <A11yHidden as="h1">soylent</A11yHidden>
        <SvgIconLogo
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
