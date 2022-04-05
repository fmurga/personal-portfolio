import Head from "next/head";
import styles from "../styles/Home.module.css";
import {ContainerBlock} from "../components/ContainerBlock";
import {FavouriteProjects} from "../components/FavouriteProjects";
import {LatestCode} from "../components/LatestCode";
import {Hero} from "../components/Hero";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    //@ts-ignore: disable-next-line
    <ContainerBlock title="Facu Murga - Developer, Engineer"
    description="This is my personal portfolio"
    >
    <Hero />
    <FavouriteProjects />
    <LatestCode />
  </ContainerBlock>
  )
}

export default Home
