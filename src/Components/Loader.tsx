import { IconHexagon } from "@tabler/icons-react";
import IconCloud from "./magicui/icon-cloud";


export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_2s_ease-in-out_1_2.5s] items-center justify-center">
      <IconHexagon className="absolute -z-10 animate-[spin_4s_linear_infinite]" size={150} color="#64FFDA" stroke={1.25} />
      <div className=" absolute font-mono text-primaryColor font-semibold text-6xl -z-10"> A.R </div>
    </div>
  );
}
