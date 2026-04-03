import AppRoutes from "./routes/AppRoutes";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductProvider>
      <AppRoutes />
    </ProductProvider>
  );
}