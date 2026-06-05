"use client";
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-7xl mb-6 bounce-slow inline-block">❤️</div>
        <h1 className="text-4xl font-black text-[#082A63] mb-4">Support KidByte</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-4">
          KidByte is free for every child, everywhere — no ads, no subscriptions, no tracking.
        </p>
        <p className="text-gray-500 mb-10">
          If this helped your child learn something new today, consider buying us a coffee ☕
        </p>

        {/* UPI Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🇮🇳</span>
            <h2 className="text-2xl font-black text-[#082A63]">India — UPI Payment</h2>
          </div>

          {/* QR Code placeholder */}
          <div className="bg-gray-50 rounded-2xl p-8 mx-auto w-48 h-48 flex items-center justify-center border-2 border-dashed border-orange-200 mb-4">
            <div className="text-center">
              <p className="text-4xl mb-2">📱</p>
              <p className="text-xs font-bold text-gray-400">UPI QR Code</p>
              <p className="text-[10px] text-gray-400">(Add your QR here)</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Scan with any UPI app — GPay, PhonePe, Paytm, BHIM
          </p>
          <p className="font-black text-orange-600 text-lg">upi://pay?pa=YOUR_UPI_ID@bank</p>
        </div>

        {/* International */}
        <div className="bg-gray-50 rounded-3xl p-6 border-2 border-dashed border-gray-200 mb-8">
          <h2 className="text-xl font-black text-gray-400 mb-2">🌍 International</h2>
          <p className="text-gray-400 text-sm">
            International payment options (Stripe, PayPal) coming soon!
          </p>
        </div>

        {/* Message */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border-2 border-blue-100">
          <p className="text-lg font-black text-[#082A63] mb-2">
            &ldquo;Learning remains free. Always.&rdquo;
          </p>
          <p className="text-gray-500 text-sm">
            Every rupee goes toward adding more lessons, animations, and making KidByte
            better for children everywhere.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center text-sm text-gray-400">
          <span>✅ No receipt needed</span>
          <span>✅ Anonymous welcome</span>
          <span>✅ Any amount appreciated</span>
        </div>
      </motion.div>
    </div>
  );
}
