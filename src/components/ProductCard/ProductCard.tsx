import { A11yHidden, Counter } from 'components';
import { classNames } from 'utils';
// import { classNames } from 'utils';
// import { useState } from 'react';
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

type SelectBoxProps = {
  selectLabel: string;
  selectName: string;
  itemList: string[];
};

function SelectBox({ selectLabel, selectName, itemList }: SelectBoxProps) {
  return (
    <>
      <label className={styles.selectBoxLabel} htmlFor={selectLabel + '-select'}>
        {selectLabel}
      </label>
      <select name={selectName}>
        id={selectLabel + '-select'}
        {itemList.map(item => (
          <option value={item.trim()}>{item}</option>
        ))}
      </select>
    </>
  );
}

function AddToCartButton() {
  return (
    <>
      <Counter initialCount={0} step={1} min={0} />
      <button>Add to Cart</button>
    </>
  );
}

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

  const imgWidth = 250;

  const selectBoxList = ['15 DAYS', '30 DAYS', '45 DAYS', '60 DAYS'];

  return (
    <>
      <li className={styles.productCard}>
        <a href={url}>
          <figure className="resetFigure">
            <img
              className={styles.productImg}
              src={featuredImageSrc.replace('{width}', imgWidth.toString())}
              alt={title}
              title={title}
            />
            <figcaption className={styles.productTitle}>{title}</figcaption>
          </figure>
          <p className={styles.productSimpleInfo}>
            <strong>
              {bulkQuantity + ' ' + unitName.charAt(0).toUpperCase() + unitName.slice(1) + 's'}
            </strong>
            <em>별점</em>
          </p>
        </a>

        <A11yHidden as="span" id="label-purchaseOption">
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
            <em>
              {'(' + (+discountVariantPrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}
            </em>
          </li>
          <li id="rb-oneTimePurchase" role="radio" aria-checked="false">
            {' '}
            One-time Purchase
            <strong> {'$' + oneTimePurchasePrice}</strong>
            <em>
              {'(' + (+oneTimePurchasePrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}
            </em>
          </li>
        </ul>
        <SelectBox
          selectLabel="Deliver Every:"
          selectName="deliverEvery"
          itemList={selectBoxList}
        />
        <AddToCartButton />
      </li>
    </>
  );
}
