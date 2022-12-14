import AccountDetails from "components/AccountDetails";
import Tabs from "components/Tabs";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import React from "react";

function Account() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTrigger={50} showLinks={false} showProfile={true} />
      <div className="flex-1 py-[120px] pb-[60px] sm:pb-[140px] sm:py-[140px]">
        <div className="container">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">
            Welcome Back, User
          </h1>
          <Tabs defaultTab={1}>
            <AccountDetails />
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
