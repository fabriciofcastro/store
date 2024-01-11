import Container from "@/app/components/container";
import { IParams } from "@/interfaces/IParams";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/dataProduct";

export default function Product({ params }: { params: IParams }) {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
}
