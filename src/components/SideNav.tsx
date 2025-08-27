
import { NavLink } from 'react-router-dom'
import { LayoutGrid, BarChart, ShieldX, Repeat, HardDrive, Users, DollarSign, UsersRound, ListOrdered, Sliders, ChartBar, Settings, Phone, Cpu, Database, Wallet, Headphones, EyeOff } from 'lucide-react'

const items = [
  {to:'/dashboard', label:'Dashboard', icon: LayoutGrid},

  {to:'/statistics/services', label:'Statistics', icon: BarChart},
  {to:'/bans', label:'Bans', icon: ShieldX},
  {to:'/p2p-orders', label:'P2P orders', icon: Repeat},
  {to:'/sim-cards', label:'SIM-cards', icon: HardDrive},
  {to:'/workers', label:'Workers', icon: Users},
  {to:'/finance/income', label:'Finance', icon: DollarSign},
  {to:'/team', label:'Team', icon: UsersRound},
  {to:'/service-prices', label:'Service prices', icon: ListOrdered},
  {to:'/rent-prices', label:'Rent prices', icon: Sliders},
  {to:'/income-statistics', label:'Income statistics', icon: ChartBar},
  {to:'/settings', label:'Settings', icon: Settings},

  {to:'/otp', label:'OTP', icon: Phone},
  {to:'/rent', label:'Rent', icon: Phone},
  {to:'/sms', label:'Sms', icon: Phone},
  {to:'/call', label:'Call', icon: Phone},
  {to:'/proxy', label:'Proxy', icon: Cpu},
  {to:'/users', label:'Người dùng', icon: Users},
  {to:'/api', label:'API', icon: Database},
  {to:'/transactions', label:'Giao dịch - ví tiền', icon: Wallet},
  {to:'/kho-sim', label:'Kho sim', icon: HardDrive},
  {to:'/support', label:'Support', icon: Headphones},
  {to:'/hide', label:'Hide', icon: EyeOff},
]

export default function SideNav(){
  return (<aside className="bg-white border-r p-3 space-y-1">
    {items.map(it => (
      <NavLink key={it.to} to={it.to} className={({isActive}) => 
        `flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${isActive?'bg-emerald-50 text-emerald-700':'hover:bg-gray-100'}`}>
        <it.icon size={16}/>{it.label}
      </NavLink>
    ))}
  </aside>)
}
