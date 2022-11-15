import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/products", product);
    router.push("/products")
  };

  const handleChange = ({ target: { name, value } }) =>
    setProduct({ ...product, [name]: value });

  return (
    <div className="mx-auto my-4 p-4 max-w-xs shadow border rounded bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleChange}
            required
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price">Price</label>
          <input
            type={"number"}
            placeholder="Price"
            name="price"
            id="price"
            onChange={handleChange}
            required
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            rows="2"
            placeholder="Description"
            name="description"
            id="description"
            onChange={handleChange}
            required
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
