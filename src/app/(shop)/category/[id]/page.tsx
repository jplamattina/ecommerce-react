import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;
interface Props {
  params:
      {
        id: Category;
      }
}

export default async function({ params }: Props) {

  const { id } = await params;
  const products = seedProducts.filter( product => product.gender === id );

  const labels: Record<Category, string>  = {
    'men': 'for men',
    'women': 'for women',
    'kid': 'for kids',
    'unisex': 'for Everyone'
  }

  const description: Record<Category, string>  = {
    'men': 'him',
    'women': 'her',
    'kid': 'kids',
    'unisex': 'Everyone'
  }

  // if ( id === 'kids') {
  //   notFound();
  // }
  
  return (
      <>
        <Title 
          title={`Articles ${labels[id]}`} 
          subtitle={`Looking for ${description[id]}`} 
          className="mb-2"/>
        <ProductGrid 
          products={ products }
        />
      </>
  );
  }
  