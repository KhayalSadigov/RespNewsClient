import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import ImageUploader from "quill-image-uploader";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import { useState } from "react";

Quill.register("modules/imageUploader", ImageUploader);

const BlogEditor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    console.log("Submitted Content: ", content);
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["link", "image"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  };

  return (
    <div className="editor-container">
      <ReactQuill
        value={content || ""}
        onChange={handleContentChange}
        modules={modules}
        theme="snow"
        placeholder="Blog yazınızı buraya yazın..."
      />
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit
      </button>
    </div>
  );
};

export default BlogEditor;
