"use client";

import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/product/${data?.id}`);
  const previewModal = usePreviewModal();
  const shoppingCart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    shoppingCart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className='p-3 space-y-2 bg-white border cursor-pointer group rounded-xl'
    >
      <div className='relative bg-gray-100 aspect-square rounded-xl'>
        <Image
          className='object-cover rounded-md aspect-square'
          alt='Product image'
          src={data?.images?.[0]?.url}
          fill
        />
        <div className='absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5'>
          <div className='flex justify-center gap-x-6'>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className='text-gray-600' />}
            />
            <IconButton
              onClick={handleAddToCart}
              icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className='text-lg font-semibold'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </div>
      <div className='flex items-center justify-between '>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
