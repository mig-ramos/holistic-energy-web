import { useEffect, useState } from "react";
import Slide from "@/data/db/banner/Slide";
import SlideRepository from "@/data/db/banner/SlideRepository";
import SlideCollection from "@/data/db/banner/SlideCollection";

export function useSlide() {
    const repo: SlideRepository = new SlideCollection();

    const [slide, setSlide] = useState<Slide>(Slide.vazio());
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((banner) => {
            setSlides(banner);
        });
    }

    return {
        slide,
        slides,
    }
}