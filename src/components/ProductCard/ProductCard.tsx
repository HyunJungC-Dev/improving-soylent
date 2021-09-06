import { A11yHidden } from 'components';
import { classNames } from 'utils';
import { useState } from 'react';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  url: string;
  featuredImageSrc: string;
  alternateImageSrc?: string;
  title: string;
  bulkQuantity: number;
  unitName: string;
  price: number;
  discountVariantPrice: string;
  discountPercentage: string;
};

export function ProductCard({
  url,
  featuredImageSrc,
  title,
  bulkQuantity,
  unitName,
  price,
  discountVariantPrice,
  discountPercentage
}: ProductCardProps) {
  const oneTimePurchasePrice = (+discountVariantPrice / (1 - +discountPercentage / 100)).toFixed(2);

  return (
    <>
      <a href={url}>
        <figure className="resetFigure">
          <img src={featuredImageSrc.replace('{width}', '250')} alt={title} title={title} />
          <figcaption>
            {title}
            <strong>
              {bulkQuantity + ' ' + unitName.charAt(0).toUpperCase() + unitName.slice(1) + 's'}
            </strong>
            <em>별점</em>
          </figcaption>
        </figure>
      </a>

      <A11yHidden as="span" id="purchaseOption-label">
        Purchase Option
      </A11yHidden>
      <ul
        id="rg-purchaseOption"
        className={styles.radiogroup}
        role="radiogroup"
        aria-labelledby="label-purchaseOption"
        aria-activedescendant="rb-subscribeAndSave"
        tabIndex={0} // typescript에서는 tabindex를 {}로 넣어줘야 한다.
      >
        <li id="rb-subscribeAndSave" role="radio" aria-checked="false">
          Subscribe & Save
          <strong> {'$' + discountVariantPrice}</strong>
          <em>{'(' + (+discountVariantPrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}</em>
        </li>
        <li id="rb-oneTimePurchase" role="radio" aria-checked="false">
          {' '}
          One-time Purchase
          <strong> {'$' + oneTimePurchasePrice}</strong>
          <em>{'(' + (+oneTimePurchasePrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}</em>
        </li>
      </ul>
    </>
  );
}
