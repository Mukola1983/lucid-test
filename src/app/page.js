"use client";

import styles from "./page.module.css";
import MainPage from "./components/mainPage/MainPage";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query-client";

export default function Home() {
  return (
    <div className={styles.page}>
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>

    </div>
  );
}
