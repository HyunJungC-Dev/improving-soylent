export const navigationList = [
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
