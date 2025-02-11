import React from 'react'
import { motion } from "framer-motion";
import Cow from "../assets/cow.jpg"

const Collection = () => {
  const products = [
    { id: 1, title: "Product 1", image: "https://th.bing.com/th/id/OIP.8XZN_G6OmUNVukkOZdikogHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 2, title: "Product 2", image: "https://th.bing.com/th/id/OIP.5U6L-7gZ2PwKhkoABUv2awHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 3, title: "Product 3", image: "https://th.bing.com/th/id/OIP.8XZN_G6OmUNVukkOZdikogHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 4, title: "Product 4", image: "https://th.bing.com/th/id/OIP.5U6L-7gZ2PwKhkoABUv2awHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 5, title: "Product 5", image: "https://th.bing.com/th/id/OIP.8XZN_G6OmUNVukkOZdikogHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 6, title: "Product 6", image: "https://th.bing.com/th/id/OIP.5U6L-7gZ2PwKhkoABUv2awHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 7, title: "Product 7", image: "https://th.bing.com/th/id/OIP.8XZN_G6OmUNVukkOZdikogHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 8, title: "Product 8", image: "https://th.bing.com/th/id/OIP.5U6L-7gZ2PwKhkoABUv2awHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 9, title: "Product 9", image: "https://th.bing.com/th/id/OIP.8XZN_G6OmUNVukkOZdikogHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  ];

  return (
    <div>
      <div className="p-8 ">
        <h2 className="text-2xl font-bold text-center mb-10">Our Products</h2>

        <div className='max-w-screen grid grid-cols-4 '>
            {products.map((product) => (
              <div
                key={product.id}
                className="w-60 bg-white shadow-md rounded-lg p-15 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 ">{product.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Collection





