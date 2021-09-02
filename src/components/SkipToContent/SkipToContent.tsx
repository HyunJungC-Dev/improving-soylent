import styles from './SkipToContent.module.css';
import { A11yHidden } from "components"
import { classNames } from "utils"

type SkipToContentProps = {
    targetId:string,
    text:string
    className?: string,
}

export function SkipToContent({ targetId, className, text, ...restProps }: SkipToContentProps) {
    return (
        <A11yHidden
          as='a'
          href={`#${targetId}`}
          className={classNames(`${styles.skipLink} focusable`)(className)}
          {...restProps}
        >
          {text}
        </A11yHidden>
    )
}
