import { useEffect, useState } from "react";
import Slide from "@/data/db/home/slide/Slide";
import SlideRepository from "@/data/db/home/slide/SlideRepository";
import SlideCollection from "@/data/db/home/slide/SlideCollection";

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