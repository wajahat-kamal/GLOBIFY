import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { blogsData } from '../assets/blogsData'
import Navbar from "../components/Navbar"

export default function Blog() {

  const {id} = useParams()
  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
    const data = blogsData.find((item) => item._id === id)
    setData(data)
  }

  useEffect(() => {
    fetchBlogData()
  }, [])
  

  return data ? (
    <div>
      <Navbar />
      <div>
        
      </div>
    </div>
  ) : <div>Loading..</div>
}
