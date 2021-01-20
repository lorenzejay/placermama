import React from "react"
// Import css files for carouselk
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query Testimonials {
      allTestimonialsJson {
        nodes {
          id
          name
          description
          item
          img
        }
      }
    }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  // console.log()
  return (
    <div className="my-5 p-5 ">
      <h2 className="text-4xl text-center">What our clients have said</h2>
      <Slider
        {...settings}
        className="w-5/6 mx-auto text-black border-none box shadow-none outline-none"
      >
        {data.allTestimonialsJson.nodes.map(item => (
          <div key={item.id}>
            <div className="max-w-sm md:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-500"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-semibold">
                  {item.item}
                </h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-gray-700">
                  {item.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Testimonial
