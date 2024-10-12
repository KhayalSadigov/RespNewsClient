import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import ImageUploader from "quill-image-uploader";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import { useContext, useState } from "react";
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";
import { DataContext } from "../../Context/dataContext";
import { TagInput } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

Quill.register("modules/imageUploader", ImageUploader);

const BlogEditor = () => {
  const store = useContext(DataContext);

  const [content, setContent] = useState("");

  const [title, setTitle] = useState("");

  const [tags, setTags] = useState([]);

  const [category, setCategory] = useState("other");
  const [images, setImages] = useState([]);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    console.log("first");
    let payload = {};
    payload.title = title;
    payload.content = content;
    payload.category = category;
    payload.tags = tags;
    payload.images = images;
    if (store.addLang.data == "AZ") payload.lang = "AZ";
    else if (store.addLang.data == "EN") payload.lang = "AZ";
    else payload.lang = "RU";
    console.log(payload);
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };
    });
  };

  return (
    <div className={styles.edit}>
      <div
        className={styles.block}
      >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Başlıq"
          variant="outlined"
        />
        <div className={styles.imageInp}>
          <InputLabel id="demo-simple-select-label">Şəkil seçin :</InputLabel>
          <input
            type="file"
            placeholder="Şəkil seçin"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          modules={modules}
          theme="snow"
          placeholder="Blog yazınızı buraya yazın..."
          className={styles.quill}
        />
        <div className={styles.categories}>
          <InputLabel id="demo-simple-select-label">Kateqoriyalar :</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className={styles.select}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <MenuItem value="sport">Sport</MenuItem>
            <MenuItem value="siyasi">Siyasi</MenuItem>
            <MenuItem value="iqtisadi">Iqtisadi</MenuItem>
          </Select>
        </div>
        <div className={styles.tags}>
          <InputLabel id="demo-simple-select-label">Taglar :</InputLabel>
          <TagInput
            value={tags}
            onChange={async (value) => {
              setTags(value);
            }}
            block
          />
        </div>
        <div>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`img-${index}`} width="100" />
          ))}
        </div>
        <Button className={styles.btn} onClick={handleSubmit}>
          Paylaş
        </Button>
      </div>
    </div>
  );
};

export default BlogEditor;
