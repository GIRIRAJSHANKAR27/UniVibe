import React from "react";

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      padding: "16px",
      marginBottom: "16px",
      backgroundColor: "#fff",
      maxWidth: "600px"
    }}>
      <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>{post.title}</h2>
      <p style={{ marginTop: "8px", marginBottom: "8px", lineHeight: "1.5" }}>{post.description}</p>
      {post.image && (
        <img
          src={`http://localhost:5000${post.image}`}
          alt="post"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "8px",
            objectFit: "cover"
          }}
        />
      )}
      <span style={{
        display: "inline-block",
        backgroundColor: "#4f46e5",
        color: "#fff",
        padding: "4px 12px",
        borderRadius: "9999px",
        fontSize: "0.85rem",
        fontWeight: "500"
      }}>
        {post.intent}
      </span>
    </div>
  );
};

export default PostCard;
