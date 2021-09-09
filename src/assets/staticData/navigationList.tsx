export const navigationList = [
  {
    id: 'drinks',
    dropdown: true,
    dropdownList: [
      {
        categorySrc: `https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Rectangle_43_500x.png?v=1618524961`,
        category: 'Complete Meal',
        description: 'No time, no problem! Complete, drinkable meal.'
      },
      {
        categorySrc: `https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Soylent_Nav_500x.png?v=1618936492`,
        category: 'Complete Protein',
        description: 'Smooth and creamy high protein + nutrition.'
      },
      {
        categorySrc: `https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Lifestyle_IMG_0086-Edit-January_1_500x.png?v=1618524994)"`,
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
        categorySrc: `https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Kitchen_IMG_8200-_January_1_500x.png?v=1618525087`,
        category: 'Soylent Powder',
        description: 'Scoop, shake, go! Complete meal.\nGoodbye hunger'
      },
      {
        categorySrc: `https://cdn.shopify.com/s/files/1/0003/5933/3902/files/BB_1_Final_500x.png?v=1627317644`,
        category: 'Blender Bottle',
        description: 'Every great meal needs a great vessel'
      },
      {
        categorySrc: `https://cdn.shopify.com/s/files/1/0003/5933/3902/files/scoop_image_500x.png?v=1618939580"`,
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
