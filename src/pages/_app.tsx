import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/top-bar";

import { ThemeProvider } from "@/components/theme-provider";
import { PlayersProvider } from "@/contexts/players-context";
import { MixpanelProvider } from "@/contexts/mixpanel-context";
import { PreferencesProvider } from "@/contexts/preferences-context";

const inter = Inter({ subsets: ["latin"] });

const MIXPANEL_TOKEN = "affd98626f41a3c53107a93787689786";
const MIXPANEL_CONFIG = {
  debug: false,
  ignore_dnt: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PlayersProvider>
        <PreferencesProvider>
          <MixpanelProvider config={MIXPANEL_CONFIG} token={MIXPANEL_TOKEN}>
            <div className={`${inter.className}`}>
              <div className="sticky top-0 z-10 dark:bg-neutral-950">
                <Topbar />
              </div>
              <div>
                <Sidebar className="hidden max-h-[calc(100vh-65px)] min-h-[calc(100vh-65px)] overflow-y-auto overflow-x-clip md:fixed md:flex md:w-72 md:flex-col" />
                <div className="md:pl-72">
                  <Component {...pageProps} />
                  <Toaster richColors />
                </div>
              </div>
            </div>
          </MixpanelProvider>
        </PreferencesProvider>
      </PlayersProvider>
    </ThemeProvider>
  );
}
