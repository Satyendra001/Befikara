export const collections = [
  {
    id: 1,
    name: "Summer Collection",
    description: "Light and breezy styles for the summer season",
    image: "/path-to-image.jpg",
    slug: "summer",
    items: [
      {
        id: "summer-1",
        name: "Summer Tee",
        price: 1999,
        image: "/path-to-image.jpg"
      },
      {
        id: "summer-2",
        name: "Light Jacket",
        price: 2999,
        image: "/path-to-image.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Winter Collection",
    description: "Warm and cozy apparels for winter",
    image: "/path-to-image.jpg",
    slug: "winter",
    items: [
      {
        id: "winter-1",
        name: "Winter Hoodie",
        price: 2499,
        image: "/path-to-image.jpg"
      },
      {
        id: "winter-2",
        name: "Warm Jacket",
        price: 3999,
        image: "/path-to-image.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Street Style",
    description: "Urban fashion with a contemporary twist",
    image: "/path-to-image.jpg",
    slug: "street-style"
  }
];

export const collectionProducts = {
  summer: [
    { id: 1, name: "Summer Tee", price: 1999, image: "/path-to-image.jpg" },
    { id: 2, name: "Light Jacket", price: 2999, image: "/path-to-image.jpg" },
  ],
  winter: [
    { id: 3, name: "Winter Hoodie", price: 2499, image: "/path-to-image.jpg" },
    { id: 4, name: "Warm Jacket", price: 3999, image: "/path-to-image.jpg" },
  ],
  "street-style": [
    { id: 5, name: "Urban Tee", price: 1799, image: "/path-to-image.jpg" },
    { id: 6, name: "Street Jacket", price: 2999, image: "/path-to-image.jpg" },
  ]
};