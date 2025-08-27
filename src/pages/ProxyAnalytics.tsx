
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'
const line = Array.from({length:12}).map((_,i)=>({ts:`2025-08-${String(i+1).padStart(2,'0')}`, success: +(Math.random()*8).toFixed(2), refund: +(Math.random()*3).toFixed(2)}))
export default function ProxyAnalytics(){
  const donut = [{name:'Used', value:700},{name:'Free', value:300}]
  const palette = ['#3b82f6','#f59e0b']
  return (<div className="space-y-4">
    <div className="card p-6"><div className="font-semibold mb-3">Order Reports by Services</div><div className="h-32 flex items-end gap-2">{[...Array(24)].map((_,i)=> <div key={i} className="flex-1 bg-emerald-200 rounded-t" style={{height: (Math.random()*100+10)+'%'}}/>)}</div></div>
    <div className="card p-6"><div className="font-semibold mb-3">Success / Refund trend</div><div className="h-64"><ResponsiveContainer><LineChart data={line}><XAxis dataKey="ts"/><YAxis/><Tooltip/><Legend/><Line dataKey="success" dot={false}/><Line dataKey="refund" dot={false}/></LineChart></ResponsiveContainer></div></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card p-6"><div className="font-semibold mb-3">Total GB</div><div className="h-60"><ResponsiveContainer><PieChart><Pie data={donut} dataKey="value" innerRadius={60} outerRadius={90} stroke="#fff" strokeWidth={2}>{donut.map((e,i)=><Cell key={i} fill={palette[i%palette.length]}/>)}</Pie></PieChart></ResponsiveContainer></div></div>
      <div className="card p-6"><div className="text-sm text-gray-500">Số lượng GB</div><div className="text-3xl font-bold">2504</div></div>
      <div className="card p-6"><div className="text-sm text-gray-500">Số proxy bạn dùng</div><div className="text-3xl font-bold">11</div></div>
    </div>
  </div>)
}
