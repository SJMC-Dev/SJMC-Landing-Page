import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from '@/contexts/theme';
import { MessageContextProvider } from "@/contexts/message";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <>
        <Head>
          <title>加载中</title>
        </Head>
        <></>
      </>
    );

  return (
    <MessageContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} /> 
      </ThemeContextProvider>
    </MessageContextProvider>
  )
}
