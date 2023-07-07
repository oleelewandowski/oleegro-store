import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => (
  <Container>
    <div className='w-full h-full p-8'>
      <div className='px-4 py-10 mx-auto sm:px-6 max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          <Skeleton className='rounded-xl aspect-square' />
          <div className='px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0'>
            <Skeleton className='rounded-xl aspect-square' />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3'>
          <Skeleton className='aspect-square rounded-xl' />
          <Skeleton className='aspect-square rounded-xl' />
          <Skeleton className='aspect-square rounded-xl' />
        </div>
      </div>
    </div>
  </Container>
);

export default Loading;
