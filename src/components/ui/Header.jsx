import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart } from "lucide-react";
function Header() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      setShow(false);
      setSearch({});
    }
  }
  useEffect(() => {
    if (search.get("sign-in")) {
      console.log("changed");
      setShow(true);
    }
  }, [search]);

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="../../public/logo.png" alt="logo" className="h-20" />
        </Link>
        <div className="flex gap-8">
          {/* <SignOut  Button /> */}
          <SignedOut>
            <Button variant="outline" onClick={() => setShow(true)}>
              Login
            </Button>
          </SignedOut>
          {/* <SignInButton /> */}
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" ? (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  Post Job
                </Button>
              </Link>
            ) : (
              ""
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="my-jobs"
                ></UserButton.Link>
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {show && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpFallbackRedirectUrl="/onboarding"
            // signUpFallbackRedirectUrl="/"
            fallbackRedirectUrl="/onboarding"
          ></SignIn>
        </div>
      )}
    </>
  );
}

export default Header;
