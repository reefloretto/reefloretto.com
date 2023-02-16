export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    h1: ({ children }: any) => <h1 className="text-2xl my-4">{children}</h1>,
    h3: ({ children }: any) => (
      <h3 className="font-sans font-bold text-2xl my-4">{children}</h3>
    ),
    p: ({ children }: any) => <p className="my-2">{children}</p>,
    pre: ({ children }: any) => <pre className="my-8">{children}</pre>,
    code: ({ children }: any) => (
      <code className="bg-zinc-100 p-3">{children}</code>
    ),
    img: ({ children }: any) => (
      <img className="object-contain aspect-auto relative w-7" src={children} />
    ),
    ...components,
  };
}
