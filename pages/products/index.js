import axios from "axios";
import { Layout } from "../../components/Layout";
import Link from "next/link";

export default function Products({ products }) {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-2 mx-2">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="p-3 shadow border bg-white rounded">
              <h1 className="font-bold text-xl capitalize">{product.name}</h1>
              <p className="text-gray-400 text-sm">{product.description}</p>
              <p className="text-green-500 font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );
  return {
    props: {
      products,
    },
  };
};
