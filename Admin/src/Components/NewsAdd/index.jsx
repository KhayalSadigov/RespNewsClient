import styles from "./index.module.scss";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import { TagInput } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


function BlogEditor() {
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
    let payload = {};
    payload.title = title;
    payload.content = content;
    payload.category = category;
    payload.tags = tags;
    payload.images = images;
    payload.lang = store.addLang.data;
    console.log(payload);

    // Reset
    setContent("");
    setTitle("");
    setTags([]);
    setCategory("other");
    setImages([]);
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
    ],
  };

  return (
    <div className={styles.edit}>
      <div className={styles.head}>
        <h5>Dil Seçimi:</h5>
        <span
          onClick={() => {
            store.addLang.setData("AZ");
          }}
          style={
            store.addLang.data == "AZ"
              ? { backgroundColor: "#2F3C54", color: "white" }
              : {}
          }
        >

          AZ
        </span>
        <span
          onClick={() => {
            store.addLang.setData("EN");
          }}
          style={
            store.addLang.data == "EN"
              ? { backgroundColor: "#2F3C54", color: "white" }
              : {}
          }
        >
          EN
        </span>
        <span
          onClick={() => {
            store.addLang.setData("RU");
          }}
          style={
            store.addLang.data == "RU"
              ? { backgroundColor: "#2F3C54", color: "white" }
              : {}
          }
        >
          RU
        </span>
      </div>
      <div className={styles.block}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Başlıq"
          variant="outlined"
        />
        <div className={styles.imageInp}>
          <input
            type="file"
            placeholder="Şəkil seçin"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            id="inp"
            style={{ display: "none" }}
          />
          <label htmlFor="inp">Şəkil seçin</label>
          <div
            style={images.length ? {} : { display: "none" }}
            className={styles.images}
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt={`img-${index}`} width="100" />
            ))}
            <div
              className={styles.deleteImg}
              onClick={() => {
                setImages([]);
              }}
            >
              Şəkilləri silin
            </div>
          </div>
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
            className={styles.inp}
            value={tags}
            onChange={(value) => {
              setTags(value);
            }}
            block
          />
        </div>
        <Button className={styles.btn} onClick={handleSubmit}>
          Paylaş
        </Button>
      </div>
    </div>
  );
}

export default BlogEditor;
