/* eslint-disable camelcase */
import { ProductCard } from 'components';
import { classNames } from 'utils';
import { ReactComponent as SvgIconLeftArrow } from 'assets/icons/leftArrow.svg';
import { ReactComponent as SvgIconRightArrow } from 'assets/icons/rightArrow.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

const short = require('short-uuid');

type subscriptionsType = {
  discount_percentage: string;
  discount_product_id: string;
  has_subscription: boolean;
  is_subscription_only: boolean;
  shipping_interval_frequency: string;
  shipping_interval_unit_type: string;
  subscription_id: string;
};

export type productType = {
  alternateImage: string;
  bulkQuantity: string;
  featuredImage: string;
  id: number;
  'main-description': string;
  price: number;
  showUnitInPlp: boolean;
  state: object;
  subscriptions: subscriptionsType;
  subtitle: string;
  title: string;
  unitName: string;
  url: string;
  variants: object;
};

export type CarouselProps = {
  carouselList: productType[];
};

export function Carousel({ carouselList }: CarouselProps) {
  const PRODUCTLIST_NUM = 3;
  const PRODUCTCARD_WIDTH = 300; // px
  const PRODUCT_MARGIN_RIGHT = 20; // px

  const productCardContainer = useRef<HTMLUListElement>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const { current } = productCardContainer;
    if (current) {
      current.style.transition = '1s';
      current.style.transform = `translate3d(${
        sliderIndex * -(PRODUCTCARD_WIDTH + PRODUCT_MARGIN_RIGHT) * PRODUCTLIST_NUM
      }px,0,0)`;
    }
  });

  return (
    <>
      <div role="presentation" className={styles.sliderContainer}>
        <ul
          className={classNames('resetList')(styles.productCardContainer)}
          ref={productCardContainer}
        >
          {/* eslint-disable-next-line max-len */}
          {carouselList.map((product: productType) => (
            <li key={short.generate()} className={styles.productCard}>
              <ProductCard productInfo={product} />
            </li>
          ))}
        </ul>
      </div>
      <span
        role="button"
        className={classNames('svgButton')('leftbutton')}
        onClick={() => {
          setSliderIndex(sliderIndex => (sliderIndex > 0 ? sliderIndex - 1 : sliderIndex));
        }}
      >
        <SvgIconLeftArrow width="100" height="100" />
      </span>
      <span
        role="button"
        className={classNames('svgButton')('rightbutton')}
        onClick={() => {
          setSliderIndex(sliderIndex =>
            sliderIndex < Math.floor(carouselList.length / PRODUCTLIST_NUM) - 1
              ? sliderIndex + 1
              : sliderIndex
          );
        }}
      >
        <SvgIconRightArrow width="100" height="100" />
      </span>
    </>
  );
}
