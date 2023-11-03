import Link from "next/link";
import useSWR from "swr";

export default function AllListingsPage() {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) return <h1>Failed to load</h1>;
  if (isLoading) return <h1>is loading...</h1>;

  return (
    <>
      <h1>All Listings</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price + product.currency}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
