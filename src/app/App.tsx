import { Navigation, Tab } from 'components';
import { useState, useEffect } from 'react';

type productListsType = {
  'all-drinks': [];
  'all-powder': [];
  squared: [];
};

function App() {
  const navigationList = [
    {
      id: 'drinks',
      dropdown: true,
      dropdownList: [
        {
          category: 'Complete Meal',
          description: 'No time, no problem! Complete, drinkable meal.'
        },
        {
          category: 'Complete Protein',
          description: 'Smooth and creamy high protein + nutrition.'
        },
        {
          category: 'Complete Energy',
          description: 'Brain and body boost without the crash.'
        }
      ],
      dropdownLinks: ['Complete Meal', 'Complete Protein', 'Complete Energy']
    },
    {
      id: 'powders',
      dropdown: true,
      dropdownList: [
        {
          category: 'Soylent Powder',
          description: 'Scoop, shake, go! Complete meal.\nGoodbye hunger'
        },
        {
          category: 'Blender Bottle',
          description: 'Every great meal needs a great vessel'
        },
        {
          category: 'Powder Scoop',
          description: 'Who wants to measure?Scoop and go!'
        }
      ],
      dropdownLinks: ['Shop All', 'Gift Cards']
    },
    { id: 'bars', dropdown: false },
    { id: 'shop_all', dropdown: false }
  ].map(nav => ({
    ...nav,
    href: '/' + nav.id.replace('_', ''),
    text: nav.id.replace('_', ' ').toUpperCase()
  }));

  const productTabList = ['Drinks', 'Powder', 'Squared'].map(tabName => ({
    id: tabName.toLowerCase(),
    displayText: tabName,
    href: `/${tabName.toLowerCase()}`,
    documentTitle: `Home | ${tabName}`
  }));

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
