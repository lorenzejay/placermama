import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query Pricing {
      allPackagesJson {
        nodes {
          id
          title
          price
          details
        }
      }
    }
  `)
  // console.log(data.allPackagesJson.nodes)
  return (
    <Layout>
      <div className="min-h-screen text-white">
        <div className="hero bg-gray-700 min-h-48 flex flex-col items-center p-10 md:min-h-72 md:justify-center">
          <h1 className="text-3xl text-center my-5 md:text-5xl font-bold">
            Wedding Videography Packages
          </h1>
          <p className="leading-relaxed md:w-3/4">
            Our videograohy packages are focuses on develiering cinematic
            wedding films that tell a story of your special day. The fuilmsa re
            3-6 minutes long and will be delivered between 4 - 6 weeks after the
            wedding. Lenght of the film depends on the size if your weddin,
            number of hours you've hired us for and the amount of events that
            occurred throught the day. See below packages specifics
          </p>
        </div>

        <div className="text-gray-700 flex flex-col justify-center md:flex-row md:justify-around py-10 md:mt-24">
          {data.allPackagesJson.nodes.map(item => (
            <div key={item.id} className="text-center my-5">
              <h1 className="font-bold text-3xl uppercase">{item.title}</h1>
              <h6 className=" my-2">{item.price}</h6>
              <hr className="w-1/4 mx-auto border-black mb-3" />
              <ul>
                {item.details.map((item, i) => (
                  <li key={i} className="my-3">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-3">
                <button className="bg-blue-500 rounded px-5 py-1 text-white">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Pricing
