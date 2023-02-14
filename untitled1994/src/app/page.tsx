import IndexContent from "./mdx/index.mdx";

export default function Page() {
  return (
    <div className="w-screen">
      <div className="text-stone-900 container pt-10 max-w-3xl">
        <IndexContent />
      </div>
    </div>
  );
}
