import { Icon } from "@iconify/react";

export default function ProfileFooter() {
  return (
    <div className="py-2 pb-4">
      <div className="px-4">
        <div className="flex justify-between p-2 bg-white/10 rounded-md">
          <span className="flex gap-3 items-center">
            <span><Icon icon="mingcute:binance-coin-bnb-fill" className="w-6 h-6" /></span>
            <span>ETH</span>
          </span>
          <span>0.00</span>
        </div>
      </div>
      <div className="mt-2 px-4">
        <div className="flex justify-between p-2 bg-white/10 rounded-md">
          <span className="flex gap-3 items-center">
            <span><Icon icon="mingcute:tether-usdt-line" className="w-6 h-6" /></span>
            <span>NYW</span>
          </span>
          <span>0.00</span>
        </div>
      </div>

    </div>
  );
}