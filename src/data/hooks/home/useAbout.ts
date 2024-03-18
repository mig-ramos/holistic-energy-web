import { useEffect, useState } from "react";
import About from "@/data/db/home/about/About";
import AboutRepository from "@/data/db/home/about/AboutRepository";
import AboutCollection from "@/data/db/home/about/AboutCollection";

export function useAbout() {
    const repo: AboutRepository = new AboutCollection();

    const [about, setAbout] = useState<About>(About.vazio());
    const [abouts, setAbouts] = useState<About[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((about) => {
            setAbouts(about);
        });
    }

    return {
        about,
        abouts
    }
}