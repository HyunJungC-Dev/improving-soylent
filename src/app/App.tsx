import { Navigation, Tab } from 'components';
import { useState, useEffect } from 'react';
import { navigationList, productTabList } from './staticData';

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
      <Navigation menubarList={navigationList} />
      <Tab productLists={productLists} productTabList={productTabList} />
    </>
  );
}

export default App;
