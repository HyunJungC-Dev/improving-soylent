import { Navigation, Tab, Logo } from 'components';
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
      <header className={styles.header}>
        <div className={styles.forDropdownMenuLayer}>
          <Logo width={100} />
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
