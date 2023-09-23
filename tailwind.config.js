
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'blackish': "#0E1D26",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

