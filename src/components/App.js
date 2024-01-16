import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

// const blogName = blogData.name;

function App() {
  return (
    <div className="App">
      <Header name= {blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
      <Article title={blogData.title} date={blogData.date} preview={blogData.preview}/>
    </div>
  );
}

export default App;
