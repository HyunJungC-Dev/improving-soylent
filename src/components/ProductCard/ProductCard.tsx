import { A11yHidden } from 'components';
import { classNames } from 'utils';
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
      <div role="radiogroup" aria-labelledby="purchaseOption-label">
        {/* React는 for 대신 htmlFor 써야한다. class 대신 className을 쓰는 것과 같은 이유 */}
        <input type="radio" name="purchaseOption" value="Subscribe & Save" id="subscribeAndSave" />
        <label htmlFor="subscribeAndSave">
          Subscribe & Save
          <strong> {'$' + discountVariantPrice}</strong>
          <em>{'(' + (+discountVariantPrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}</em>
        </label>
        <input type="radio" name="purchaseOption" value="One-time Purchase" id="oneTimePurchase" />
        <label htmlFor="oneTimePurchase">
          One-time Purchase
          <strong> {'$' + oneTimePurchasePrice}</strong>
          <em>{'(' + (+oneTimePurchasePrice / +bulkQuantity).toFixed(2) + '/' + unitName + ')'}</em>
        </label>
      </div>
    </>
  );
}
