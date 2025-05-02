import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const Contact = () => {
  return (
    <div className=" bg-blend-normal bg-black text-white h-screen">
      <div>Amit Jagdale</div>
      <Form className=" sm:w-full w-full md:w-full flex justify-center items-center mx-auto text-white">
        <div className="">
          <div>
            <label className="text-white">Name</label>
            <Input
              className=" text-white"
              type="text"
              placeholder="Enter name."
            ></Input>
          </div>
          <div>
            <lable className="text-white">Email(optional)</lable>
            <Input type="text" placeholder="Enter email."></Input>
          </div>

          <div>
            <lable className="text-white">Mobile</lable>
            <Input type="text" placeholder="Enter mobile number."></Input>
          </div>

          <div>
            <lable className="text-white">Mobile</lable>
            <Input type="text" placeholder="Enter mobile number."></Input>
          </div>

          <div>
            <lable className="text-white">Description </lable>
            <TextArea type="text" placeholder="Enter mobile number."></TextArea>
          </div>

          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
