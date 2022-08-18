import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import { signOut, useSession } from "next-auth/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import styles from "@/styles/Header.module.css";
import Cookies from "js-cookie";

export default function Header() {
  const { state, dispatch } = useContext(Store);
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/account/login" });
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>KabylyEvents</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>SoccerEv</a>
            </Link>
          </li>
          <li>
            <Link href="/events/add">
              <a>Add Event</a>
            </Link>
          </li>
          <li>
            {status === "loading" ? (
              "Loading"
            ) : session?.user ? (
              <>
                <ul>
                  <li>
                    <a> {session.user.name} </a>
                  </li>
                  <li>
                    <a
                      className="btn-secondary btn-icon"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      <FaSignOutAlt />
                      Logout
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <Link href="/account/login">
                <a className="btn-secondary btn-icon">
                  <FaSignInAlt />
                  Login
                </a>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
