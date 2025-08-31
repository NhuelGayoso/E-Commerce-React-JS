import { useState, useEffect } from "react";

export const ItemListContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="px-20 py-20 bg-gray-300">
      <div class="grid grid-cols-3 rounded-lg shadow-sm text-black items-center gap-1">
        {data?.map((item) => {
          return (
            <div class="p-4  h-full bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative bg-white rounded-xl">
                <img
                  class="w-full h-52 object-contain"
                  src={item.image}
                  alt=""
                />
              </div>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">
                  {item.title}
                </h5>
              </a>
              <p class="mb-3 font-normal">{item.description}</p>
              <button
                href="#"
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors mb-1"
              >
                ${item.price}
              </button>
              <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
