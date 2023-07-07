import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const PRODUCT_QUERY_FILTERS = { isFeatured: true };

const HomePage = async () => {
  const billboard = await getBillboard("663ec784-de3c-4f96-9f54-248b17a79a18");
  const products = await getProducts(PRODUCT_QUERY_FILTERS);
  return (
    <Container>
      <div className='pb-10 space-y-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
