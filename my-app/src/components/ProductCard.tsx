import Image from "next/image"

export interface Product{
    id: number
    title: string
    price: number
    description: string
    images: [image: string, image: string, image: string]
    category: Array<[id: number, name: string, image: string]>
}
interface ProductCardProps{
    product: Product
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
    return(
        <div className="bg-[#181818] flex flex-col">
            <Image src={product.images[0]} alt={product.title} width={470} height={454}/>
        </div>
    )
}
export default ProductCard;