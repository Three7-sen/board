/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. 告诉 Tailwind 扫描哪些文件 (裁剪的关键)
  content: ["./*.{html,js}"],

  darkMode: "class",

  theme: {
    extend: {
      // 3. 移植过来的颜色变量
      colors: {
        primary: "#1B4D3E", // British Racing Green
        secondary: "#1e3a8a", // Navy Blue
      },

      // 4. 移植过来的字体设置
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lora", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [
    // 如果你用了 tailwindcss/forms 等插件，需要在这里 npm install 并 require
    // 目前看你的 CDN 链接里包含 forms, typography, container-queries
    // 建议先跑通基础版，如果样式崩了再安装插件:
    // npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/container-queries
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}