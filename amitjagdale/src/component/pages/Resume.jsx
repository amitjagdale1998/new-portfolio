import React from "react";
import data from "./data.json";
export default function Resume() {
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     overflow: "hidden",
    //     margin: 0,
    //     padding: 0,
    //   }}
    // >
    //   <iframe
    //     src="/amitjagdale_Resume.pdf"
    //     style={{
    //       height: "100%",
    //       width: "100%",
    //       border: "none",
    //       overflow: "hidden",
    //     }}
    //     title="Resume PDF"
    //   ></iframe>
    // </div>
    <>
      {console.log(data)}
      <div className="flex flex-row  justify-start p-2 text-white ">
        <div className=" w-1/3 bg-[#233A5F] p-2">
          <div className=" font-bold text-2xl ">{data.name}</div>
          <div className=" font-normal text-[14px]"> {data.profile}</div>
          <div className="mt-10 text-black  space-y-1.5">
            <div className="w-[80%] bg-white p-2 rounded-sm">+919822193468</div>
            <div className="w-[80%] bg-white p-2 rounded-sm break-words">
              amitjagdale1998@gmail.com
            </div>
            <div className="w-[80%] bg-white p-2 rounded-sm">
              kanjurmarg East ,mumbai
            </div>
            <div></div>
          </div>
          <div>
            <div className=" font-bold text-2xl  mt-10">Skills</div>
            <ul>
              {data.skills.map((items) => {
                return (
                  <>
                    <li>{items}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div>
            <div className=" font-bold text-2xl  mt-10">Hobbies</div>
            {data.hobbies.map((items) => {
              return (
                <>
                  <li>{items}</li>
                </>
              );
            })}
          </div>
          <div>
            <div className=" font-bold text-2xl  mt-10">
              Links and Credentials
            </div>
            <ul>
              {data.links.map((items) => {
                return (
                  <>
                    <li>
                      <a
                        href={items.link}
                        className="flex cursor-pointer flex-row col items-center justify-start gap-2 mb-3 hover:text-[blue]"
                      >
                        <img
                          src={items.logo}
                          className="h-[30px] w-[30px]"
                        ></img>
                        <div>{items.name}</div>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-[100%] p-2 text-black">
          <div className=" font-bold text-2xl resume-title ">About</div>
          {data.about.map((items, i) => {
            return (
              <>
                <p
                  key={i + "0"}
                  className="px-5  mb-2 text-base indent-10 text-gray-700 "
                >
                  {items}
                </p>
              </>
            );
          })}

          <div className=" font-bold text-2xl resume-title mt-10">
            Experience
          </div>
          {data.experienece.map((item, idx) => {
            return (
              <div key={idx + "0"} className="px-5">
                <div className="flex flex-row  items-center justify-start gap-2">
                  <div>{item.icon}</div>{" "}
                  <div className=" font-semibold text-xl resume-title ">
                    {" "}
                    {item.title}
                  </div>
                </div>

                <div className=" font-medium   mt-2">{item.subtitle}</div>
                <div className=" font-normal  mt-2">{item.paragraph}</div>
              </div>
            );
          })}

          <div className=" font-bold text-2xl resume-title  mt-10">
            Education
          </div>
          {data.education.map((item, idx) => {
            return (
              <div key={idx + "0"} className="px-5 pt-3">
                <div className="flex flex-row gap-2">
                  <div>{item.icon}</div>{" "}
                  <div className=" font-bold text-20  ">{item.university}</div>
                </div>
                <div className=" font-bold text-20  "> {item.title}</div>

                <div className=" font-medium  ">{item.subtitle}</div>
                <div className=" font-normal  ">{item.paragraph}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
