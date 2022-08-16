import Link from "next/link";
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import {signOut, useSession } from 'next-auth/react';
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import styles from "@/styles/Header.module.css";
import Cookies from 'js-cookie';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';

export default function Header() {
  const { state, dispatch } = useContext(Store);
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
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
         
          {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                <Menu.Button className="text-blue-600">
                  {session.user.name}
                </Menu.Button>
                <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                  <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      Profile
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/order-history"
                    >
                      Order History
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      className="dropdown-link"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      Logout
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              ) : (
                <Link href="/account/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
         
            
          </li>
        </ul>
      </nav>
    </header>
  );
}
