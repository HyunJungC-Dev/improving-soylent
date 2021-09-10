import { ComponentType } from 'react';
import { classNames } from 'utils';

type A11yHiddenProps = {
  as: string | ComponentType<{ className: string }>;
  className?: string;
  children: string;
  onClick?: () => void; // 아무것도 리턴하지 않는 함수를 의미
  href?: string;
  id?: string;
};

A11yHidden.defaultProps = {
  as: 'span',
  className: ''
};

export function A11yHidden({ as: Comp, className, ...restProps }: A11yHiddenProps) {
  return <Comp className={classNames('a11yHidden')(className)} {...restProps} />;
}
