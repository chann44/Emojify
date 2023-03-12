import { useAtom } from "jotai";
import { AiOutlineDelete } from "react-icons/ai";
import { getEmojified } from "../lib/getEmojified";
import { loadingAtom, outPutAtom, textAtom } from "../lib/inputAtom";
import Button from "./buton";
import { CopyButon } from "./CopyBUtton";

export const Input = () => {
  const [text, setText] = useAtom(textAtom);
  const [_, setOUtput] = useAtom(outPutAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between text-xl">
        <p>Text</p>
        {/* <CopyButon text={text} /> */}
        <button
          className="text-xl cursor-pointer text-red-300"
          onClick={() => {
            setText("");
          }}
        >
          <AiOutlineDelete />
        </button>
      </div>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-transparent w-full outline-none"
          rows={30}
        />

        <Button
          size="full"
          onClick={async () => {
            if (text.length !== 0) {
              const data = await getEmojified(text, loading, setLoading);
              if (data) {
                setOUtput((data as string)?.replace(/^\n+/, ""));
              }
            }
          }}
          disabled={loading || text.length == 0}
        >
          {loading ? "emojifiying " : "emojify it"} 🎉
        </Button>
      </div>
    </div>
  );
};
