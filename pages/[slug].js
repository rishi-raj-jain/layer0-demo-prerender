const Dynamic = ({ slug }) => {
  return slug;
};

export default Dynamic;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
