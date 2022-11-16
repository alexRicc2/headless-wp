import { PostsPage } from "./pages/PostsPage/index";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/index";
import { Footer } from "./components/Footer";
import { Post } from "./pages/Post/index";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<PostsPage />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
