"use client";
import { useRouter } from "next/navigation";
import { useEffect, startTransition } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <section className="flex items-center justify-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col items-center gap-6 p-4">
        <div className="txt">
          <h2 className="font-bold">예기치 않은 오류가 발생했습니다!</h2>
          <p className="mt-8">{error.message}</p>
        </div>

        <button
          onClick={() =>
            startTransition(() => {
              router.refresh();
              reset();
            })
          }
          className="px-4 py-2 font-medium text-white bg-red-600 rounded hover:bg-red-700"
        >
          다시 시도
        </button>
      </article>
    </section>
  );
}
