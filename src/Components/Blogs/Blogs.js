import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container blogs">
      <h1 className="text-center mt-4">
        <strong>
          <u>FAQ</u>
        </strong>{" "}
      </h1>
      <div className="row faq">
        <div className="col-md-4 col-sm-12 ">
          <h5 className="mt-2"> Difference between authorization and authentication</h5>
          <p className="mt-4">
            Authentication is the process of verifying who someone is, whereas
            authorization is the process of verifying what specific
            applications, files, and data a user has access to. Different user might have different
            user role.
          </p>
          <div className="authentication d-flex justify-content-space-between">
            <div className="div">
                <h6>Authentication</h6>
                <ul>
                    <li>Google</li>
                    <li>Facebook</li>
                    <li>Email</li>
                    <li>Apple</li>
                    <li>Twitter</li>
                    <li>Phone Number</li>
                    <li>Github</li>
                    <li>Microsoft</li>
                    <li>Yahoo</li>
                </ul>
            </div>
            <div className="div">
            <h6>Authorization </h6>
            <ul>
                <li>Superuser</li>
                <li>Admin</li>
                <li>Editor</li>
                <li>Contributor</li>
                <li>Viewer</li>
                <li>Moderator </li>
                <li>Subscriber</li>
                <li>Billing</li>
              
                
            </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <h5 className="mt-2">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p className="mt-4">
            Firebase Authentication makes it easier to get users signed-in
            without having to understand the complexities behind implementing
            own authentication system.Firebase Authentication provides backend
            services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using
            passwords, phone numbers, popular federated identity providers like
            Google, Facebook and Twitter, and more. Other options to implement
            authentication system of a website as mentioned bellow:
          </p>
          <ul className="mt-2">
            <li>Parse</li>
            <li>Back4App</li>
            <li>AWS Amplify</li>
            <li>Kuzzle</li>
            <li>Couchbase</li>
            <li>RxDB.</li>
            <li>Back4App.</li>
            <li>Flutter</li>
            <li>LoopBack</li>
            <li>SashiDo</li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12">
          <h5 className="mt-2">
            What other services does firebase provide other than authentication
            ?
          </h5>
          <p className="mt-2"> The following other services firebase provide other than authentication: </p>
          <ul className="mt-2">
            <li>Realtime Database</li>
            <li>Firestore</li>
            <li>Storage</li>
            <li>ML</li>
            <li>Hosting</li>
            <li>Cloud Functions</li>
            <li>Security Rules</li>
            <li>Extensions</li>
            <li>Emulator Suite</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
