import { Brain } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Brain className="w-8 h-8 text-[#75d031]" />
      <div className="flex items-baseline">
        <span className="font-bold text-2xl tracking-wide">VIKS</span>
        <span className="ml-1.5 text-[#75d031] font-semibold">AI</span>
      </div>
    </div>
  );
}