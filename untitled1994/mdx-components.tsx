export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    h1: ({ children }: any) => <h1 className="text-3xl mb-2">{children}</h1>,
    p: ({ children }: any) => <p className="mb-1">{children}</p>,
    ...components,
  };
}
