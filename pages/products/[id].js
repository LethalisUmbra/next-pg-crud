import React from "react";
import { Layout } from "../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductView({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const res = await axios.delete("/api/products/" + id);
    router.push("/products")
  };
  return (
    <Layout>
      <div className="p-3 shadow border bg-white rounded-xl">
        <h1 className="font-bold text-xl capitalize">{product.name}</h1>
        <p className="text-gray-400 text-sm">{product.description}</p>
        <p className="text-green-500 font-bold">${product.price}</p>
        <button
          className="bg-red-500 px-4 py-1 rounded-lg border my-2 hover:bg-red-600 shadow text-white"
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  );

  return {
    props: {
      product,
    },
  };
};
