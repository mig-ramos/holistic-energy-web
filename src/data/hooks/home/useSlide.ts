import { useEffect, useState } from "react";
import Slide from "@/data/db/home/banner/Slide";
import SlideRepository from "@/data/db/home/banner/SlideRepository";
import SlideCollection from "@/data/db/home/banner/SlideCollection";

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