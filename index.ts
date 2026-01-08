import Products from "./Products";

//plugins/blog/index.ts
const plugin = {
  _id: "695fba82672e2493b69f0cd9",
  name: "Products",
  slug: "products",
  version: "1.0.0",
  author: "Mohid",
  description: "",
  type: "install",
  githubUrl: "https://github.com/Mohidul10587/products.git",
  isEnabled: true,
  Products: Products,
  installStatus: "installed" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default plugin;
