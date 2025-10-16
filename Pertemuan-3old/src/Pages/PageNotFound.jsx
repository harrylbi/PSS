import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Halaman tidak ditemukan</p>
        <a
          href="/"
          className="text-blue-600 hover:underline"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
