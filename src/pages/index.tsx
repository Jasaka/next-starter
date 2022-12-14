import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Home.module.css"
import QueryView from "./QueryView"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/img/favicon.ico" />
      </Head>
      <main className="items-center justify-center text-center flex flex-col w-screen h-screen">
        <Link href="/QueryView">QueryView</Link>
      </main>
    </>
  )
}

export default Home
