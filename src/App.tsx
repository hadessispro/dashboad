
import { Routes, Route, Navigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import SideNav from './components/SideNav'

// pages
import Dashboard from './pages/Dashboard'
import StatisticsServices from './pages/StatisticsServices'
import StatisticsOperators from './pages/StatisticsOperators'
import StatisticsCountries from './pages/StatisticsCountries'
import Bans from './pages/Bans'
import P2POrders from './pages/P2POrders'
import SimCards from './pages/SimCards'
import Workers from './pages/Workers'
import FinanceIncome from './pages/FinanceIncome'
import FinancePayments from './pages/FinancePayments'
import FinanceWithdrawals from './pages/FinanceWithdrawals'
import Team from './pages/Team'
import ServicePrices from './pages/ServicePrices'
import RentPrices from './pages/RentPrices'
import IncomeStatistics from './pages/IncomeStatistics'
import Settings from './pages/Settings'
import OTP from './pages/OTP'
import Rent from './pages/Rent'
import SMS from './pages/SMS'
import Call from './pages/Call'
import ProxyAnalytics from './pages/ProxyAnalytics'
import Users from './pages/Users'
import APISettings from './pages/APISettings'
import Transactions from './pages/Transactions'
import KhoSim from './pages/KhoSim'
import Support from './pages/Support'
import Hide from './pages/Hide'

export default function App(){
  return (<div className="min-h-screen grid grid-cols-[240px_1fr]">
    <SideNav/>
    <div className="flex flex-col">
      <TopBar/>
      <main className="p-6 space-y-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

          <Route path="/statistics/services" element={<StatisticsServices/>}/>
          <Route path="/statistics/operators" element={<StatisticsOperators/>}/>
          <Route path="/statistics/countries" element={<StatisticsCountries/>}/>

          <Route path="/bans" element={<Bans/>}/>
          <Route path="/p2p-orders" element={<P2POrders/>}/>
          <Route path="/sim-cards" element={<SimCards/>}/>
          <Route path="/workers" element={<Workers/>}/>

          <Route path="/finance/income" element={<FinanceIncome/>}/>
          <Route path="/finance/payments" element={<FinancePayments/>}/>
          <Route path="/finance/withdrawals" element={<FinanceWithdrawals/>}/>

          <Route path="/team" element={<Team/>}/>
          <Route path="/service-prices" element={<ServicePrices/>}/>
          <Route path="/rent-prices" element={<RentPrices/>}/>
          <Route path="/income-statistics" element={<IncomeStatistics/>}/>
          <Route path="/settings" element={<Settings/>}/>

          <Route path="/otp" element={<OTP/>}/>
          <Route path="/rent" element={<Rent/>}/>
          <Route path="/sms" element={<SMS/>}/>
          <Route path="/call" element={<Call/>}/>
          <Route path="/proxy" element={<ProxyAnalytics/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/api" element={<APISettings/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/kho-sim" element={<KhoSim/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/hide" element={<Hide/>}/>
        </Routes>
      </main>
    </div>
  </div>)
}
