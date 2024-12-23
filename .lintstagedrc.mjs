export default {
  '*.{js,jsx,ts,tsx,vue}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
};
