import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Instagrid = () => {
  const data = useStaticQuery(graphql`
    query Insta {
      allInstaNode(limit: 9) {
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
    <div className="grid grid-cols-3 gap-3 p-5">
      {data.allInstaNode.edges.map((item, i) => {
        console.log(item)
        return (
          <a
            href="https://www.instagram.com/jmsd_films/"
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <img
              src={item.node.localFile.childImageSharp.fluid.src}
              className="w-24 h-24 md:w-32 md:h-32 object-cover"
              alt="instragram posts"
            />
          </a>
        )
      })}
    </div>
  )
}

export default Instagrid
