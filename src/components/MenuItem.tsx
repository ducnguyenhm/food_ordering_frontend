import { MenuItem as menuItem} from "/Users/ducnguyen/Documents/Projects/Food_delivery/frontend/src/types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: menuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;