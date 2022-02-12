import DeviceType from "./types/DeviceType";

export default [
  {
    created: new Date(),
    updated: new Date(),
    name: 'Apple Watch',
    type: DeviceType.WATCH,
    description: 'A smart watch. Use it if a watch is not enough.',
    price: 270
  },
  {
    created: new Date(),
    updated: new Date(),
    name: 'iPhone',
    type: DeviceType.PHONE,
    description: 'A very desirable phone. A synonim of status in most places.',
    price: 799
  },
  {
    created: new Date(),
    updated: new Date(),
    name: 'Redmi',
    type: DeviceType.PHONE,
    description: 'An option against Apple and Samsung domain.',
    price: 179
  },
  {
    created: new Date(),
    updated: new Date(),
    name: 'Acer Nitro',
    type: DeviceType.NOTEBOOK,
    description: 'A more accessible notebook for gaming.',
    price: 849
  },
  {
    created: new Date(),
    updated: new Date(),
    name: 'Desktop Positivo',
    type: DeviceType.DESKTOP,
    description: 'A cheap option for everyday work.',
    price: 239
  },
  {
    created: new Date(),
    updated: new Date(),
    name: 'HP Printer',
    type: DeviceType.PRINTER,
    description: 'A nice and useful printer.',
    price: 159
  },
  {
    created: new Date(),
    updated: new Date(),
    name: 'Samsung Galaxy',
    type: DeviceType.PHONE,
    description: 'A good option for Android lovers',
    price: 829
  },
  {
    id: 7,
    created: new Date(),
    updated: new Date(),
    name: 'iPad',
    type: DeviceType.TABLET,
    description: 'When a simple tablet is not enough.',
    price: 329
  },
]