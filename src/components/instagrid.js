import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Instagrid = () => {
  const data = useStaticQuery(graphql`
    query Insta {
      allInstaNode(limit: 9, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  // console.log(data.allInstaNode.edges)
  return (
    <div className="grid grid-cols-3 gap-3 p-5 justify-center items-center mx-auto">
      {data.allInstaNode.edges.map((item, i) => {
        // console.log(item)
        return (
          <a
            href="https://www.instagram.com/placermama/"
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <img
              src={item.node.localFile.childImageSharp.fluid.src}
              className="w-40 h-40 md:w-52 md:h-52 lg:h-72 lg:w-72 object-cover mx-auto"
              alt="instragram posts"
            />
          </a>
        )
      })}
    </div>
  )
}

export default Instagrid
