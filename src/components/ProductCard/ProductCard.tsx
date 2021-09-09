/* eslint-disable camelcase */
import { A11yHidden, Counter } from 'components';
import { classNames } from 'utils';
// import { classNames } from 'utils';
// import { useState } from 'react';
import { productType } from 'components/Carousel/Carousel';
import styles from './ProductCard.module.css';

const short = require('short-uuid');

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
          <option key={short.generate()} value={item.trim()}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

function AddToCartButton() {
  return (
    <>
      <div>
        <Counter initialCount={0} step={1} min={0} />
        <button>Add to Cart</button>
      </div>
    </>
  );
}

type ProductCardProps = {
  productInfo: productType;
};

export function ProductCard({ productInfo }: ProductCardProps) {
  const { price, subscriptions, url, featuredImage, title, bulkQuantity, unitName } = productInfo;
  const {
    discount_percentage,
    shipping_interval_frequency,
    shipping_interval_unit_type,
    has_subscription,
    is_subscription_only
  } = subscriptions;
  const discountPrice = ((price / 100) * (1 - +discount_percentage / 100)).toFixed(2);

  const imgWidth = 150;

  return (
    <>
      <a href={url}>
        <img
          className={styles.productImg}
          alt={title}
          title={title}
          aria-hidden
          src={featuredImage.replace('{width}', imgWidth.toString())}
        />
        <h3 className={styles.productTitle}>{title}</h3>
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
        className={classNames('resetList')(styles.radiogroup)}
        role="radiogroup"
        aria-labelledby="label-purchaseOption"
        aria-activedescendant="rb-subscribeAndSave"
        tabIndex={0} // typescript에서는 tabindex를 {}로 넣어줘야 한다.
      >
        {has_subscription && (
          <li
            id="rb-subscribeAndSave"
            role="radio"
            aria-checked="false"
            className={styles.purchaseOption}
          >
            Subscribe & Save
            <span className={styles.purchaseOptionPrice}>
              <strong> {'$' + discountPrice}</strong>
              <em>{'(' + (+discountPrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}</em>
            </span>
          </li>
        )}
        {is_subscription_only && (
          <li
            id="rb-oneTimePurchase"
            role="radio"
            aria-checked="false"
            className={styles.purchaseOption}
          >
            {' '}
            One-time Purchase
            <span className={styles.purchaseOptionPrice}>
              <strong> {'$' + (price / 100).toFixed(2)}</strong>
              <em>{'(' + (+price / 100 / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}</em>
            </span>
          </li>
        )}
      </ul>
      {has_subscription && (
        <>
          <SelectBox
            selectLabel="Deliver Every:"
            selectName="deliverEvery"
            itemList={shipping_interval_frequency
              .split(',')
              .map(frequency => frequency + ' ' + shipping_interval_unit_type)}
          />
          <strong className={styles.discountInfo}>
            Subscribe & Save {(+discount_percentage).toFixed(2)}
          </strong>
        </>
      )}
      <AddToCartButton />
    </>
  );
}
