import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import React from "react";
import { BasicLayout } from "^@layout/BasicLayout/BasicLayout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}