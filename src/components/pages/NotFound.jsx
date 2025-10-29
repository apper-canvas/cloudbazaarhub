import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <ApperIcon name="AlertCircle" size={48} className="text-red-600" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              <ApperIcon name="Home" size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="outline" className="w-full sm:w-auto">
              <ApperIcon name="ShoppingCart" size={20} className="mr-2" />
              View Cart
            </Button>
          </Link>
        </div>

        <div className="pt-6 text-sm text-gray-500">
          <p>Need help? Contact our support team.</p>
        </div>
      </div>
    </div>
  );
}