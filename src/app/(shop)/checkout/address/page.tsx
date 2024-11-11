import Link from 'next/link';
import { Title } from '@/components';

export default function() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">


          <div className="flex flex-col mb-2">
            <span>Name</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Last Name</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Direction</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>2nd Direction (Optional)</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>


          <div className="flex flex-col mb-2">
            <span>Postal Code</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>City</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Country</span>
            <select 
              className="p-2 border rounded-md bg-gray-200"
            >
              <option value="">[ Select ]</option>
              <option value="CRI">Puerto Rico</option>
              <option value="ARG">Argentina</option>
              <option value="USA">Estados Unidos</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Teléfono</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>



          <div className="flex flex-col mb-2 sm:mt-10">
            <Link 
              href='/checkout'
              className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Siguiente
            </Link>
          </div>


        </div>

      </div>




    </div>
  );
}