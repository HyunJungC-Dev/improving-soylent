import { A11yHidden } from 'components';
import { classNames } from 'utils';
import { createPortal } from 'react-dom';
import styles from './SkipToContent.module.css';

type SkipToContentProps = {
  targetId: string;
  text: string;
  className?: string;
};

export function SkipToContent({ targetId, className, text, ...restProps }: SkipToContentProps) {
  const handleClick = (targetId = 'content') => {
    const targetNode = document.getElementById(targetId);
    // targetNode가 있으면 거기로 focus 이동
    if (targetNode) targetNode.focus();
  };

  // createPortal : id가 skip-to-content인 DOM 요소를 찾아 들어간다.
  return createPortal(
    <A11yHidden
      as="a"
      href={`#${targetId}`}
      className={classNames(`${styles.skipLink} focusable`)(className)}
      onClick={() => handleClick()}
      {...restProps}
    >
      {text}
    </A11yHidden>,
    document.getElementById('skip-to-content')!
    // !를 마지막에 붙이면 이건 절대 null이 아니라고 보장하는 것
  );
}
