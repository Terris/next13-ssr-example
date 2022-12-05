import { Suspense } from "react";
import Comments from "./Comments";

const fetchProductDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product description"), 100)
  );

export default async function Home() {
  const description = (await fetchProductDescription()) as string;

  return (
    <>
      <header>Header</header>
      <h2>Product Description</h2>
      <p>{description}</p>

      <h2>Comments</h2>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>
      <footer>Footer</footer>
    </>
  );
}
