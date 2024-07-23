import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Valdez Pretorius";
export const siteTitle = "Next.js Powered Blog Website";

export default function Layout({ children, home }) {
  return (
    <>
      <div className="pt-10">
        <div className="w-full flex justify-center">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <header>
            {home ? (
              <>
                <div className="w-full flex justify-center">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className="rounded-full"
                    height={144}
                    width={144}
                    alt=""
                  />
                </div>
                <h1>{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className="rounded-full"
                    height={108}
                    width={108}
                    alt=""
                  />
                </Link>
                <h2>
                  <Link href="/">{name}</Link>
                </h2>
              </>
            )}
          </header>
        </div>
      </div>

      <div className="flex justify-center">
        <main>{children}</main>
      </div>
      {!home && (
        <div className="float-end pt-10 pr-10">
          <Link href="/" className="btn btn-primary">
            ← Back to home
          </Link>
        </div>
      )}
    </>
  );
}
