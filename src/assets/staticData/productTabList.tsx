export const productTabList = ['Drinks', 'Powder', 'Squared'].map(tabName => ({
  id: tabName.toLowerCase(),
  displayText: tabName,
  href: `/${tabName.toLowerCase()}`,
  documentTitle: `Home | ${tabName}`
}));
