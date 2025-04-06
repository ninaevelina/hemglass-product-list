export interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params: { slug } }: ProductPageProps) {
  return (
    <main
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <h1>Produktens slug: {slug}</h1>
    </main>
  );
}
