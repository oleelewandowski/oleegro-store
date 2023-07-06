"use client";

import { Product } from "@/types";
import React from "react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InformationsProps {
  data: Product;
}

const Informations: React.FC<InformationsProps> = ({ data }) => {
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
        <Button className='flex items-center gap-x-2'>
          Add to Card <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Informations;
