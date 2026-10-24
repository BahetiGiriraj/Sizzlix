import { Product } from '../config/company';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[600px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-lg text-primary-600 font-medium">
                {product.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Key Benefits
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.keyBenefits}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ingredients
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {product.ingredients}
              </p>
            </div>

            {/* Action Button */}
            <div className="flex gap-4 mt-auto pt-6 border-t">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
