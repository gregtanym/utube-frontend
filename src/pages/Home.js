import React, {useEffect} from 'react'
import Feed from '../components/Feed'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from '../context';

const Home = () => {
  return (
    <div className="homepage-container">
      <Header/>
      <Sidebar/>
      <Feed/>
    </div>
  )
}

export default Home