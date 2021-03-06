import { Tab, SkipToContent, Header, Banner, Footer } from 'components';
import { useState, useEffect } from 'react';
import { productTabList } from 'assets/staticData';
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
      if (response.ok) {
        const data = await response.json();
        setProductLists(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SkipToContent targetId="main" text="SkipToContent" />
      <Header />
      <Banner />
      <main className={styles.main}>
        <Tab productLists={productLists} productTabList={productTabList} />
      </main>
      <Footer />
    </>
  );
}

export default App;
