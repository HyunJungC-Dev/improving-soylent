import { Navigation, ProductCard } from 'components';

function App() {
  const navigation = [
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

  const request = async (url: string) => {
    try {
      const res = await fetch(`${url}`);

      if (!res.ok) {
        throw new Error('Error: 서버와의 통신이 원활하지 않습니다.');
      }

      return await res.json();
    } catch (e: any) {
      /* 일단 any 타입으로 해두지만 Typescript의 Error처리를 좀 더 고민해봐야한다. */
      throw new Error(`Error: ${e.massege}`);
    }
  };

  const init = async () => {
    try {
      const state = await request(`/api/featured`);
      console.log(state); // 두번 호출 됨 -> React.Strict모드 때문
    } catch (e: any) {
      /* 일단 any 타입으로 해두지만 Typescript의 Error처리를 좀 더 고민해봐야한다. */
      throw new Error(`Error: ${e.massege}`);
    }
  };
  init();

  return (
    <>
      <Navigation menubarList={navigation} />
      <ProductCard
        url="/products/soylent-drink-banana"
        featuredImageSrc="//cdn.shopify.com/s/files/1/0003/5933/3902/products/01_052721_SDC_US_RTD_ChocLovers_Hero_2_{width}x.png?v=1627315327"
        bulkQuantity={12}
        price={4500}
        title="Soylent Chocolate Lover's Variety Pack"
        unitName="bottle"
        discountVariantPrice="39.90"
        discountPercentage="11.2200000000"
      />
    </>
  );
}

export default App;
