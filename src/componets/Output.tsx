import { CopyButon } from "./CopyBUtton";

export const Output = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between text-xl">
        <p>Emojified 🎉</p>
        <CopyButon />
      </div>
      <div>
        <textarea className="bg-transparent w-full outline-none" rows={30} />
      </div>
    </div>
  );
};
