import React from "react";
import Link from "next/link";

import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className='border-b'>
      <Container>
        <div className='relative flex items-center h-16 px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='flex ml-4 lg:ml-0 gap-x-2'>
            <p>OLEEGRO</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
