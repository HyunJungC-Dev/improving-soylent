import { Tab, SkipToContent, Header } from 'components';
import { useState, useEffect } from 'react';
import { productTabList } from './staticData';
// import styles from './App.module.css';

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
      <Header></Header>
      <main>
        <Tab productLists={productLists} productTabList={productTabList} />
      </main>
    </>
  );
}

export default App;
