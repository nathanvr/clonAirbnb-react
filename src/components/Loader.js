const Loader = () => {
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    return images;
  }

  return importAll(
    require.context('../images/cabañita', false, /\.(png|jpe?g|svg|webp)$/)
  );
};

export default Loader;
