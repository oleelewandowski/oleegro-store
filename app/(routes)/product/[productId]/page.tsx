import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery/gallery";
import Informations from "@/components/informations";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 md:px-8'>
          <div className='md:grid md:grid-cols-2 md:items-start md:gap-x-8'>
            <Gallery images={product.images} />
            <div className='px-4 mt-10 sm:mt-16 sm:px-0 md:mt-0'>
              <Informations data={product} />
            </div>
          </div>
          <hr className='my-10' />
          <ProductList title='Suggested Products' items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
