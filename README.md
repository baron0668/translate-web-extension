# Translation app implemented using web extension.

This is a simple translation app that uses the Google Translate API to translate text from one language to another.\
After app installed on your browser, you can select text on any webpage and right click to translate it to another language.

# Dependencies
- build with vite and using plugin of vite-plugin-web-extension.
- TypeScript

# How to build
1. clone this repository and run `npm install`
2. create a `.env.local` file in the root directory and add the following:
`
VITE_API_KEY=YOUR_GOOGLE_TRANSLATE_API_KEY
`
3. run `npm run build` to build the extension
4. the built extension will be in the `dist` folder
5. alternative,  run `npm run dev` to start the development server

# Doc
- slides in `doc` folder