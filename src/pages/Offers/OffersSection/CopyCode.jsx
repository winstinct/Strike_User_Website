import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopiedToast = () => {
  return (
    <div className="absolute right-0 top-0 bg-[#D49C17] text-white font-bold py-1 px-2 rounded-lg flex items-center justify-between">
      <Icon className="text-[1.5rem]" icon="line-md:clipboard-check" />
      <span className="text-[14px]">Copied</span>
    </div>
  );
};

export default function CopyCode({ code }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      {copied && <CopiedToast />}
      <div className="flex items-center gap-1">
        <div>
          <span>Code:</span> <span className="font-bold">{code}</span>
        </div>
        <CopyToClipboard
          text={code}
          onCopy={(isCopied) => {
            setCopied(isCopied);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? (
            <Icon className="text-[1.5rem]" icon="solar:check-read-linear" />
          ) : (
            <Icon
              className="text-[1.5rem] cursor-pointer"
              icon="bitcoin-icons:copy-outline"
            />
          )}
        </CopyToClipboard>
      </div>
    </div>
  );
}
