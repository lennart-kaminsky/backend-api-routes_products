import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID", id);

  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);

  if (error)
    return (
      <>
        <h1>{error.status}: Failed to load</h1>
        <Link href="View all products"></Link>
      </>
    );

  if (isLoading) return <h1>loading...</h1>;
  console.log("Product", product);
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price + product.currency}</p>
      <Link href="/products">View all products</Link>
    </>
  );
}
