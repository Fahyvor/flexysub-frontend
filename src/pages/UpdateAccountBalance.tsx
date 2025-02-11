import React, { useState } from "react";
import axios from "axios";
import { API_URL } from '../axios/apiUrl';
import { toast, ToastContainer } from 'react-toastify'

const UpdateAccountBalance: React.FC = () => {
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim() === "" ? "" : Number(e.target.value);
    if (value === "" || !isNaN(value)) setAmount(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate before sending request
    if (!accountNumber.trim() || amount === "" || amount <= 0) {
      setError("Please enter a valid account number and amount.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}api/auth/update-balance`,
        { accountNumber: accountNumber.trim(), amount },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        toast.success("Account balance updated successfully!");
        setAccountNumber("");
        setAmount("");
      } else {
        setError(response.data.message || "Failed to update balance!");
      }
    } catch (error) {
      setError("Error updating account balance!");
      console.error("Error updating account balance:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center">
        <ToastContainer />
      <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-4">
          <div className="w-full flex flex-col gap-4">
            <label className="text-lg font-bold">Account Number:</label>
            <input
              type="text"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              className="border-2 p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <label className="text-lg font-bold">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="border-2 p-2 rounded-md w-full"
              required
              min="1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#f20d45ff] text-white p-2 rounded-md lg:w-1/3 md:w-1/2 w-full"
          disabled={loading}
        >
          {loading ? "Loading..." : "Update Account Balance"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default UpdateAccountBalance;
