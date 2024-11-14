import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TopUp from './pages/TopUp';
import ElectricityBill from './pages/ElectricityBill';
import BettingFund from './pages/BettingFund';
import CableSubscription from './pages/CableSubscription';
import AirtimeToCash from './pages/AirtimeToCash';
import TransactionHistory from './pages/TransactionHistory';
import Profile from './pages/Profile';
import Support from './pages/Support';
import Footer from './component/Footer';
import SignUp from './pages/SignUp';
import FundWallet from './pages/FundWallet';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container mx-auto px-4 py-8 lg:h-full md:h-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/electricity-bill" element={<ElectricityBill />} />
          <Route path="/betting-fund" element={<BettingFund />} />
          <Route path="/cable-subscription" element={<CableSubscription />} />
          <Route path="/airtime-to-cash" element={<AirtimeToCash />} />
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/fund-wallet" element={<FundWallet />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
