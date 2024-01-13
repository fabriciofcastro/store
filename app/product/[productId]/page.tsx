import Container from "@/app/components/container";
import { IParams } from "@/interfaces/IParams";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/dataProduct";
import ListRating from "./ListRating";

export default function Product({ params }: { params: IParams }) {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div className="text-[28px] font-semibold text-center">
            <h1> Faça uma avaliação deste produto</h1>
          </div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
