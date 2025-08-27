
import { Bell, Globe, ChevronDown } from 'lucide-react'
export default function TopBar(){
  return (<header className="h-16 border-b bg-white flex items-center justify-between px-4">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
      <span className="text-sm">Toggle old/new version</span>
    </div>
    <div className="flex items-center gap-3">
      <button className="btn"><Bell size={18}/></button>
      <div className="px-3 py-1 rounded-md bg-gray-100 text-sm font-mono">$439.3317</div>
      <button className="btn"><Globe size={16}/> ENG <ChevronDown size={16}/></button>
      <div className="text-xs text-gray-500">Agent ID: <b>15785</b><div className="text-[10px]">vuanhhuy0091@gmail.com</div></div>
    </div>
  </header>)
}
