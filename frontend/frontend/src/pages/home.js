import React, { useState, useEffect } from "react";
import PostForm from "../components/postForm";
import PostCard from "../components/postCard";
import API from "../api/api";

const categories = ["All", "Lost & Found", "Event", "Announcement"];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.intent === selectedCategory);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#f7f8fc",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#1f2937",
        }}
      >
        UniVibe Feed
      </h1>

      <PostForm onPostCreated={handleNewPost} />

      {/* Category Tabs */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: "9999px",
              border: selectedCategory === cat ? "2px solid #4f46e5" : "1px solid #ccc",
              backgroundColor: selectedCategory === cat ? "#4f46e5" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#333",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: selectedCategory === cat ? "0 4px 6px rgba(79,70,229,0.3)" : "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p style={{ color: "#555", fontSize: "1rem" }}>No posts in this category yet.</p>
      )}
    </div>
  );
};

export default Home;
