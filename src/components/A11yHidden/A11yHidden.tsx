import { ComponentType } from 'react';
import { classNames } from 'utils';

type A11yHiddenProps = {
  as: string | ComponentType<{className:string}>,
  className?: string,
  children:string,
  href?:string
}

A11yHidden.defaultProps ={
  as: 'span',
  className: ''
}

export function A11yHidden({ as:Comp, className, ...restProps }: A11yHiddenProps) {
  return <Comp className={classNames('a11yHidden')(className)} {...restProps} />
}
