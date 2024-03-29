import { ApiPromise } from "@polkadot/api";
import { createContext, ReactNode, useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import useRPC from "../stores/rpc";

const ApiContext = createContext<ApiPromise | null>(null);

const ApiProvider = ({ children }: { children: ReactNode; }) => {
  const [api, setApi] = useState<ApiPromise | null>(null);
  const { createApi, host, error } = useRPC();

  useEffect(() => {
    (async () => {
      const api = await createApi();

      setApi(api);
    })();

    return () => {
      if (api) {
        api.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createApi, host]);

  if (error)
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-invarchOffBlack">
        <p className="text-center">
          <span className="text-invarchCream">
            Oops! Looks like there is an RPC issue.
          </span>

          <br />

          <span className="text-invarchCream">
            Head to the{" "}
            <a
              target="_blank"
              href="https://discord.gg/invarch"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-600"
            >
              InvArch Discord
            </a>{" "}
            & feel free to message the team for assistance.
          </span>
        </p>
      </div>
    );

  if (!api)
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-invarchOffBlack">
        <LoadingSpinner />
      </div>
    );

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export { ApiContext };

export default ApiProvider;
