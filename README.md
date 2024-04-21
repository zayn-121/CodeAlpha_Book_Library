# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//   return (<div className="App">
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Header handleSearch={handleSearch} />} />
//       <Route path="/" element={
//         <div>
//           {isLoading ? <Shimmer /> : <BookResult searchResults={searchResults} />}
//         </div>
//       } />
//       <Route path="/borrowedbook" element={<BorrowedBook />} />
//     </Routes>
//   </BrowserRouter>
// </div>
//   );