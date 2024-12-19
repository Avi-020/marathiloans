// pages/emi-calculator.js
import { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [loanTenure, setLoanTenure] = useState<string>("");
  const [emi, setEmi] = useState<string | null>(null);
  const [totalInterest, setTotalInterest] = useState<string | null>(null);
  const [totalPayment, setTotalPayment] = useState<string | null>(null);
  const { language } = useLanguage();

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(annualRate) / 12 / 100;
    const n = parseFloat(loanTenure) * 12;

    if (!P || !r || !n) {
      alert("Please enter valid inputs.");
      return;
    }

    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPaymentValue = emiValue * n;
    const totalInterestValue = totalPaymentValue - P;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      id="emi-calculator"
    >
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {language === "en" ? "EMI Calculator" : "ईएमआय कॅल्क्युलेटर"}
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            {language === "en" ? "Loan Amount (Rs.):" : "कर्जाची रक्कम (रु.):"}
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={
              language === "en"
                ? "Enter loan amount"
                : "कर्जाची रक्कम प्रविष्ट करा"
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            {language === "en"
              ? "Annual Rate of Interest (%):"
              : "वार्षिक व्याज दर (%):"}
          </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={
              language === "en"
                ? "Enter interest rate"
                : "व्याज दर प्रविष्ट करा"
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            {language === "en"
              ? "Loan Tenure (Years):"
              : "कर्जाचा कालावधी (वर्षे):"}
          </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={
              language === "en"
                ? "Enter loan tenure"
                : "कर्जाचा कालावधी प्रविष्ट करा"
            }
          />
        </div>

        <button
          onClick={calculateEMI}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {language === "en" ? "Calculate EMI" : "ईएमआय ची गणना करा"}
        </button>

        {emi && (
          <div className="mt-6 p-4 bg-gray-50 border rounded">
            <p className="mb-2">
              <span className="font-semibold">
                {language === "en" ? "Loan EMI:" : "कर्ज ईएमआय"}
              </span>
              Rs. {emi}
            </p>
            <p className="mb-2">
              <span className="font-semibold">
                {language === "en"
                  ? "Total Interest Payable:"
                  : "एकूण देय व्याज:"}
              </span>
              Rs. {totalInterest}
            </p>
            <p>
              <span className="font-semibold">
                {language === "en" ? "Total Payment: " : "एकूण पेमेंट:"}
              </span>
              Rs. {totalPayment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
