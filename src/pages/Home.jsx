import React from 'react'
import Cow from "../assets/cow.jpg"
import Om from "../assets/om.jpg"
import Product from './Product'
const Home = () => {
  return (
    
    <div  >
      
      <div className='flex items-center mx-auto'>
        <img src={Cow} />
        <p className='mr-15 font-semibold flex justify-between items-center text-center'>We supply 100% pure and hygienic milk and milk product without adding any types of preservatives. Our GIR cow & 
          Murrah buffalo milk is produced from livestock raised according to organic farming methods. Various product of cow 
          are used in innumerable ways in Ayurveda. Cow milk stands first in them. Cow milk benefits are innumerable. Now you 
          can enjoy creamy farm milk in glass bottles, like the good old days. This milk come from hygenic, healthy farm GIR cows, 
          that graze on natural feed only. Here's to your good health and happiness!
        </p>
      </div>
      <Product />
      <br />
      <br /><br />
      <div className='border border-gray-300 p-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta ab iusto commodi eveniet delectus magnam dolores nulla esse dignissimos et ullam, omnis nostrum voluptates fuga neque, dolore totam assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat autem culpa officia doloribus nihil, corporis ducimus eius, omnis, libero totam. Sed a, et ipsam hic veritatis in corporis magnam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita doloribus commodi libero voluptas architecto sunt, hic ea, magnam asperiores, quaerat repellat ducimus fuga culpa at a accusantium consequatur quod!</p>
      </div>
    </div>
  )
}

export default Home
