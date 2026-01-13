# Portfolio Website

A modern, professional portfolio website built with React, Vite, and JoyUI. Features a clean, uniform design with smooth animations and a responsive layout.

## 🚀 Features

- **Modern UI**: Built with JoyUI for a consistent, professional design
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: Integrated with EmailJS for email functionality
- **Dark Theme**: Professional dark color scheme
- **Fast Performance**: Optimized with Vite

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JoyUI** - React component library
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Add your EmailJS credentials to `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Update Personal Information

1. **Contact Information**: Edit `src/components/Hero.jsx` and `src/components/Contact.jsx`
2. **Social Links**: Update GitHub, LinkedIn URLs in the same files
3. **Experience**: Edit `src/components/Experience.jsx`
4. **Education**: Edit `src/components/Education.jsx`
5. **Projects**: Edit `src/components/Projects.jsx`

### Color Scheme

JoyUI uses a theme system. To customize colors, edit the theme in `src/App.jsx` or create a custom theme file.

## 📱 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Add environment variables in Netlify settings

## 📝 EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create an email service (Gmail recommended)
3. Create email templates (notification and auto-reply)
4. Get your Service ID, Template IDs, and Public Key
5. Add them to your `.env` file

See `.env.example` for the required variables.

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📧 Contact

For questions or suggestions, feel free to open an issue.

---

**Built with ❤️ using React, Vite, and JoyUI**
