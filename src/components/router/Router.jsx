import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../pages/inicio";
import { Articulos } from "../pages/Articulos";
import { Crear } from "../pages/Crear";
import { Editar } from "../pages/Editar";
import { Busqueda } from "../pages/Busqueda";
import { ArticuloSingle } from "../pages/ArticuloSingle";
import { Header } from "../layouts/Header";
import { Nav } from "../layouts/Nav";
import { Sidebar } from "../layouts/Sidebar";
import { Footer } from "../layouts/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/articulo-single" element={<ArticuloSingle />} />
        </Routes>
      </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
