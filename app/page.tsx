import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div className="flex flex-col px-4 py-8 items-start justify-center">
      <div className="flex flex-col items-center mx-auto">
        <h1 className="text-7xl">
          Vag<span className="text-mRed font-bold">Dumps</span>
        </h1>
        <p className="text-2xl mt-6 font-mono text-mLightBlue">
          Personal Dairy
        </p>
      </div>
      <div className="mt-22">
        <Posts />
      </div>
    </div>
  );
}
