import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function NewsPage() {
  const store = useContext(DataContext)
  store.route.setData("news");
  return <div>News</div>;
}

export default NewsPage;


// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Quill varsayılan stili
// import axios from 'axios';

// const App = () => {
//   const [content, setContent] = useState(''); // Şu anki blog içeriği
//   const [blogs, setBlogs] = useState([]); // Tüm blog gönderilerini tutmak için state

//   // Quill araç çubuğu seçenekleri
//   const modules = {
//     toolbar: {
//       container: [
//         [{ 'header': [1, 2, false] }],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//         ['link', 'image'], // Resim ekleme seçeneği burada
//         ['clean'] // Temizleme butonu
//       ],
//       handlers: {
//         image: imageHandler // Özel resim handler'ı
//       }
//     }
//   };

//   // Resim yükleme ve editöre ekleme işlemi
//   const imageHandler = () => {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();

//     input.onchange = async () => {
//       const file = input.files[0];
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         // Sunucuya resim yüklemek için bir API çağrısı yapalım
//         const response = await axios.post('https://api.imgbb.com/1/upload?key=YOUR_API_KEY', formData);
//         const imageUrl = response.data.data.url;

//         // Quill'e image URL'sini ekleyelim
//         const editor = this.quill.getEditor();
//         const range = editor.getSelection();
//         editor.insertEmbed(range.index, 'image', imageUrl);
//       } catch (error) {
//         console.error('Resim yükleme hatası:', error);
//       }
//     };
//   };

//   // İçerik değişikliğini izleme
//   const handleChange = (value) => {
//     setContent(value);
//   };

//   // Blog gönderisini kaydet ve sayfada göster
//   const handleSave = () => {
//     if (content.trim()) {
//       // İçeriği mevcut bloglar listesine ekleyelim
//       setBlogs((prevBlogs) => [...prevBlogs, content]);
//       // Formu temizle
//       setContent('');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Blog Yazısı Düzenleyici (Resim Özellikli)</h1>
//       <ReactQuill
//         value={content}
//         onChange={handleChange}
//         modules={modules}
//         theme="snow"
//       />
//       <button onClick={handleSave} style={{ marginTop: '20px', padding: '10px 20px' }}>
//         Blog Gönderisini Kaydet
//       </button>

//       <div style={{ marginTop: '40px' }}>
//         <h2>Blog Gönderileri</h2>
//         {/* Blog gönderilerini listeleme */}
//         {blogs.map((blogContent, index) => (
//           <div
//             key={index}
//             style={{
//               border: '1px solid #ddd',
//               padding: '20px',
//               marginBottom: '20px',
//               backgroundColor: '#f9f9f9',
//             }}
//           >
//             <div dangerouslySetInnerHTML={{ __html: blogContent }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
