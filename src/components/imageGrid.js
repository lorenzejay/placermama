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
    query {
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
  console.log(data.allGalleriesJson.nodes)
  return (
    <div className="flex flex-col p-4">
      <div className="my-24">
        <h1 className="text-4xl w-full mt-12 mb-6 text-center">
          Your Logo Here
        </h1>
        <p className="text-md sm:w-3/4 text-center sm:mx-auto leading-relaxed">
          Hi, I'm John Doe and with my photography I want to immortalize your
          wedding day in the most natural and beautiful way. For me, it's not
          about the perfect pose, just about natural moments and pure emotions.
          I am of course happy to advise you and lead you to the best light, but
          above all I remain reserved and unobtrusive in order to capture the
          whole day just as it unfolds. If you are looking for a natural and
          authentic style, take a look at my portfolio and just write to me
          about yourself and your ideas. I look forward to hearing from you!
        </p>
      </div>
      <h2 className="text-4xl text-center">Photos</h2>
      <div className="gallery mt-2 flex flex-col items-center justify-center">
        {data.allGalleriesJson.nodes.map(item => {
          return (
            <div
              className="relative flex flex-col my-3  sm:w-3/4"
              key={item.id}
            >
              <img
                className="w-full object-fit "
                src={item.coverImg.childImageSharp.fluid.src}
              />
              <Overlay className="overlay hover:inline-block"></Overlay>
              <h4
                className="absolute top-1/2 left-1/2 text-white text-3xl bold uppercase z-20 w-full text-center"
                style={{
                  transform: "translate(-50%, -50%)",
                  fontFamily: "Source Sans Pro, Poppins",
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
