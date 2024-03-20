import { useEffect, useState } from "react";
import Therapy from "@/data/db/home/therapy/Therapy";
import TherapyRepository from "@/data/db/home/therapy/TherapyRepository"
import TherapyCollection from "@/data/db/home/therapy/TherapyCollection"

export function useTherapy() {
    const repo: TherapyRepository = new TherapyCollection();

    const [therapy, setTherapy] = useState<Therapy>(Therapy.vazio());
    const [therapies, setTherapies] = useState<Therapy[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((therapy) => {
            setTherapies(therapy);
        });
    }

    return {
        therapy,
        therapies,
    }
}