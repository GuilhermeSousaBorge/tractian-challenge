import { NetworkIcon } from "lucide-react";


type Props = {
    label: string
    onClick: () => void
}

export function Button({label, onClick}: Props) {
  return (
    <button onClick={() => onClick()} className="w-28 h-6 px-2 py-1 text-xs flex items-center justify-center gap-2 text-white bg-blue-800">
      <NetworkIcon className="size-3" />
      {label}
    </button>
  );
}
