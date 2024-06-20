'use client'
import Image from "next/image";
import useFind from "@/hooks/useFind";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const { data, findQuote } = useFind()
  const handleClick = async () => {
    toast.dismiss();
    const errorMessage = await findQuote();

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.success("Quote found!");
    }
  }
  return (
    <div className="flex flex-col w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <header className="max-w-6xl w-full mx-auto p-4 flex justify-between items-center h-20">
        <a href="/" className="flex gap-2 items-center">
          <Image
            src="/icon.png"
            alt="logo"
            width={48}
            height={48}
            priority={true}
          />
          <h1 className="text-xl font-black text-base-content">QuoteSpark</h1>
        </a>
        <div className="flex gap-2">
          <a href="https://www.youtube.com/@scriptsorcery4" target="_blank">
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700"
              width={32}
              height={32}
            >
              <path
                d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0Zm153.315 178.978c-3.68-13.769-14.522-24.61-28.29-28.29C356.067 144 256 144 256 144s-100.067 0-125.025 6.688c-13.765 3.68-24.61 14.521-28.29 28.29C96 203.933 96 256.002 96 256.002s0 52.067 6.685 77.02c3.68 13.769 14.525 24.614 28.29 28.293C155.933 368 256 368 256 368s100.067 0 125.025-6.685c13.768-3.679 24.61-14.524 28.29-28.293C416 308.069 416 256.002 416 256.002s0-52.069-6.685-77.024ZM223.999 304.003v-96.002l83.137 48.001-83.137 48.001Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/scriptsorcery4" target="_blank">
            <svg
              data-name="Layer 1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700"
              width={32}
              height={32}
            >
              <path
                d="M314.757 147.525H197.243a49.717 49.717 0 0 0-49.718 49.718v117.514a49.718 49.718 0 0 0 49.718 49.718h117.514a49.718 49.718 0 0 0 49.717-49.718V197.243a49.717 49.717 0 0 0-49.717-49.718ZM256 324.391A68.391 68.391 0 1 1 324.391 256 68.391 68.391 0 0 1 256 324.391Zm71.242-122.811a16.271 16.271 0 1 1 16.27-16.271 16.271 16.271 0 0 1-16.27 16.271Z"
                fill="currentColor"
              ></path>
              <path
                d="M256 211.545A44.455 44.455 0 1 0 300.455 256 44.455 44.455 0 0 0 256 211.545Z"
                fill="currentColor"
              ></path>
              <path
                d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0Zm133.333 312.5a76.836 76.836 0 0 1-76.833 76.833h-113a76.837 76.837 0 0 1-76.834-76.833v-113a76.836 76.836 0 0 1 76.834-76.833h113a76.836 76.836 0 0 1 76.833 76.833Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@scriptsorcery4" target="_blank">
            <svg
              data-name="Layer 1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700"
              width={32}
              height={32}
            >
              <path
                d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0Zm129.62 232.382c-27.184 0-53.634-8.822-74-23.75l-.162 101.5a92.457 92.457 0 1 1-80.178-91.721v49.845a43.657 43.657 0 1 0 31.288 41.876V109.333h51.275a71.773 71.773 0 0 0 71.774 71.773Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <main className="max-w-xl mx-auto p-4 flex flex-col gap-2 justify-center items-center h-[70vh]">
      {!data ? <>
        <h1 className="text-3xl font-black ">Welcome to QuoteSpark!</h1>
        <p className="text-[15px] text-center text-base-content/80">
          QuoteSpark is your daily source of inspiration and motivation. With
          our app, you receive unique motivational quotes every day that
          encourage you to achieve your goals and pursue your dreams.{" "}
        </p>
        <div className="pt-2 flex gap-2">
          <button onClick={handleClick} className="btn btn-secondary">GET STARTED</button>
          <a
            className="btn btn-outline hover:bg-base-content/5 hover:text-base-content/90"
            target="blank_"
            href="https://github.com/scriptsorcery4"
          >
            <svg
              className="w-4 mb-0.5 text-base-content"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 512 512"
            >
              <path
                d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#283618"
                className="fill-000000 scale-110"
              ></path>
            </svg>
            SEE MORE
          </a>
        </div>
      </> : <div className="flex flex-col space-y-2">
      <p className="w-full text-left text-base-content/80 font-extrabold">Your quote is:</p>
      <p className="text-xl font-bold">{data.content}</p>
      <p className="text-right w-full">-{data.author}</p>
      <div className="pt-2 flex flex-col gap-1"><button onClick={handleClick} className="btn btn-block btn-secondary">TRY AGAIN</button>
      <a href='/' className="btn btn-block btn-ghost">BACK HOME</a>
      </div>
      </div>}
      </main>
      <div className="grow">
        <div className="mt-2 p-4 flex flex-grow justify-center">
          <div className="flex gap-2">
            <p className="font-medium">Build with ♥ by</p>
            <a
              target="blank_"
              className="font-bold hover:underline transition-transform duration-300"
              href="https://x.com/Scriptsorcery4"
            >
              Scriptsorcery4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
