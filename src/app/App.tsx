import { Navigation, Tab, Logo, SkipToContent } from 'components';
import { useState, useEffect } from 'react';
import { navigationList, productTabList } from './staticData';
import styles from './App.module.css';

type productListsType = {
  'all-drinks': [];
  'all-powder': [];
  squared: [];
};

function App() {
  const [productLists, setProductLists] = useState<productListsType>({
    'all-drinks': [],
    'all-powder': [],
    squared: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featured`);
      const data = await response.json();
      setProductLists(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <SkipToContent targetId="main" text="SkipToContent" />
      <header className={styles.header}>
        <aside className={styles.topBanner}>
          <span className={styles.topBannerText}>
            Free shipping to the continental U.S. on orders $25 and over!
          </span>
        </aside>
        <div className={styles.forDropdownMenuLayer}>
          <Logo width={100} backgroundColor="white" />
          <Navigation menubarList={navigationList} />
        </div>
      </header>
      <main>
        <Tab productLists={productLists} productTabList={productTabList} />
      </main>
    </>
  );
}

export default App;
