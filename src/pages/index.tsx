import { Input } from "../componets/Input";
import { Output } from "../componets/Output";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="border border-white/30 min-h-screen">
          <Input />
        </div>
        <div className="border border-white/30 ">
          <Output />
        </div>
      </div>
    </>
  );
}
