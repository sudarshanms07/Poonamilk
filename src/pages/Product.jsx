import React from 'react'
import { motion } from "framer-motion";
import Cow from "../assets/cow.jpg"

const Product = () => {
  const products = [
    { id: 1, title: "Product 1", image: {Cow} },
    { id: 2, title: "Product 2", image: {Cow} },
    { id: 3, title: "Product 3", image: {Cow} },
    { id: 4, title: "Product 4", image: {Cow} },
    { id: 5, title: "Product 5", image: {Cow} },
    { id: 6, title: "Product 6", image: {Cow} },
    { id: 7, title: "Product 7", image: {Cow} },
    { id: 8, title: "Product 8", image: {Cow} },
    { id: 9, title: "Product 9", image: {Cow} },
  ];

  return (
    <div>
      <div className="p-8 ">
        <h2 className="text-2xl font-bold text-center mb-10">Our Products</h2>

        <div className='overflow-hidden scroll-auto'>
          <motion.div
            className="flex space-x-4 p-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -500 }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-60 bg-white shadow-md rounded-lg p-4 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Product





