import { useState } from "react";
// import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import * as React from 'react';
// import { fetchPosts } from '../../_lib/posts';
import contact from "../api/contact";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("送信中");

    let data = {
      name,
      email,
      message,
    };

    // fetch("../api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   if (res.status === 200) {
    //     console.log("送信が成功しました");
    //     setSubmitted(true);
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // });

    async function fetcher(url) {
      const response = await fetch(url);
      return response.json();
    }
    // async function fetcher(url): Promise<boolean | null> {
    //   const response = await fetch(url);
    //   return response.json();
    // }
    const { data: isLoggedIn } = useSWR('/api/user', fetcher);

  };

  return (
    <div>
      <form>
        <formGroup>
          <label htmlFor="name">名前</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
        </formGroup>

        <formGroup>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
          />
        </formGroup>

        <formGroup>
          <label htmlFor="message">メッセージ</label>
          <input
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
          />
        </formGroup>

        <input
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}

