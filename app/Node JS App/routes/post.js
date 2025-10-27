const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// create post route
router.post('/create', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Basic validation
    if (!name || !description ) {
      return res.status(400).json({
        success: false,
        message: 'Name and description are required.'
      });
    }

   

 
    const newPost = await Post.create({
      name,
      description,
    });

   
    res.status(201).json({
      success: true,
      message: 'Post created successfully.',
      data: {
        post: {
          id: newPost.id,
          name: newPost.name,
          description: newPost.description
        },
        
      }
    });

  } catch (error) {
    console.error('Post creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error during post creation.'
    });
  }
});

// create post route
router.get('/all', async (req, res) => {
  try {
    
    const allPost = await Post.findAll();

    res.status(201).json({
      success: true,
      message: 'All posts fetched successfully.',
      data: {
        posts: allPost,
        
      }
    });

  } catch (error) {
    console.error('Post retrieval error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error during post retrieval.'
    });
  }
});

// // Login route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Basic validation
//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'Email and password are required.'
//       });
//     }

//     // Find user by email
//     const user = await User.findByEmail(email);
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid email or password.'
//       });
//     }

//     // Check password
//     const isPasswordValid = await comparePassword(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid email or password.'
//       });
//     }

//     // Generate token
//     const token = generateToken(user.id);

//     res.json({
//       success: true,
//       message: 'Login successful.',
//       data: {
//         user: {
//           id: user.id,
//           username: user.username,
//           email: user.email
//         },
//         token
//       }
//     });

//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Internal server error during login.'
//     });
//   }
// });

module.exports = router;
