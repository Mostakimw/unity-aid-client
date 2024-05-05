import {
  DribbbleOutlined,
  FacebookFilled,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 pt-8 mt-24 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* contact us */}
          <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
            <h5 className="text-3xl font-semibold text-gray-700">Contact Us</h5>
            <p className="text-lg my-2">
              If you have any questions or inquiries, feel free to reach out to
              us!
            </p>
            <p className="text-gray-700">Email: example@example.com</p>
            <p className="text-gray-700">Phone: 123-456-7890</p>
            <p className="text-gray-700">Address: 123 Main St, City, Country</p>
          </div>
          <div className="w-full lg:w-7/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              {/* useful links */}
              <div className=" lg:w-4/12 px-4 lg:ml-auto">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Colleges
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Admission
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      My Colleges
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              {/* other resources */}
              <div className=" lg:w-4/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* social links */}
              <div className="lg:w-4/12 px-4 mt-8 md:mt-0 lg:mb-0 flex gap-3">
                <Button shape="circle">
                  <TwitterOutlined className="text-2xl" />
                </Button>
                <Button shape="circle">
                  <FacebookFilled className="text-2xl" />
                </Button>
                <Button shape="circle">
                  <DribbbleOutlined className="text-2xl" />
                </Button>
                <Button shape="circle">
                  <GithubOutlined className="text-2xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                {" "}
                Unity Aid
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
