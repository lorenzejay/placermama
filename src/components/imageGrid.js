import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

export const CustomGrid = styled.div`
  .team_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto, 350px);
  }

  .team_card {
    margin: 10px;
    border-radius: 10px;
    position: relative;
  }

  .team_description {
    font-size: clamp(1rem, 3vw, 1.3rem);
    line-height: 1.4;
  }
  .team_text {
    padding: 1rem;
    height: auto;
  }

  .team_card p {
    position: absolute;
    bottom: 30px;
    color: white;
    left: 25px;
    font-size: 3rem;
  }
  .team_card img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .team_text:nth-child(1) {
    grid-row: 1/3;
    grid-column: 2/3;
  }
  .team_text:nth-child(2) {
    grid-row: 5/6;
    grid-column: 1/2;
  }

  .team_card:nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }

  .team_card:nth-child(4) {
    grid-row: 2/4;
    grid-column: 2/3;
  }
  .team_card:nth-child(5) {
    grid-row: 3/5;
    grid-column: 1/2;
  }
  .team_card:nth-child(6) {
    grid-row: 4/6;
    grid-column: 2/3;
  }

  @media screen and (max-width: 768px) {
    .team_wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    .team_text:nth-child(1) {
      grid-row: 1/2;
      grid-column: 1/2;
    }
    .team_text:nth-child(2) {
      grid-row: 6/7;
      grid-column: 1/2;
    }

    .team_card:nth-child(3) {
      grid-row: 3/4;
      grid-column: 1/2;
    }

    .team_card:nth-child(4) {
      grid-row: 4/5;
      grid-column: 1/2;
    }
    .team_card:nth-child(5) {
      grid-row: 5/6;
      grid-column: 1/2;
    }
    .team_card:nth-child(6) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
`

const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    query Products {
      allHomeProductsJson {
        edges {
          node {
            id
            title
            imgSrc {
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
  return (
    <CustomGrid className="p-10 bg-gray-900 text-white">
      <div className="team_wrapper">
        <div className="team_text">
          <p className="topline text-red-400 mt-3">
            Best Custom Made Flowers In Los Angeles
          </p>
          <h1 className="uppercase font-bold text-4xl my-5">Our Products</h1>
          <p className="team_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>

        <div className="team_text">
          <p className="topline text-red-400 mt-3">
            Each Flower is handled with care
          </p>
          <h1 className="uppercase font-bold text-4xl my-5">
            How do we do it?
          </h1>
          <p className="team_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>
        {data.allHomeProductsJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className="team_card">
              <p className="team_text">{node.title}</p>
              <img
                src={node.imgSrc.childImageSharp.fluid.src}
                alt={node.description}
                title={node.title}
              />
            </div>
          )
        })}
        {/* <div className="team_card">
          <p className="team_text">Name1</p>
          <img src={data.flower1.childImageSharp.fluid.src} />
        </div>

        <div className="team_card">
          <p className="team_text">Name2</p>
          <img src={data.flower2.childImageSharp.fluid.src} />
        </div>

        <div className="team_card">
          <p className="team_text">Name3</p>
          <img src={data.flower1.childImageSharp.fluid.src} />
        </div>

        <div className="team_card">
          <p className="team_text">Name4</p>
          <img src={data.flower2.childImageSharp.fluid.src} />
        </div> */}
      </div>
    </CustomGrid>
  )
}

export default ImageGrid
