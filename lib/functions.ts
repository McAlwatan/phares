export const nextPages = (pagePath) => {

  const paths = ["/projects/sag", "/projects/rifaly", "/projects/sites", "/projects/sag", "/projects/nmb", "/projects/sites", "/projects/nendiwe"];
  const currentIndex = paths.indexOf(pagePath);
 const nextIndex = (currentIndex + 1) % paths.length;
 return {
    pagePath: paths[nextIndex],
  };
};

export const prevPages = {
  sag: "/projects/rifaly",
  rifaly: "/projects/sites",
  sites: "/projects/sag",
};