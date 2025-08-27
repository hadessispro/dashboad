
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
const data = Array.from({length:12}).map((_,i)=>({ts:`2025-08-${String(i+1).padStart(2,'0')}`, activation: +(Math.random()*8).toFixed(2), rent: +(Math.random()*3).toFixed(2)}))
export default function IncomeStatistics(){
  return (<div className="space-y-3">
    <div className="text-xl font-semibold">Income statistics</div>
    <div className="card p-6"><div className="h-64"><ResponsiveContainer><LineChart data={data}><XAxis dataKey='ts'/><YAxis/><Tooltip/><Legend/><Line dataKey='activation' dot={false}/><Line dataKey='rent' dot={false}/></LineChart></ResponsiveContainer></div></div>
  </div>)
}
