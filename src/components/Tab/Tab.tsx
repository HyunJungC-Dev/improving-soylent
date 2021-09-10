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
      <h2 className={styles.tabTitle}>Find Your Soylent</h2>
      <Router>
        <Switch>
          <Route path={['/', '/drinks']} exact>
            <ul role="tablist" className={classNames('resetList')(styles.tablist)}>
              {productTabList.map(tab => (
                <li key={short.generate()} className={styles.tablistItem}>
                  <NavLink
                    role="tab"
                    to={tab.href}
                    className={
                      tab.displayText === 'Drinks'
                        ? classNames(styles.tablistLink)(styles.activeTab)
                        : styles.tablistLink
                    }
                  >
                    {tab.displayText}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Carousel carouselList={productLists['all-drinks']} />
          </Route>
          <Route path="/powder">
            <ul role="tablist" className={classNames('resetList')(styles.tablist)}>
              {productTabList.map(tab => (
                <li key={short.generate()} className={styles.tablistItem}>
                  <NavLink
                    role="tab"
                    to={tab.href}
                    className={
                      tab.displayText === 'Powder'
                        ? classNames(styles.tablistLink)(styles.activeTab)
                        : styles.tablistLink
                    }
                  >
                    {tab.displayText}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Carousel carouselList={productLists['all-powder']} />
          </Route>
          <Route path="/squared">
            <ul role="tablist" className={classNames('resetList')(styles.tablist)}>
              {productTabList.map(tab => (
                <li key={short.generate()} className={styles.tablistItem}>
                  <NavLink
                    role="tab"
                    to={tab.href}
                    className={
                      tab.displayText === 'Squared'
                        ? classNames(styles.tablistLink)(styles.activeTab)
                        : styles.tablistLink
                    }
                  >
                    {tab.displayText}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Carousel carouselList={productLists.squared} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
