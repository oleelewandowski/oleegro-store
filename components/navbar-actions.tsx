"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);
  const shoppingCart = useCart();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex items-center ml-auto gap-x-4'>
      <Button
        className='flex items-center px-4 py-2 bg-black rounded-full'
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>
          {shoppingCart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
