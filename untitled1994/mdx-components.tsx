export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    h1: ({ children }: any) => <h1 className="text-3xl">{children}</h1>,
    p: ({ children }: any) => <p>{children}</p>,
    img: ({ children }: any) => (
      <img className="object-contain aspect-auto relative w-7" src={children} />
    ),
    ...components,
  };
}
