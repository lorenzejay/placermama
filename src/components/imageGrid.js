import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export const Overlay = styled.div`
  position: absolute; /* Sit on top of the page content */
  width: auto; /* Full width (cover the whole page) */
  height: auto; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
`

const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    query Galleries {
      allGalleriesJson(sort: { fields: id }) {
        nodes {
          id
          title
          description
          coverImg {
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
  // console.log(data.allGalleriesJson.nodes)
  return (
    <div className="flex flex-col p-4">
      <h2 className="text-4xl text-center">Photos</h2>
      <div className="gallery mt-2 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-4 mx-auto">
        {data.allGalleriesJson.nodes.map(item => {
          return (
            <div className="relative flex flex-col my-3 " key={item.id}>
              <img
                className="w-full object-fit "
                src={item.coverImg.childImageSharp.fluid.src}
                alt={item.title}
              />
              <Overlay className="overlay hover:inline-block "></Overlay>
              <h4
                className="absolute top-1/2 left-1/2  text-white text-3xl bold uppercase z-20 w-full text-center "
                style={{
                  transform: "translate(-50%, -50%)",
                  fontFamily: "Source Sans Pro, Poppins, arial",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGrid
