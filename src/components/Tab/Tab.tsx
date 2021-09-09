import { Carousel, Router } from 'components';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { classNames } from 'utils';
import styles from './Tab.module.css';

const short = require('short-uuid');

type TabProps = {
  productLists: {
    'all-drinks': [];
    'all-powder': [];
    squared: [];
  };
  productTabList: {
    id: string;
    displayText: string;
    href: string;
    documentTitle: string;
  }[];
};

export function Tab({ productLists, productTabList }: TabProps) {
  return (
    <>
      <h2>Find Your Soylent</h2>
      <Router>
        <ul role="tablist" className={classNames('resetList')(styles.tablist)}>
          {productTabList.map(tab => (
            <li key={short.generate()} className={styles.tablistItem}>
              <NavLink role="tab" to={tab.href} className={styles.tablistLink}>
                {tab.displayText}
              </NavLink>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/drinks">
            <Carousel carouselList={productLists['all-drinks']} />
          </Route>
          <Route path="/powder">
            <Carousel carouselList={productLists['all-powder']} />
          </Route>
          <Route path="/squared">
            <Carousel carouselList={productLists.squared} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
