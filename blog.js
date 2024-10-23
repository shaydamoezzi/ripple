// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmZ4WRyZldIlU_hl4Ss-T2OqBljaPjQg4",
  authDomain: "ripple-d77b3.firebaseapp.com",
  databaseURL: "https://ripple-d77b3-default-rtdb.firebaseio.com",
  projectId: "ripple-d77b3",
  storageBucket: "ripple-d77b3.appspot.com",
  messagingSenderId: "157753015677",
  appId: "1:157753015677:web:7db81e1922ee9bf65ba014",
  measurementId: "G-GWDS67G9LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Load blogs on page load
document.addEventListener('DOMContentLoaded', loadBlogs);

function editBlog(id) {
    const blogsRef = database.ref('blogs').child(id);
    blogsRef.once('value', (snapshot) => {
        const blog = snapshot.val();
        // Populate the form with the existing blog data
        document.getElementById('title').value = blog.title;
        document.getElementById('content').value = blog.content;
        document.getElementById('editIndex').value = id; // Set the index for editing
    });
}

// Function to load blogs from Firebase
function loadBlogs() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = ''; // Clear current list

    // Fetch blogs from Firebase
    const blogsRef = ref(database, 'blogs');
    onValue(blogsRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const blog = childSnapshot.val();
            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');
            blogPost.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <small>Created: ${blog.created} | Edited: ${blog.edited}</small>
                <button onclick="editBlog('${childSnapshot.key}')">Edit</button>
                <button onclick="deleteBlog('${childSnapshot.key}')">Delete</button>
                <hr>
            `;
            blogList.appendChild(blogPost);
        });
    });
}

// Add other functions for saving, editing, and deleting blogs here


document.addEventListener('DOMContentLoaded', function() {
    loadBlogs(); // Load existing blogs from Firebase

    document.getElementById('blog-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent normal form submission

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const editIndex = document.getElementById('editIndex').value;

        // Get current date
        const currentDate = new Date().toLocaleString();

        if (editIndex === "-1") {
            // Create new blog entry
            const newBlogRef = database.ref('blogs').push(); // Create a new entry
            newBlogRef.set({ title, content, created: currentDate, edited: currentDate });
        } else {
            // Edit existing blog entry
            const blogsRef = database.ref('blogs').child(editIndex);
            blogsRef.update({ title, content, edited: currentDate });
            document.getElementById('editIndex').value = "-1"; // Reset edit index
        }

        loadBlogs(); // Refresh the blog list
        this.reset(); // Clear the form
    });
});

