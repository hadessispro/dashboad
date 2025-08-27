
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
const data = [{name:'Activation',value:80},{name:'Rent',value:20}]
const line = Array.from({length:12}).map((_,i)=>({ts:`2025-08-${String(i+1).padStart(2,'0')}`, activationUSD: +(Math.random()*8).toFixed(2), rentUSD: +(Math.random()*3).toFixed(2)}))
export default function Dashboard(){
  const palette = ['#3b82f6','#f43f5e','#10b981','#f59e0b']
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card p-6"><div className="text-sm text-gray-500">Statistics <span className="text-emerald-600 font-semibold">+5.59%</span></div><div className="text-4xl font-bold mt-1">$7.4608</div></div>
      <div className="card p-6"><div className="text-sm text-gray-500">Activation</div><div className="text-4xl font-bold mt-1">$7.4608</div></div>
      <div className="card p-6"><div className="text-sm text-gray-500">Rent</div><div className="text-4xl font-bold mt-1">$0</div></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card p-6"><div className="font-semibold mb-3">Activation vs Rent</div><div className="h-60">
        <ResponsiveContainer><PieChart><Pie data={data} dataKey="value" innerRadius={60} outerRadius={90} stroke="#fff" strokeWidth={2}>{data.map((e,i)=><Cell key={i} fill={palette[i%palette.length]}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer>
      </div></div>
      <div className="md:col-span-2 card p-6"><div className="font-semibold mb-3">Earnings schedule</div><div className="h-64">
        <ResponsiveContainer><LineChart data={line}><XAxis dataKey="ts"/><YAxis/><Tooltip/><Legend/><Line type="monotone" dataKey="activationUSD" dot={false}/><Line type="monotone" dataKey="rentUSD" dot={false}/></LineChart></ResponsiveContainer>
      </div></div>
    </div>
  </div>)
}
