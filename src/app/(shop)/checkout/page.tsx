import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
          <div className="flex flex-col w-[1000px]">
            <Title 
                title="Verify Order"
            />
            <div className="grid grid-col-1 sm:grid-cols-2 gap-10">
              {/*cart*/}
              <div className="flex flex-col mt-5">
                <span className="text-xl">Check your items</span>
                <Link href="/cart" className="underline mb-5"> Edit cart</Link>
                {/* items */}
                {
                  productsInCart.map( product => (
                    <div key={product.slug} className="flex mb-5">
                      <Image 
                        src={`/products/${product.images[0]}`}
                        width= { 100 }
                        height= { 100 }
                        style={{
                          width: '100px',
                          height: '100px'
                        }}
                        alt={ product.title}
                        className="mr-5 rounded"
                      />
                      <div>
                        <p>{product.title}</p>
                        <p>$ {product.price} x 3</p>
                        <p className="font-bold">Subtotal: ${product.price * 3}</p>
                      </div>
                    </div>
                  ))
                }  
              </div>
                { /* check out */}
                <div className="bg-white rounded-xl shadow-xl p-7">
                  <h2 className="text-2xl mb-2">Delivery Direction</h2>
                  <div className="mb-10"> 
                    <p className="text-lg">Juan Pablo</p>
                    <p className="text-sm">Av. calle siempre viva</p>
                    <p className="text-sm">Crl. Centro</p>
                    <p className="text-sm">Pepelito pistolero</p>
                    <p className="text-sm">Ciudad de Buenos Aires</p>
                    <p className="text-sm">CP 1233</p>
                    <p className="text-sm">tel.: 11.0948.1321</p>
                  </div>
                  {/* divider */}
                  <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>
                  <h2 className="text-2xl mb-2">Your order</h2>
                  <div className="grid grid-cols-2">

                      <span> Nro. Products </span>
                      <span className="text-right"> 3 items </span>

                      <span> Subtotal </span>
                      <span className="text-right"> $ 100 </span>

                      <span> Taxes ( 15% ) </span>
                      <span className="text-right"> $ 100 </span>

                      <span className="mt-5 text-2xl"> Total </span>
                      <span className="mt-5 text-2xl text-right"> $ 100 </span>
                  </div>
                  <p className="mb-5">
                    <span className="text-xs">
                      By clicking 'Get Your Order', you agree to our <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>
                    </span>
                  </p>
                  <div className="mt-4 mb-2 w-full">
                      <Link 
                        className="flex btn-primary justify-center"
                        href="/orders/123">
                        Get your order
                      </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
  