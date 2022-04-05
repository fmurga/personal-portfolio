import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {
  children: any;
}

export const ContainerBlock: FC<Props> = ({children, ...customMeta}) => {
    const router = useRouter();
    const meta = {
        title: "Facundo Murga - Developer, Systems Engineer",
        description: "I am developer taking my first steps and looking for an oportunity to prove my skills",
        image: "/avatar.png",
        type: "website",
        date: new Date().toString(),
        ...customMeta,
    }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
