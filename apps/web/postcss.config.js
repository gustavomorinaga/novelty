import tailwindcss from 'tailwindcss';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),

    //But others, like autoprefixer, need to run after,
    postcssNested(),
    autoprefixer(),
    cssnano({ preset: 'default' })
  ]
};

export default config;
