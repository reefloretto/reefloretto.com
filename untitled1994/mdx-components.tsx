export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    h1: ({ children }) => <h1 className="text-3xl mb-2">{children}</h1>,
    p: ({ children }) => <p className="mb-1">{children}</p>,
    ...components,
  };
}
