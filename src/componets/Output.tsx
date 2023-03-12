import { useAtom } from "jotai";
import { outPutAtom } from "../lib/inputAtom";
import Button from "./buton";
import { CopyButon } from "./CopyBUtton";

export const Output = () => {
  const [text, setText] = useAtom(outPutAtom);
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between text-xl">
        <p>Emojified 🎉</p>
        <CopyButon text={text} />
      </div>
      <div>
        <textarea
          value={text}
          className="bg-transparent w-full outline-none"
          rows={30}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          onClick={() => {
            if (text) {
              setText("");
            }
          }}
          disabled={text ? false : true}
          size={"full"}
          variant="primary"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
