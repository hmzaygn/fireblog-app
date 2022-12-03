import { onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { toastSuccess } from "./toastify";

export const addBlog = (blogInfo) => {
  const blogRef = ref(db, "blogs/");
  const newBlogRef = push(blogRef);

  set(newBlogRef, {
    title: blogInfo.title,
    desc: blogInfo.desc,
    img: blogInfo.img,
    email: blogInfo.email,
  });

  toastSuccess("Added Successfully");
};

export const useFetch = () => {
  const [blogList, setBlogList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const blogRef = ref(db, "blogs/");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArr = [];

      for (let id in data) {
        blogArr.push({ id, ...data[id] });
      }
      setBlogList(blogArr);
      setIsLoading(false);
    });
  }, []);
  return { isloading, blogList };
};

export const deleteBlog = (id) => {
  remove(ref(db, "blogs/" + id));
  toastSuccess("Deleted Successfully");
};

export const putBlog = (info) => {
  const updates = {};

  updates["blogs/" + info.id] = info;

  return update(ref(db), updates);
};
