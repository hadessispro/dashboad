
import { useMemo, useState } from 'react'
export default function FinanceWithdrawals(){
  const [sum,setSum]=useState(0)
  const commissionPct=4
  const total=useMemo(()=> (sum*(1+commissionPct/100)).toFixed(2),[sum])
  return (<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <div className="card p-6 lg:col-span-2">
      <div className="flex gap-2 mb-3"><button className="btn">Bank Transfer</button><button className="btn">Services</button><button className="btn">Cryptocurrency</button><button className="btn">Other</button></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">{['T-Bank','SberBank','SWIFT'].map(n=> <div key={n} className="card p-4"><div className="font-semibold">{n}</div><div className="text-xs text-gray-500">Commission: 4%</div></div>)}</div>
    </div>
    <div className="card p-6"><div className="font-semibold mb-1">T-Bank</div><div className="text-sm text-gray-500 mb-2">Minimum amount: $612.37<br/>Available amount: $439.49</div>
      <div className="space-y-3">
        <label className="block text-sm">Sum ($)<input type="number" value={sum} onChange={e=>setSum(+e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-200"/></label>
        <label className="block text-sm">Card number<input placeholder="•••• •••• •••• ••••" className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-200"/></label>
        <div className="text-sm">Commission: <b>{commissionPct}%</b></div>
        <div className="text-sm">Total: <b>${total}</b></div>
        <button className="btn btn-primary w-full">Create request</button>
      </div>
    </div>
  </div>)
}
