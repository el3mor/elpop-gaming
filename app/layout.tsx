import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import GridContainer from "./components/(default)/GridContainer";
import SideBar from "./components/nav/SideBar";
import MaxWidthWrapper from "./components/(default)/MaxWidthWrapper";
import NavBar from "./components/nav/NavBar";
import { WishlistProvider } from "./context/WishlistContext";
import { Suspense } from "react";
import Loader from "./components/(default)/Loader";

const montserrat = Montserrat({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ElPopGaming",
  description: "ElPopGaming Is A Gaming Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <WishlistProvider>
          <Suspense fallback={<Loader/>}>
          <main className="background min-h-screen">
            <GridContainer cols={12} className="">
              <SideBar />
              <MaxWidthWrapper className="  col-span-full lg:col-span-10">
                <NavBar /> {children}
              </MaxWidthWrapper>
            </GridContainer>
          </main>
          </Suspense>
        </WishlistProvider>
      </body>
    </html>
  );
}
