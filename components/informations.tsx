"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InformationsProps {
  data: Product;
}

const Informations: React.FC<InformationsProps> = ({ data }) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'> {data.name} </h1>
      <div className='flex items-end justify-between mt-3'>
        <div className='text-2xl text-gray-900'>
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'> Size: </h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'> Color: </h3>
          <div
            className='w-6 h-6 border border-gray-600 rounded-full'
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className='flex items-center mt-10 gap-x-3'>
        <Button className='flex items-center gap-x-2' onClick={addToCart}>
          Add to Card <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Informations;
