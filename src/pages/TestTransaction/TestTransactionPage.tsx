import type { FC } from "react";
import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";

const transaction = {
  messages: [
    {
      address:
        "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address
      amount: "20000000", //Toncoin in nanotons
    },
  ],
  //transaction body
};

export const TestTransactionPage: FC = () => {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div>
      <button
        onClick={() =>
          tonConnectUI.sendTransaction(transaction as SendTransactionRequest)
        }
      >
        Send transaction
      </button>
    </div>
  );
};
