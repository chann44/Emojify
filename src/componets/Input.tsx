import { CopyButon } from "./CopyBUtton";

export const Input = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between text-xl">
        <p>Text</p>
        <CopyButon />
      </div>
      <div>
        <textarea className="bg-transparent w-full outline-none" rows={30} />
      </div>
    </div>
  );
};
