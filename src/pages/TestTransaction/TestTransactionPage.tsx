import type { FC } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { toNano } from "@ton/ton";
import { beginCell } from "@ton/ton";

const body = beginCell()
  .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
  .storeStringTail("Hello, TON!") // write our text comment
  .endCell();

// const [tonConnectUI] = useTonConnectUI();
const myTransaction = {
  validUntil: Math.floor(Date.now() / 1000) + 360,
  messages: [
    {
      address: "UQDwfz1cu0nchgSl88_IQbJMnnFAC8jQkbt58ZPFErushP4b",
      amount: toNano(0.01).toString(),
      payload: body.toBoc().toString("base64"), // payload with comment in body
    },
  ],
};

export const TestTransactionPage: FC = () => {
  // @ts-ignore
  const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <div>
      <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
        Send transaction
      </button>
    </div>
  );
};
