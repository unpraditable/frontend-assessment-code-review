# Frontend Assessment - Review

## 1. Exposed secret in .env.local (blocker)

- what's wrong:
  We have .env.local file pushed to the repository
- why it matters:
  If we expose this repository to someone who don't have an authority to contribute to our code, they can steal the secret in .env.local and can access freely to the internal database and API
- the fix:
  Add .env.local to .gitignore, then rewrite the git history of the commit which added the .env.local file

## 2. Usage of dangerouslySetInnerHtml (blocker)

- what's wrong:
  We have `dangerouslySetInnerHTML` code in ProductCard, this can be harmful for XSS security
- why it matters:
  Users can inject script and execute code to the html shown in card product and can do harm from this.
- the fix:
  Quickest way is just to print the string of `product description`, later if we have time, we can sanitize the HTML (using this approach: https://dev.to/hijazi313/using-dangerouslysetinnerhtml-safely-in-react-and-nextjs-production-systems-115n)

## 3. Image does not have alt attribute (should-fix)

- what's wrong:
  Image in product card does not have `alt` attribute
- why it matters:
  `alt` attribute is important for accessibility, our friends who need to access our web with `screen-reader` cannot "read" the image.
- the fix:
  just add the `alt` attribute, using `product name`

## 4. Usage of `any` type (should-fix)

- what's wrong:
  Onchange function in `SearchBar` and products and product in product list page use `any` as their type
- why it matters:
  Type correctness is crucial in TypeScript, if we use `any` we may not catch any potential bug related to type and it will defeat the purpose of using TypeScript. Linter in CI/CD will most likely reject it too.
- the fix:
  separate product type in data.ts into a single interface file, then use it for `product` type. For onChange, just use () => void

## 5. Debounce search query (should-fix)

- what's wrong:
  the search query in search bar does not have debounce, so every time the user type the search query, it will immediately request new get product API request
- why it matters:
  it will harm the performance because the app will request new search term everytime user type just one letter or remove just one letter
- the fix:
  add debounce search, simplest approach: https://dev.to/remejuan/react-debouncing-input-with-useeffect-3nhk

## 6. Change product card div to <li> and its container (className="grid") to <ul> (nice-to-have)

- what's wrong:
  Product card in product list page is still using <div> and its container still using <div> too
- why it matters:
  Semantically its more correct to render list file with list item, like <ul> and <li>, and it will help accessibility too
- the fix:
  change <div> in product card and its container to <ul> (container) and <li> (product card)

## 7. Use custom hooks for fetch API (nice-to-have)

- what's wrong:
  We still use fetch API directly, instead of custom hooks
- why it matters:
  Code will be more readable if we separate it into custom hooks
- the fix:
  Create custom hooks for fetch API

## 8. Style the components (nice-to-have)

- what's wrong:
  All components are not styled yet
- why it matters:
  Style is important for presentation for user
- the fix:
  Create the stylesheets

## 9. Usage of <Image> in next JS instead of <img> (nice-to-have)

- what's wrong:
  We still use <img> for images, in Next JS it will be better if we use <Image>
- why it matters:
  <Image> in Next JS has built in performance kits, like lazy-load
- the fix:
  Change <img> to <Image>

## 10. Usage of index as key in ProductList (should-fix)

- what's wrong:
  We still use index as key to render Product List Item
- why it matters:
  key should be unique and should not be using index, it will harm performance if user add or remove new product list item
- the fix:
  use product id instead of index

## Build result

```
Creating an optimized production build ...
 ✓ Compiled successfully
   Skipping validation of types
   Skipping linting
 ✓ Collecting page data
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    6.95 kB          94 kB
├ ○ /_not-found                          871 B            88 kB
├ ƒ /api/products                        0 B                0 B
└ ○ /products                            6.77 kB        93.9 kB
+ First Load JS shared by all            87.1 kB
  ├ chunks/23-f2c2ec5da154e115.js        31.5 kB
  ├ chunks/fd9d1056-62aaf4b921c84028.js  53.6 kB
  └ other shared chunks (total)          1.93 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```
