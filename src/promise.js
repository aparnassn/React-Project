import { useState } from "react";

function Usingpromise() {
  let promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve("B");
    }, 2000)
  );
  console.log("A");

  async function abc() {
    let r = await promise;
    console.log(r);
    console.log("C");
  }
  abc();

  const posts = [
    { id: 1, title: "machine1" },
    { id: 2, title: "machine2" },
    { id: 3, title: "machine3" },
  ];

  const getPost = (id, callback) => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      callback(null, post);
    } else {
      callback("not found", undefined);
    }
  };
  console.log({ posts });
  //

  let element = {
    logAsync: function (value) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("Logging: " + value);
          resolve(value);
        }, Math.random * 5000);
      });
    },
  };

  element.logAsync(1).then(function () {
    return element.logAsync(2);
  });
  console.log({ element });
  //

  function helloworld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("helloworld");
      }, 2000);
    });
  }

  const msg = async function () {
    const msg = await helloworld();
    console.log("message: ", msg);
  };

  const msgs = async () => {
    const msgs = await helloworld();
    console.log("Message: ", msgs);
  };
  msg();
  msgs();
  //    
  const wait = (i, m) => {
    return new Promise((resolve) => setTimeout(() => resolve(i), m));
  };

  async function printNumbersusingAsync() {
    for (let i = 0; i < 10; i++) {
      await wait(i, Math.random() * 1000);
      console.log({ i });
    }
  }
  printNumbersusingAsync();

  return <div></div>;
}
export default Usingpromise;
