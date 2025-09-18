import { useCart } from '../hooks/useCart';
import { CartWidgetDisplay } from './presentational/CartWidgetDisplay';

export const CartWidget = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return <CartWidgetDisplay totalItems={totalItems} />;
};
