import React from "react"
import Title from "./Title"
import profileImage from "../assets/myImages.png"

const About = () => {
  return (
    <section className="mt-40 flex flex-col">
      <Title>About</Title>
      <div className="flex md:flex-row flex-col justify-between gap-20 items-center">
        <div className="flex-1">
          <h4>soni canra wiguna</h4>
          <h5>18 tahun</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim
            perspiciatis reiciendis quae qui vitae voluptate, laborum nobis
            consequuntur quisquam?
          </p>
          <button className="px-3 capitalize py-2 rounded-md bg-gradient-to-r from-primary to-secondary">
            download resume
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[250px] aspect-[9/12]">
            <img
              src={profileImage}
              alt="image profile"
              className="w-full h-full object-center rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
