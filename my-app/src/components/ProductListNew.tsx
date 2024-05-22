import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { ProductCardSkeleton } from "@/app/ui/skeletons";
import { Product } from "./ProductCard";

const ProductCard = React.lazy(() => import("./ProductCard"));

const skeletonArray = Array.from({ length: 3 }, (_, i) => i);

export function ProductListNew() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3001/products");
            setProducts(res.data);
        } catch (error) {
            console.error("Ошибка при загрузке продуктов:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-6 items-center justify-center mx-40">
            {products.map((product) => (
                <Suspense fallback={<ProductCardSkeleton />} key={product.id}>
                    <ProductCard product={product} />
                </Suspense>
            ))}
            {loading && skeletonArray.map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
}
