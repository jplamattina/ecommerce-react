import { SizeSelector, QuantitySelector, ProductSlideShow, ProductMobileSlideShow } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}

export default async function({ params }: Props) {
  const { slug } = await params;
  const products = initialData.products.find(product => product.slug === slug);

  if (!products) {
    notFound();
  }
    return (
        <div className="grid md:grid-cols-3 gap-3 md:mx-5 mb-20  "> 
          {/* slide show */}
           <div className="col-span-1 md:col-span-2">
            {/* mobile SlideShow*/}
                <ProductMobileSlideShow 
                  title={products.title}
                  images={products.images}
                  className="block md:hidden"
                  />
            {/* desktp SlideShow*/}
              <ProductSlideShow
                title={products.title}
                images={products.images}
                className="hidden md:block"
              />
           </div>

          {/* details */}
          <div className="col-span-1 px-5">
              <h1 className={`${ titleFont.className } antialiased font-bold text-xl`}>
                {products.title} 
              </h1>
              <p className="text-lg mg-5">$ { products.price }</p>
           {/* Selector of Sizes */}
           <SizeSelector 
            selectedSize={products.sizes[1]}
            availableSizes={products.sizes}
           />
           {/* Selector of amount */}
           <QuantitySelector 
              quantity={2}
           />
           {/* Button */}
           <button className="btn-primary my-5">
              Add to Cart
           </button>
           {/* Description */}
           <h3 className="font-bold text-sm">Description</h3>
           <p className="font-light">
            { products.description}
           </p>
           </div>
        </div>
    );
  }
  