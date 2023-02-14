import IndexContent from "./mdx/index.mdx";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-slate-50">
      <div className="text-stone-900 container pt-10 max-w-3xl">
        <IndexContent />
      </div>
    </div>
  );
}
