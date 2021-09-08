import { Carousel, Navigation, Router } from 'components';
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

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

  const [productList, setProductList] = useState({
    'all-drinks': [],
    'all-powder': [],
    squared: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featured`);
      const data = await response.json();
      setProductList(data);
    };
    fetchData();
  }, []);

  const [productTabList] = useState(
    ['Drinks', 'Powder', 'Squared'].map(tabName => ({
      id: tabName.toLowerCase(),
      href: `/${tabName.toLowerCase()}`,
      text: `Home | ${tabName}`
    }))
  );

  console.log(productList);

  return (
    <>
      <Navigation menubarList={navigationList} />
      <Router>
        {productTabList.map(productTab => (
          <li>
            <NavLink to={productTab.href}>{productTab.id}</NavLink>
          </li>
        ))}
        <Switch>
          <Route path="/drinks">
            <Carousel carouselList={productList['all-drinks']} />
          </Route>
          <Route path="/powder">
            <Carousel carouselList={productList['all-powder']} />
          </Route>
          <Route path="/squared">
            <Carousel carouselList={productList.squared} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
