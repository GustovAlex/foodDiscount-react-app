import { useSelector } from "react-redux"
import Layout from "../layout/Layout"
import ProductItemContainer from "./productItem/ProductItemContainer"
import "./productStyles.scss"

export default function Main() {
    const productList = useSelector((state) => state.data.productList)

    return (
        <div>
            <Layout>
                <div className='product'>
                    {productList.map((product) => (
                        <ProductItemContainer
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </Layout>
        </div>
    )
}
