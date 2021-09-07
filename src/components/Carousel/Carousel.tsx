/* eslint-disable camelcase */
import { ProductCard } from 'components';
import { classNames } from 'utils';
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
  return (
    <>
      <ul className={classNames('resetList')(styles.productCardContainer)}>
        {/* eslint-disable-next-line max-len */}
        {carouselList.map((product: productType) => (
          <li key={short.generate()} className={styles.productCard}>
            <ProductCard productInfo={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
