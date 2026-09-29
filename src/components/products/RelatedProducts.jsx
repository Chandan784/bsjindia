import ProductCard from "./ProductCard";

export default function RelatedProducts({ products }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}