import { Outlet } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Header from "@/components/organisms/Header";
import CartSidebar from "@/components/organisms/CartSidebar";

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.Id === product.Id);

      if (existingItem) {
        toast.success(`Updated ${product.name} quantity in cart!`);
        return prevItems.map((item) =>
          item.Id === product.Id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      toast.success(`Added ${product.name} to cart!`);
      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.Id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    const item = cartItems.find((item) => item.Id === productId);
    if (item) {
      toast.info(`Removed ${item.name} from cart`);
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.Id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.success("Order placed successfully!");
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        onToggleCart={handleToggleCart}
      />
      <main>
        <Outlet
          context={{
            cartItems,
            onAddToCart: handleAddToCart,
            onUpdateQuantity: handleUpdateQuantity,
            onRemoveItem: handleRemoveItem,
            onClearCart: handleClearCart,
          }}
        />
      </main>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}