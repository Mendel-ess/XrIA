import { PricesProps } from "../../types/components";


export const Prices = ({name, price}: PricesProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
}