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

  const leftArrowIcon = useRef<SVGSVGElement>(null);
  const rightArrowIcon = useRef<SVGSVGElement>(null);
  const productCardContainer = useRef<HTMLUListElement>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    /* sliderIndex에 따라 이동 */
    if (productCardContainer.current) {
      productCardContainer.current.style.transition = '1s';
      productCardContainer.current.style.transform = `translate3d(${
        sliderIndex * -(PRODUCTCARD_WIDTH + PRODUCT_MARGIN_RIGHT) * PRODUCTLIST_NUM
      }px,0,0)`;
    }
    /* sliderIndex에 따라 왼쪽 화살표 색 변경 */
    if (leftArrowIcon.current) {
      leftArrowIcon.current.style.stroke = sliderIndex <= 0 ? 'gray' : 'black';
    }
    /* sliderIndex에 따라 오른쪽 화살표 색 변경 */
    if (rightArrowIcon.current) {
      rightArrowIcon.current.style.stroke =
        sliderIndex >= Math.floor(carouselList.length / PRODUCTLIST_NUM) - 1 ? 'gray' : 'black';
    }
  });

  return (
    <>
      <div role="presentation" className={styles.sliderContainer}>
        <ul
          className={classNames('resetList')(styles.productCardContainer)}
          ref={productCardContainer}
        >
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
        <SvgIconLeftArrow
          aria-hidden="true"
          focusable="false"
          role="presentation"
          title="Left Arrow"
          width="100"
          height="100"
          ref={leftArrowIcon}
        />
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
        <SvgIconRightArrow
          aria-hidden="true"
          focusable="false"
          role="presentation"
          title="Right Arrow"
          width="100"
          height="100"
          ref={rightArrowIcon}
        />
      </span>
    </>
  );
}
