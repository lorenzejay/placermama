import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Instagrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6) {
        nodes {
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
  `)
  //   console.log(data.allInstaNode.nodes)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-5">
      {data.allInstaNode.nodes.map(item => {
        console.log(item)
        return (
          <a
            href="https://www.instagram.com/kreativwedding/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.localFile.childImageSharp.fluid.src}
              className="w-44 h-44 object-cover"
              alt="instragram posts"
            />
          </a>
        )
      })}
    </div>
  )
}

export default Instagrid
