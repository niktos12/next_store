import Image from "next/image"

export interface Product {
    id: number
    title: string
    price: number
    description: string
    image: string
    category:string
    rating: {rate: number, count: number}
}

interface ProductCardProps{
    product: Product
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
    return(
        <div className="bg-[#181818] flex flex-col h-[624px] rounded-3xl">
            <Image src={product.image} alt={product.title} className="scale-75" width={500} height={300}/>
            <div>
                <p className="text-white">{product.title}</p>
                <p className="text-white">{product.price}<p>₽</p></p>
            </div>
        </div>
    )
}
export default ProductCard;