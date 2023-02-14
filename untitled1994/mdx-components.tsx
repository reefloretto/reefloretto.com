export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    h1: ({ children }: any) => <h1 className="text-3xl mb-4">{children}</h1>,
    p: ({ children }: any) => <p className="mb-4">{children}</p>,
    img: ({ children }: any) => (
      <img className="object-contain aspect-auto relative w-7" src={children} />
    ),
    ...components,
  };
}
