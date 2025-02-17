import React from "react";

const PaymentForm: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center">
          <span className="text-blue-500 font-bold text-xl mr-2">AceCoinPay</span>
        </h2>
        <div className="flex space-x-1 text-lg font-mono">
          <span className="bg-gray-200 px-2 py-1 rounded">0</span>
          <span className="bg-gray-200 px-2 py-1 rounded">1</span>
          <span className="bg-gray-200 px-2 py-1 rounded">1</span>
          <span className="bg-gray-200 px-2 py-1 rounded">9</span>
        </div>
      </div>

      {/* Card Details */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Card Number</label>
          <div className="flex items-center bg-gray-100 p-2 rounded">
            <input
              type="text"
              className="bg-transparent flex-grow outline-none"
              placeholder="2412 - 7512 - 3412 - 3456"
            />
            <button type="button" className="text-blue-500">Edit</button>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">CVV Number</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 rounded outline-none"
              placeholder="327"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">Expiry Date</label>
            <div className="flex space-x-2">
              <input type="text" className="w-1/2 bg-gray-100 p-2 rounded outline-none" placeholder="09" />
              <input type="text" className="w-1/2 bg-gray-100 p-2 rounded outline-none" placeholder="22" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input type="password" className="w-full bg-gray-100 p-2 rounded outline-none" placeholder="••••••••" />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
          Pay Now
        </button>
      </form>

      {/* Card Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-8 bg-gray-300 rounded-lg"></div>
          <div>
            <p className="text-gray-700 font-semibold">Jonathan Michael</p>
            <p className="text-gray-500 text-sm">•••• 3456</p>
            <p className="text-gray-500 text-sm">09/22</p>
          </div>
        </div>

        <div className="mt-4 text-gray-600 text-sm">
          <p>Company: <span className="text-gray-800 font-semibold">Apple</span></p>
          <p>Order Number: <span className="text-gray-800 font-semibold">1266201</span></p>
          <p>Product: <span className="text-gray-800 font-semibold">MacBook Air</span></p>
          <p>VAT (20%): <span className="text-gray-800 font-semibold">$100.00</span></p>
        </div>

        <div className="mt-4 text-gray-800 font-semibold text-lg">
          <p>You have to pay: <span className="text-blue-600 text-xl">$549.99 USD</span></p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
