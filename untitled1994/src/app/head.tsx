import Script from "next/script";
export default function Head() {
  return (
    <>
      <title>Reef Loretto</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Reef Loretto is an Arab-American musician based in Brooklyn, New York."
      />
      <link rel="icon" href="/favicon.ico" />
      <Script
        defer
        data-domain="reefloretto.com"
        src="https://plausible.io/js/script.js"
      />
    </>
  );
}
