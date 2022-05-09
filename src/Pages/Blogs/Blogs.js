import React from 'react';

const Blogs = () => {
  return (
    <div className="text-center">
      <h3>Difference between javascript and node js</h3>
      <p>1.JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better <br />
      2.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system. <br />
      3.JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.</p>
      
      <h3>When should you use nodejs and when should you use mongodb</h3>
      <p>Node is server side javascript framework. It is asynchronous and is used mainly to develop REST services which can be consumed by frontend. With node both client (browser code) and server both uses javascript language. There are many pre-built modules available.  MongoDB is a document based NoSQL database. In terms of CAP theorem it falls in CP, consistent and partition tolerant by default. Records are stored as Bson documents in mongoDB.</p>

      <h3>Differences between sql and nosql databases.</h3>
      <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go</p>
    </div>
    
  );
};

export default Blogs;
